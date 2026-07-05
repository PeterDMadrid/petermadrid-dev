import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site-config";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <span className="font-mono text-xs text-gold">04 — Contact</span>
        <h2 className="mt-4 max-w-xl font-display text-4xl text-paper">
          Open to new work.
        </h2>
        <p className="mt-4 max-w-lg font-body text-paper/70">
          Reach out directly, no forms in between.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-8 inline-flex items-center justify-center bg-gold px-5 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:bg-paper"
        >
          Email {siteConfig.email}
        </a>
      </Container>
    </section>
  );
}
