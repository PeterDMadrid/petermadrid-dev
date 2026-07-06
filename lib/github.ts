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

  try {
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
          from,
        },
      }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const json = await res.json();
    return json?.data?.user?.contributionsCollection?.contributionCalendar ?? null;
  } catch {
    return null;
  }
}

export type LatestActivity = {
  label: string;
  target: string;
  detail?: string;
  occurredAt: string;
};

function formatEvent(event: any): Omit<LatestActivity, "occurredAt"> | null {
  const repoFullName: string | undefined = event.repo?.name;
  if (!repoFullName) return null;

  const target = repoFullName.split("/")[1] ?? repoFullName;

  switch (event.type) {
    case "PushEvent": {
      const commits = event.payload?.commits;
      if (!commits?.length) return null;
      const commit = commits[commits.length - 1];
      return {
        label: "pushed to",
        target,
        detail: commit.message?.split("\n")[0]?.slice(0, 72),
      };
    }
    case "PullRequestEvent": {
      const action = event.payload?.action;
      if (!action) return null;
      return { label: `${action} a PR in`, target };
    }
    case "IssuesEvent": {
      const action = event.payload?.action;
      if (!action) return null;
      return { label: `${action} an issue in`, target };
    }
    case "ReleaseEvent": {
      if (!event.payload?.release) return null;
      return { label: "published a release in", target };
    }
    case "CreateEvent": {
      if (event.payload?.ref_type !== "repository") return null;
      return { label: "created", target };
    }
    case "ForkEvent":
      return { label: "forked", target };
    case "WatchEvent":
      return { label: "starred", target };
    default:
      return null;
  }
}

export async function getLatestActivity(username: string): Promise<LatestActivity | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/events/public`, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {}),
      },
      next: { revalidate: 900 }, // 15 min — activity doesn't need second-level freshness
    });

    if (!res.ok) return null;

    const events = await res.json();
    if (!Array.isArray(events)) return null;

    for (const event of events) {
      const formatted = formatEvent(event);
      if (formatted) {
        return { ...formatted, occurredAt: event.created_at };
      }
    }

    return null;
  } catch {
    return null;
  }
}