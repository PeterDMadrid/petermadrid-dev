import { Container } from "@/components/layout/container";

const skills = [
  // Languages
  "PHP",
  "JavaScript",
  "TypeScript",
  "Python",
  // Frameworks
  "Laravel",
  "Vue.js",
  "Vue 3",
  "Inertia.js",
  "Next.js",
  "Django",
  "ASP.NET WebForms (VB.NET)",
  // Databases
  "MySQL",
  "MS SQL Server",
  // Cloud & DevOps
  "Linux (Ubuntu)",
  "Apache2 / Nginx",
  "Docker",
  "AWS EC2 / S3 / RDS",
  "GitHub Actions",
  // Tools & Practices
  "SSH Server Deployment",
  "Data Migration",
  "REST API Design",
  "Git",
  "Tailwind CSS",
];

export function Skills() {
  return (
    <section id="skills" className="border-b border-rule py-24">
      <Container>
        <span className="font-mono text-xs text-gold">04 — Skills</span>
        <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3 md:grid-cols-3">
          {skills.map((s) => (
            <li
              key={s}
              className="border-b border-rule pb-3 font-body text-paper/80 text-sm"
            >
              {s}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}