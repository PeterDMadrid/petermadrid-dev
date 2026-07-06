
import { getLatestActivity } from "@/lib/github";
import { siteConfig } from "@/lib/site-config";
import { LiveStatusClient } from "@/components/sections/live-status-client";

export async function LiveStatus({ username }: { username: string }) {
    const activity = await getLatestActivity(username);

    return (
        <LiveStatusClient
            activity={activity}
            currentlyBuilding={siteConfig.currentlyBuilding}
        />
    );
}