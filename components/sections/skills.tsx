import { Container } from "@/components/layout/container";
import {
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiLaravel,
  SiVuedotjs,
  SiInertia,
  SiNextdotjs,
  SiDjango,
  SiDotnet,
  SiMysql,
  SiUbuntu,
  SiApache,
  SiNginx,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiTailwindcss,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Skill = {
  name: string;
  icon?: IconType;
};

type SkillGroup = {
  tag: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    tag: "LANGUAGES",
    skills: [
      { name: "PHP", icon: SiPhp },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    tag: "FRAMEWORKS",
    skills: [
      { name: "Laravel", icon: SiLaravel },
      { name: "Vue 3", icon: SiVuedotjs },
      { name: "Inertia.js", icon: SiInertia },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Django", icon: SiDjango },
      { name: "ASP.NET WebForms (VB.NET)", icon: SiDotnet },
    ],
  },
  {
    tag: "DATABASES",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "MS SQL Server" },
    ],
  },
  {
    tag: "CLOUD & DEVOPS",
    skills: [
      { name: "Linux (Ubuntu)", icon: SiUbuntu },
      { name: "Apache2", icon: SiApache },
      { name: "Nginx", icon: SiNginx },
      { name: "Docker", icon: SiDocker },
      { name: "AWS (EC2 / S3 / RDS)" },
      { name: "GitHub Actions", icon: SiGithubactions },
    ],
  },
  {
    tag: "TOOLS & PRACTICES",
    skills: [
      { name: "SSH Server Deployment" },
      { name: "Data Migration" },
      { name: "REST API Design" },
      { name: "Git", icon: SiGit },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-b border-rule py-24">
      <Container>
        <span className="font-mono text-xs text-gold">04 — Skills</span>

        <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.tag}>
              <p className="font-mono text-[10px] tracking-[0.2em] text-muted">
                [{group.tag}]
              </p>
              <ul className="mt-4">
                {group.skills.map(({ name, icon: Icon }) => (
                  <li key={name} className="group border-b border-rule last:border-b-0">
                    <div className="flex items-center gap-3 border-l-2 border-transparent py-2.5 pl-3 transition-colors group-hover:border-sage group-hover:bg-paper/5">
                      {Icon ? (
                        <Icon
                          aria-hidden="true"
                          className="h-4 w-4 flex-shrink-0 text-muted transition-colors group-hover:text-gold"
                        />
                      ) : (
                        <span
                          aria-hidden="true"
                          className="w-4 flex-shrink-0 text-center font-mono text-xs text-muted/50 transition-colors group-hover:text-sage"
                        >
                          &gt;
                        </span>
                      )}
                      <span className="font-body text-sm text-paper/80 transition-colors group-hover:text-paper">
                        {name}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}