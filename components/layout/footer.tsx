import { Container } from "./container";
import { navItems, siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule bg-ink">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-xl text-paper">{siteConfig.name}</p>
            <p className="mt-2 max-w-xs font-body text-sm text-muted">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <p className="font-mono text-xs text-gold">Index</p>
            <ul className="mt-3 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-body text-sm text-paper/80 hover:text-paper"
                  >
                    {item.index} — {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs text-gold">Contact</p>
            <ul className="mt-3 space-y-2 font-body text-sm text-paper/80">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-paper">
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.location}</li>
              {siteConfig.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-paper"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-rule pt-6 font-mono text-xs text-muted md:flex-row md:items-center md:justify-between">
          <span>© {year} {siteConfig.name}. All entries reconciled.</span>
          <span>Built with Next.js</span>
        </div>
      </Container>
    </footer>
  );
}
