<div align="center">

```
SYSTEM_BOOT: PETERMADRID.DEV // 2026
INITIALIZING PORTFOLIO...              [OK]
LOADING: NEXT.JS + TYPESCRIPT...       [OK]
LOADING: TERMINAL SECRETARY (AI)...    [OK]
LOADING: LIVE GITHUB TELEMETRY...      [OK]
STATUS: READY FOR DEPLOYMENT_          [ONLINE]
```

# Peter Madrid — Portfolio

**Full-stack software engineer.** Laravel & Vue.js by trade, this site by night.

[![Next.js](https://img.shields.io/badge/Next.js-14181a?style=flat-square&logo=nextdotjs&logoColor=c9a227)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-14181a?style=flat-square&logo=typescript&logoColor=c9a227)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-14181a?style=flat-square&logo=tailwindcss&logoColor=c9a227)](https://tailwindcss.com)
[![Gemini](https://img.shields.io/badge/Gemini_API-14181a?style=flat-square&logo=googlegemini&logoColor=c9a227)](https://ai.google.dev)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-14181a?style=flat-square&logo=vercel&logoColor=c9a227)](https://vercel.com)

</div>

---

## [ ABOUT ]

A portfolio that doesn't just describe the work — it demonstrates it. Built as a dark-mode terminal, where every panel earns its place: a live GitHub feed instead of self-reported stats, an AI concierge instead of a static bio, and a boot sequence that never really finishes — it settles into an idle log.

## [ FEATURES ]

- **Terminal Secretary** — an AI-powered chat assistant (Gemini) that boots up like a real terminal and answers visitor questions about the work, in character the whole way through.
- **Live status line** — no self-graded stats. A running clock in Manila time, the latest verifiable public GitHub activity, and a manually-authored "currently building" line. Proof by data, not by claim.
- **Real contribution graph** — pulled live from the GitHub GraphQL API, not a static image.
- **Categorized skills** — grouped by Languages, Frameworks, Databases, Cloud & DevOps, and Tools & Practices, each with a verified brand icon where one genuinely exists, and a plain terminal marker where it doesn't, rather than a wrong or invented logo.
- **One consistent visual language** — a `[BRACKET_TAG]` convention borrowed from the boot sequence and reused everywhere: status chips, section eyebrows, skill categories. One system, not five different ideas stitched together.

## [ TECH STACK ]

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router, Server Components) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Icons | react-icons (Simple Icons) |
| AI | Gemini API |
| Data | GitHub GraphQL + REST APIs |
| Fonts | Fraunces (display) · Inter (body) · IBM Plex Mono (code / UI) |

## [ GETTING STARTED ]

```bash
git clone https://github.com/PeterDMadrid/portfolio.git
cd portfolio
npm install
cp .env.example .env.local
npm run dev
```

## [ ENVIRONMENT VARIABLES ]

| Variable | Required | Purpose |
|---|---|---|
| `GITHUB_TOKEN` | Yes | Powers the contribution graph and the live activity line |
| `GEMINI_API_KEY` | Yes | Powers the Terminal Secretary chat assistant |

## [ PROJECT STRUCTURE ]

```
.
├── app/
│   ├── page.tsx
│   └── api/chat/
├── components/
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── portfolio-secretary.tsx
│   │   ├── contribution-graph.tsx
│   │   ├── live-status.tsx
│   │   ├── skills.tsx
│   │   ├── experiences.tsx
│   │   ├── projects.tsx
│   │   ├── about.tsx
│   │   └── contact.tsx
│   ├── layout/
│   │   └── container.tsx
│   └── ui/
│       └── button.tsx
└── lib/
    ├── github.ts
    └── site-config.ts
```

## [ DESIGN NOTES ]

Dark ink background, sage and gold accents, hairline rules standing in for a ruled notebook. Fraunces carries the display type; IBM Plex Mono carries everything that behaves like a system reading itself back to you. The signature idea: nothing on this page states a number about the author that the author decided for himself. Every claim is either live, linked, or written in the first person as a status, not a score.

## [ CONTACT ]

- GitHub — [github.com/PeterDMadrid](https://github.com/PeterDMadrid)
- LinkedIn — [in/peter-madrid](https://www.linkedin.com/in/peter-madrid-99752223b/)
- Email — petermadrid0421@gmail.com

---

<div align="center">
<sub>Built by hand. No template. No stock stats.</sub>
</div>
