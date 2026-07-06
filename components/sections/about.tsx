import { Container } from "@/components/layout/container";

export function About() {
  return (
    <section id="about" className="border-b border-rule py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-[120px_1fr_1fr]">
          <span className="font-mono text-xs text-gold">03 — About</span>

          <div className="space-y-4 font-body text-paper/80">
            <p>
              I'm a full-stack software engineer based in Quezon City, Philippines,
              specializing in Laravel and Vue.js. I build web applications that
              solve real business problems — from customized accounting systems
              for enterprise clients to secure LMS platforms with encrypted video
              pipelines.
            </p>
            <p>
              I've worked across the full stack: designing database schemas,
              building REST APIs, crafting responsive frontends, and deploying
              to Linux servers via SSH. I care about clean architecture,
              maintainable code, and systems that actually work in production.
            </p>
            <p>
              Outside of code, I'm a VPAA Lister graduate from the Technological
              Institute of the Philippines, where I built a strong foundation in
              systems administration, enterprise integration, and IT security.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-rule bg-ink/50">
            <video
              src="/videos/final-about.mp4"
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto aspect-video object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Container>
    </section>
  );
}