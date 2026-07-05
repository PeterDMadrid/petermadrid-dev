import { Container } from "@/components/layout/container";

const skills = [
  "Laravel",
  "Vue.js",
  "Inertia.js",
  "MySQL / MS SQL Server",
  "TypeScript",
  "Tailwind CSS",
];

export function Skills() {
  return (
    <section id="skills" className="border-b border-rule py-24">
      <Container>
        <span className="font-mono text-xs text-gold">03 — Skills</span>
        <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3 md:grid-cols-3">
          {skills.map((s) => (
            <li
              key={s}
              className="border-b border-rule pb-3 font-body text-paper/80"
            >
              {s}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
