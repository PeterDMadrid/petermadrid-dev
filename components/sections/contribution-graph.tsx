// contribution-graph.tsx
import { getContributions } from "@/lib/github";

function levelClass(count: number) {
    if (count === 0) return "bg-rule";
    if (count <= 2) return "bg-sage/25";
    if (count <= 5) return "bg-sage/55";
    if (count <= 9) return "bg-sage/85";
    return "bg-gold";
}

export async function ContributionGraph({ username }: { username: string }) {
    const calendar = await getContributions(username, "2025-09-28T00:00:00Z");

    if (!calendar) {
        return (
            <p className="font-mono text-xs text-muted">
                Contribution graph unavailable.
            </p>
        );
    }

    return (
        <div className="border-t border-rule pt-4">
            <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] tracking-[0.2em] text-muted">
                    [ACTIVITY]
                </p>
                <p className="font-mono text-xs text-gold">
                    {calendar.totalContributions} recent contributions
                </p>
            </div>
            <div className="relative mt-3 w-full overflow-x-auto pb-1">
                <div className="flex gap-[3px]">
                    {calendar.weeks.map((week, i) => (
                        <div key={i} className="flex flex-col gap-[3px]">
                            {week.contributionDays.map((day) => (
                                <span
                                    key={day.date}
                                    title={`${day.contributionCount} contributions on ${day.date}`}
                                    className={`h-[10px] w-[10px] rounded-[2px] ${levelClass(day.contributionCount)}`}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}