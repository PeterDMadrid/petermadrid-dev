// components/sections/live-status-client.tsx (full file)
"use client";

import { useEffect, useState } from "react";
import type { LatestActivity } from "@/lib/github";

function useManilaClock() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const format = () =>
            new Intl.DateTimeFormat("en-GB", {
                timeZone: "Asia/Manila",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            }).format(new Date());

        setTime(format());
        const id = setInterval(() => setTime(format()), 1000);
        return () => clearInterval(id);
    }, []);

    return time;
}

function useRelativeTime(iso?: string) {
    const [label, setLabel] = useState("");

    useEffect(() => {
        if (!iso) return;
        const target = new Date(iso).getTime();

        const format = () => {
            const diffMins = Math.floor((Date.now() - target) / 60000);
            if (diffMins < 1) return "just now";
            if (diffMins < 60) return `${diffMins}m ago`;
            const hours = Math.floor(diffMins / 60);
            if (hours < 24) return `${hours}h ago`;
            return `${Math.floor(hours / 24)}d ago`;
        };

        setLabel(format());
        const id = setInterval(() => setLabel(format()), 30_000);
        return () => clearInterval(id);
    }, [iso]);

    return label;
}

export function LiveStatusClient({
    activity,
    currentlyBuilding,
}: {
    activity: LatestActivity | null;
    currentlyBuilding: string;
}) {
    const time = useManilaClock();
    const relative = useRelativeTime(activity?.occurredAt);

    return (
        <div className="mt-6 space-y-1.5 font-mono text-xs">
            <p className="text-muted">
                <span className="text-sage">{"$ "}</span>
                time: <span className="text-paper/80">{time || "—"}</span> PHT
            </p>

            {activity && (
                <p className="truncate text-muted">
                    <span className="text-sage">{"$ "}</span>
                    {activity.label}{" "}
                    <span className="text-paper/80">{activity.target}</span>
                    {activity.detail && (
                        <span className="text-paper/80">: {activity.detail}</span>
                    )}{" "}
                    <span className="text-muted/70">— {relative}</span>
                </p>
            )}

            <p className="text-muted">
                <span className="text-sage">{"$ "}</span>
                status: <span className="text-paper/80">{currentlyBuilding}</span>
            </p>
        </div >
    );
}