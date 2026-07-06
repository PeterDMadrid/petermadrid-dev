import Image from "next/image";
import { Container } from "@/components/layout/container";

type Project = {
  index: string;
  title: string;
  year: string;
  stack: string[];
  image: string;
  clients?: string[];
  description?: string;
};

const projects: Project[] = [
  {
    index: "01",
    title: "Margallo Review Center LMS",
    year: "2026",
    stack: ["Laravel", "Vue 3", "Inertia.js", "Tailwind CSS", "R2"],
    image: "/projects/margallo.avif",
    description: "Enrollment + LMS platform with encrypted video streaming and installment payment tracking.",
  },
  {
    index: "02",
    title: "PTI (Plastic and Tools Inc.)",
    year: "2025 — 2026",
    stack: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL"],
    image: "/projects/pti.avif",
    description: "Key contributor to the development of a computerized accounting system for the manufacturing industry, handling full-stack implementation using Laravel and Vue.js.",
  },
  {
    index: "03",
    title: "Hisumco — Makati & Millsite",
    year: "2025 — 2026",
    stack: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL"],
    image: "/projects/hisumco.avif",
    description: "Key contributor to the development of a computerized accounting system for Hisumco's Makati branch, handling full-stack implementation using Laravel and Vue.js.",
  },
  {
    index: "04",
    title: "SGC",
    year: "2025 — 2026",
    stack: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL"],
    image: "/projects/sgc.avif",
    description: "Key contributor to the development of a computerized accounting system for the construction industry, handling full-stack implementation using Laravel and Vue.js.",
  },
  {
    index: "05",
    title: "La Perla",
    year: "2025 — 2026",
    stack: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL"],
    image: "/projects/laperla.avif",
    description: "Key contributor to the development of a computerized accounting system for the food & beverage industry, handling full-stack implementation using Laravel and Vue.js.",
  },
  {
    index: "06",
    title: "Kraft and Serenade",
    year: "2025",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/kraft-and-serenade.avif",
    description: "Next.js product showcase websites for a flowershop business.",
  },
  {
    index: "07",
    title: "Mathands",
    year: "2025",
    stack: ["Media Pipe", "Flutter", "Django", "OpenCV"],
    image: "/projects/math-hands.avif",
    description: "A Mathematics Sign Language Learning Application.",
  },
  {
    index: "08",
    title: "Eomong",
    year: "2025 — 2026",
    stack: ["ASP.NET WebForms", "VB.NET", "MS SQL Server"],
    image: "/projects/eomong.avif",
    description: "Enterprise accounting system on legacy WebForms stack.",
  },
  {
    index: "09",
    title: "This Portfolio",
    year: "2024",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "AWS EC2", "Gemini AI"],
    image: "/projects/this.avif",
    description: "Personal portfolio website deployed on EC2 instance with Gemini AI integration as a personal assistant for visitors.",
  },
  {
    index: "10",
    title: "Microblogging App",
    year: "2024",
    stack: ["Laravel", "Tailwind CSS", "MVC", "REST"],
    image: "/projects/microblog.avif",
    description: "MVC microblogging app, built and deployed as intern team lead.",
  },
];

export function Projects() {
  return (
    <section id="project" className="border-b border-rule py-24">
      <Container>
        <span className="font-mono text-xs text-gold">02 — Projects</span>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.index}
              className="group relative overflow-hidden rounded-sm border border-rule transition-colors duration-300 hover:border-gold"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-all duration-500 md:group-hover:scale-105 md:group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <span className="absolute left-4 top-4 font-mono text-xs text-muted">{p.index}</span>
                <span className="absolute right-4 top-4 font-mono text-xs text-muted">{p.year}</span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl text-paper">{p.title}</h3>

                {p.description && (
                  <p className="mt-2 font-body text-sm text-paper/70">{p.description}</p>
                )}

                {p.clients && (
                  <ul className="mt-2 space-y-1">
                    {p.clients.map((c) => (
                      <li key={c} className="font-body text-sm text-paper/70">
                        <span className="text-sage">— </span>{c}
                      </li>
                    ))}
                  </ul>
                )}

                <p className="mt-4 font-mono text-xs text-sage">{p.stack.join(" · ")}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}