"use client";

import { useEffect, useRef, useState } from "react";

type BootLine = { text: string; tag?: string; tagColor?: string };
type ChatMessage = { role: "user" | "assistant"; text: string };

const BOOT_LINES: BootLine[] = [
    { text: "SYSTEM_BOOT: PETERMADRID.DEV // 2026" },
    { text: "INITIALIZING COGNITIVE PROFILE...", tag: "[OK]", tagColor: "text-sage" },
    { text: "LOADING: LARAVEL + VUE + INERTIA...", tag: "[OK]", tagColor: "text-sage" },
    { text: "LOADING: WEBSITE CREATION + AUTOMATION...", tag: "[OK]", tagColor: "text-sage" },
    { text: "LOADING: LMS + PAYMENT SYSTEMS...", tag: "[OK]", tagColor: "text-sage" },
    { text: "SUBJECT: Peter Madrid" },
    { text: "LOCATION: MANILA, PHILIPPINES" },
    { text: "STATUS: READY FOR INTAKE // SELECT AN ACTION BELOW_", tag: "[ONLINE]", tagColor: "text-gold" },
];

export function PortfolioSecretary() {
    const [visibleLines, setVisibleLines] = useState(0);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const bodyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (visibleLines >= BOOT_LINES.length) return;
        const timer = setTimeout(() => setVisibleLines((n) => n + 1), 350);
        return () => clearTimeout(timer);
    }, [visibleLines]);

    useEffect(() => {
        bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
    }, [messages, loading]);

    const bootDone = visibleLines >= BOOT_LINES.length;

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const question = input.trim();
        if (!question || loading) return;

        setMessages((m) => [...m, { role: "user", text: question }]);
        setInput("");
        setLoading(true);

        const res = await fetch("/api/chat", {
            method: "POST",
            body: JSON.stringify({ question }),
        });
        const data = await res.json();
        setMessages((m) => [...m, { role: "assistant", text: data.answer }]);
        setLoading(false);
    }

    return (
        <div className="overflow-hidden rounded-lg border border-rule bg-ink shadow-xl">
            <div className="flex items-center gap-2 border-b border-rule px-4 py-3">
                <span className="h-3 w-3 rounded-full" style={{ background: "#FF5F56" }} />
                <span className="h-3 w-3 rounded-full" style={{ background: "#FFBD2E" }} />
                <span className="h-3 w-3 rounded-full" style={{ background: "#27C93F" }} />
                <span className="flex-1 text-center font-mono text-xs text-muted">
                    peter@portfolio — zsh
                </span>
            </div>

            <div ref={bodyRef} className="h-96 space-y-1 overflow-y-auto p-6 font-mono text-sm">
                {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
                    <p key={i} className="text-paper/90">
                        <span className="text-muted">{"> "}</span>
                        {line.text}
                        {line.tag && <span className={`ml-2 ${line.tagColor}`}>{line.tag}</span>}
                    </p>
                ))}

                {bootDone &&
                    messages.map((m, i) => (
                        <p key={i} className={m.role === "user" ? "text-paper/90" : "text-sage"}>
                            <span className="text-muted">{m.role === "user" ? "> " : "$ "}</span>
                            {m.text}
                        </p>
                    ))}

                {loading && (
                    <p className="text-muted">
                        <span>{"$ "}</span>
                        <span className="animate-pulse">···</span>
                    </p>
                )}

                {bootDone && !loading && (
                    <form onSubmit={handleSubmit} className="flex items-center pt-1">
                        <span className="text-muted">{"> "}</span>
                        <input
                            autoFocus
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="ask about Peter's work"
                            className="flex-1 bg-transparent text-paper outline-none placeholder:text-muted/60"
                        />
                        <span className="animate-pulse text-paper">|</span>
                    </form>
                )}
            </div>
        </div>
    );
}