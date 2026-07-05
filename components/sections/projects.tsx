import { Container } from "@/components/layout/container";
import type { Project } from "@/types";

const projects: Project[] = [
  {
    index: "01",
    title: "Project name",
    year: "2026",
    stack: ["Laravel", "Vue", "Inertia.js"],
    description: "One-line description of the problem this project solves.",
  },
  {
    index: "02",
    title: "Project name",
    year: "2025",
    stack: ["Laravel", "MySQL"],
    description: "One-line description of the problem this project solves.",
  },
];

export function Projects() {
  return (
    <section id="work" className="border-b border-rule py-24">
      <Container>
        <span className="font-mono text-xs text-gold">01 — Work</span>
        <div className="mt-8 divide-y divide-rule border-t border-rule">
          {projects.map((p) => (
            <div
              key={p.index}
              className="grid grid-cols-[60px_1fr_auto] items-baseline gap-4 py-6"
            >
              <span className="font-mono text-xs text-muted">{p.index}</span>
              <div>
                <h3 className="font-display text-2xl text-paper">{p.title}</h3>
                <p className="mt-1 font-body text-sm text-paper/70">
                  {p.description}
                </p>
                <p className="mt-2 font-mono text-xs text-sage">
                  {p.stack.join(" · ")}
                </p>
              </div>
              <span className="font-mono text-xs text-muted">{p.year}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
