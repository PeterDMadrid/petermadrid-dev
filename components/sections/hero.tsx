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
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div className="min-w-0">
            <p className="font-mono text-xs text-gold">{"// " + siteConfig.role}</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-paper md:text-5xl lg:text-6xl xl:text-7xl">
              {siteConfig.name}
            </h1>
            <p className="mt-6 max-w-xl font-body text-base text-paper/80 md:text-lg">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
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
            <div className="mt-8">
              <Suspense fallback={<p className="font-mono text-xs text-muted">Loading contributions…</p>}>
                <ContributionGraph username={siteConfig.githubUsername} />
              </Suspense>
            </div>
          </div>
          <div className="min-w-0">
            <PortfolioSecretary />
          </div>
        </div>
      </Container>
    </section>
  );
}