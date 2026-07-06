import { Container } from "@/components/layout/container";

type Experience = {
    index: string;
    role: string;
    company: string;
    period: string;
    stack: string[];
    description: string;
};

const experiences: Experience[] = [
    {
        index: "01",
        role: "Freelance Software Engineer",
        company: "Margallo Review Center",
        period: "Jun 2026 — Jul 2026",
        stack: ["Laravel", "Vue 3", "Inertia.js", "Cloudflare R2"],
        description: "Enrollment + LMS platform: HLS video pipeline with AES-128 encryption, installment payments, batch management.",
    },
    {
        index: "02",
        role: "Software Engineer",
        company: "Digimax IT Solutions",
        period: "Nov 2025 — Jun 2026",
        stack: ["Laravel", "Vue.js", "MySQL", "SSH"],
        description: "Custom accounting systems for multiple clients; cross-schema data migration; reusable architecture cutting setup time ~40%.",
    },
    {
        index: "03",
        role: "Intern Software Developer",
        company: "Hipe Japan Inc",
        period: "Feb 2024 — Jun 2024",
        stack: ["Laravel", "MVC", "REST"],
        description: "Built and deployed microblogging app; led 4-member team through 4 Agile sprints in 8 weeks.",
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
                            className="grid grid-cols-[60px_1fr_auto] items-baseline gap-4 py-6"
                        >
                            <span className="font-mono text-xs text-muted">{e.index}</span>
                            <div>
                                <h3 className="font-display text-2xl text-paper">
                                    {e.role} · {e.company}
                                </h3>
                                <p className="mt-1 font-body text-sm text-paper/70">
                                    {e.description}
                                </p>
                                <p className="mt-2 font-mono text-xs text-sage">
                                    {e.stack.join(" · ")}
                                </p>
                            </div>
                            <span className="font-mono text-xs text-muted">{e.period}</span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}