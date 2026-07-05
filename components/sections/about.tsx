import { Container } from "@/components/layout/container";

export function About() {
  return (
    <section id="about" className="border-b border-rule py-24">
      <Container className="grid gap-10 md:grid-cols-[120px_1fr]">
        <span className="font-mono text-xs text-gold">02 — About</span>
        <div className="max-w-2xl space-y-4 font-body text-paper/80">
          <p>
            Replace this with a short bio: background, focus, and the kind of
            problems you like solving.
          </p>
        </div>
      </Container>
    </section>
  );
}
