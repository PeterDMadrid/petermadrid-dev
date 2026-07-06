const QUERY = `
  query ($login: String!, $from: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from) {
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
  login: string,
  fromDate?: string
): Promise<ContributionCalendar | null> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;

  // Default to September 28, 2025 if no date provided
  const from = fromDate || "2025-09-28T00:00:00Z";

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: QUERY,
      variables: {
        login,
        from
      }
    }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) return null;

  const json = await res.json();
  return json?.data?.user?.contributionsCollection?.contributionCalendar ?? null;
}