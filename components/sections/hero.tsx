import { Suspense } from "react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ContributionGraph } from "@/components/sections/contribution-graph";
import { LiveStatus } from "@/components/sections/live-status";
import { PortfolioSecretary } from "@/components/sections/portfolio-secretary";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section
      id="hero"
      className="rule-line relative flex min-h-screen items-center border-b border-rule pt-16"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1px_1fr] lg:items-stretch lg:gap-12">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <p className="font-mono text-xs text-gold">
                {"// " + siteConfig.role}
              </p>
              <span className="rounded-sm border border-sage/40 px-1.5 py-0.5 font-mono text-[10px] tracking-[0.15em] text-sage">
                [AVAILABLE]
              </span>
            </div>

            <h1 className="mt-5 max-w-3xl font-display text-4xl leading-tight text-paper md:text-5xl lg:text-6xl xl:text-7xl">
              {siteConfig.name}
            </h1>

            <p className="mt-6 max-w-xl font-body text-base text-paper/80 md:text-lg">
              {siteConfig.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#project">
                <Button className="font-mono cursor-pointer">
                  <span className="mr-1 opacity-50">[</span>
                  View work
                  <span className="ml-1 opacity-50">]</span>
                </Button>
              </a>
              <a href={`mailto:${siteConfig.email}`}>
                <Button variant="ghost" className="font-mono cursor-pointer">
                  <span className="mr-1 opacity-50">[</span>
                  Contact
                  <span className="ml-1 opacity-50">]</span>
                </Button>
              </a>
            </div>

            <Suspense fallback={null}>
              <LiveStatus username={siteConfig.githubUsername} />
            </Suspense>

            <div className="mt-10">
              <Suspense fallback={<p className="font-mono text-xs text-muted">Loading contributions…</p>}>
                <ContributionGraph username={siteConfig.githubUsername} />
              </Suspense>
            </div>
          </div>

          <div aria-hidden className="hidden bg-rule/40 lg:block" />

          <div className="min-w-0">
            <PortfolioSecretary />
          </div>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 hidden justify-center md:flex">
        <span className="font-mono text-[10px] tracking-[0.3em] text-muted">
          SCROLL
          <span className="blink-caret ml-1 text-gold">_</span>
        </span>
      </div>
    </section>
  );
}