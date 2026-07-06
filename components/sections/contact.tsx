import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site-config";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="border-t border-rule py-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-[120px_1fr]">
          <span className="font-mono text-xs text-gold">05 — Contact</span>
          
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-paper">
              Let's build something
              <br />
              <span className="text-gold">together.</span>
            </h2>
            
            <p className="mt-4 max-w-lg font-body text-paper/70">
              I'm currently open to freelance work, full-time opportunities, 
              or just a chat about tech and development.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center gap-2 bg-gold px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-all hover:bg-paper hover:scale-[1.02]"
              >
                <Mail size={16} />
                Email Me
              </a>
              
              <a
                href={siteConfig.social.find(s => s.label === "GitHub")?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-rule px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper/80 transition-all hover:border-gold hover:text-paper hover:scale-[1.02]"
              >
                <Github size={16} />
                GitHub
              </a>
              
              <a
                href={siteConfig.social.find(s => s.label === "LinkedIn")?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-rule px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper/80 transition-all hover:border-gold hover:text-paper hover:scale-[1.02]"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-paper/50">
              <span className="flex items-center gap-2">
                <MapPin size={14} />
                {siteConfig.location}
              </span>
              <span className="hidden sm:inline">·</span>
              <a 
                href={`mailto:${siteConfig.email}`}
                className="hover:text-paper transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}