import { getContributions } from "@/lib/github";

function levelClass(count: number) {
    if (count === 0) return "bg-rule";
    if (count <= 2) return "bg-sage/25";
    if (count <= 5) return "bg-sage/55";
    if (count <= 9) return "bg-sage/85";
    return "bg-gold";
}

export async function ContributionGraph({ username }: { username: string }) {
    const calendar = await getContributions(username);

    if (!calendar) {
        return (
            <p className="font-mono text-xs text-muted">
                Contribution graph unavailable.
            </p>
        );
    }

    return (
        <div className="mt-10">
            <p className="font-mono text-xs text-gold">
                {calendar.totalContributions} contributions in the last year
            </p>
            <div className="mt-3 flex gap-[3px] overflow-x-auto pb-2">
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
    );
}
