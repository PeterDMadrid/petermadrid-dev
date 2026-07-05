const QUERY = `
  query ($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              weekday
            }
          }
        }
      }
    }
  }
`;

export interface ContributionDay {
    date: string;
    contributionCount: number;
    weekday: number;
}

export interface ContributionWeek {
    contributionDays: ContributionDay[];
}

export interface ContributionCalendar {
    totalContributions: number;
    weeks: ContributionWeek[];
}

export async function getContributions(
    login: string
): Promise<ContributionCalendar | null> {
    const token = process.env.GITHUB_TOKEN;
    if (!token) return null;

    const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: QUERY, variables: { login } }),
        next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const json = await res.json();
    return json?.data?.user?.contributionsCollection?.contributionCalendar ?? null;
}
