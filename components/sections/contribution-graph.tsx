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
        <div>
            <p className="font-mono text-xs text-gold">
                {calendar.totalContributions} Recent Contributions
            </p>
            <div className="relative mt-2 w-full overflow-x-auto pb-1">
                <div className="flex gap-[3px] sm:gap-[3px] md:gap-[3px]">
                    {calendar.weeks.map((week, i) => (
                        <div key={i} className="flex flex-col gap-[3px] sm:gap-[3px] md:gap-[3px]">
                            {week.contributionDays.map((day) => (
                                <span
                                    key={day.date}
                                    title={`${day.contributionCount} contributions on ${day.date}`}
                                    className={`
                                        rounded-[2px] 
                                        h-[10px] w-[10px] 
                                        sm:h-[10px] sm:w-[10px] 
                                        md:h-[10px] md:w-[10px]
                                        ${levelClass(day.contributionCount)}
                                    `}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}