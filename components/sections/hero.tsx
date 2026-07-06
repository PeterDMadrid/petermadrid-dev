import { Suspense } from "react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ContributionGraph } from "@/components/sections/contribution-graph";
import { PortfolioSecretary } from "@/components/sections/portfolio-secretary";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="rule-line flex min-h-screen items-center border-b border-rule pt-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-mono text-xs text-gold">{"// " + siteConfig.role}</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight text-paper md:text-7xl">
              {siteConfig.name}
            </h1>
            <p className="mt-6 max-w-xl font-body text-lg text-paper/80">
              {siteConfig.description}
            </p>
            <div className="mt-10 flex gap-4">
              <Button>View work</Button>
              <Button variant="ghost">Contact</Button>
            </div>
            <Suspense fallback={<p className="mt-10 font-mono text-xs text-muted">Loading contributions…</p>}>
              <ContributionGraph username={siteConfig.githubUsername} />
            </Suspense>
          </div>
          <PortfolioSecretary />
        </div>
      </Container>
    </section>
  );
}