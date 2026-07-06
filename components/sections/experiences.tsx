import { Container } from "@/components/layout/container";

type Experience = {
    index: string;
    role: string;
    company: string;
    period: string;
    stack: string[];
    description: string[];
};

const experiences: Experience[] = [
    {
        index: "01",
        role: "Freelance Software Engineer",
        company: "Margallo Review Center",
        period: "Jun 2026 — Jul 2026",
        stack: ["Laravel", "Vue 3", "Inertia.js", "Cloudflare R2"],
        description: [
            "Built full-stack enrollment and LMS platform for civil engineering board exam review center",
            "Designed multi-step student enrollment with role-based package access",
            "Implemented installment payment tracking with proof-of-payment upload and admin approval workflow",
            "Built video streaming pipeline: HLS transcoding, AES-128 encryption, Cloudflare R2 storage",
            "Automated transactional email notifications via Resend",
            "Built batch management system with automatic role revocation on batch close",
            "Built admin reporting dashboard with revenue breakdowns",
        ],
    },
    {
        index: "02",
        role: "Software Engineer",
        company: "Digimax IT Solutions",
        period: "Nov 2025 — Jun 2026",
        stack: ["Laravel", "Vue.js", "MySQL", "SSH"],
        description: [
            "Built customized Computerized Accounting Systems (CAS) for multiple clients, tailoring workflows to client-specific accounting requirements",
            "Engineered automated receipt-to-document pipeline for two airline clients via secure SSH, converting receipts into invoices, credit memos, and accounting reports",
            "Migrated data across CAS systems with differing schemas for 5+ client deployments, maintaining integrity and traceability",
            "Established reusable architecture patterns across 10+ concurrent projects, reducing code duplication within a 3-person team",
            "Led development of configurable system modules, cutting per-client setup time ~40%",
            "Managed server-side deployments via FileZilla, MobaXterm/Termius, direct SSH to Linux production servers",
        ],
    },
    {
        index: "03",
        role: "Intern Software Developer",
        company: "Hipe Japan Inc",
        period: "Feb 2024 — Jun 2024",
        stack: ["Laravel", "MVC", "REST"],
        description: [
            "Built and deployed microblogging app in Laravel (MVC, RESTful architecture)",
            "Led 4-member team through 4 Agile sprints, delivering functional prototype in 8 weeks",
            "Fixed production UI bugs alongside senior engineer, reducing user-reported issues",
            "Presented technical demo to engineering panel",
        ],
    },
];

export function Experience() {
    return (
        <section id="experience" className="border-b border-rule py-24">
            <Container>
                <span className="font-mono text-xs text-gold">01 — Experience</span>
                <div className="mt-8 divide-y divide-rule border-t border-rule">
                    {experiences.map((e) => (
                        <div
                            key={e.index}
                            className="grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr_auto] gap-2 md:gap-4 py-6"
                        >
                            <span className="font-mono text-xs text-muted">{e.index}</span>
                            <div className="col-span-1 md:col-span-1">
                                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                                    <h3 className="font-display text-xl md:text-2xl text-paper">
                                        {e.role} · {e.company}
                                    </h3>
                                    <span className="md:hidden font-mono text-xs text-muted mt-1 md:mt-0 md:ml-4 whitespace-nowrap">
                                        {e.period}
                                    </span>
                                </div>
                                <ul className="mt-2 space-y-1">
                                    {e.description.map((item, i) => (
                                        <li key={i} className="font-body text-sm text-paper/70">
                                            <span className="text-sage">— </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-3 font-mono text-xs text-sage">
                                    {e.stack.join(" · ")}
                                </p>
                            </div>
                            <span className="hidden md:block font-mono text-xs text-muted whitespace-nowrap">
                                {e.period}
                            </span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}