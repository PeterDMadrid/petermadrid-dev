"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./container";
import { navItems, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-ink/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="font-display text-lg tracking-tight text-paper">
          {siteConfig.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-center gap-2 font-body text-sm text-paper/80 transition-colors hover:text-paper"
            >
              <span className="font-mono text-xs text-gold">{item.index}</span>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-paper"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-rule bg-ink transition-[max-height] duration-300 ease-in-out",
          open ? "max-h-80" : "max-h-0"
        )}
      >
        <Container className="flex flex-col py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 border-b border-rule py-3 last:border-none font-body text-paper/80"
            >
              <span className="font-mono text-xs text-gold">{item.index}</span>
              {item.label}
            </a>
          ))}
        </Container>
      </div>
    </header>
  );
}
