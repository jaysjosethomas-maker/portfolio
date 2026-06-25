import Link from "next/link";

import { Container } from "@/components/layout/container";
import { navItems, profile } from "@/content/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
            Product leader building AI infrastructure, cloud platforms,
            marketplaces, and business systems at scale.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          {navItems.map((item) => (
            <Link
              className="transition-colors hover:text-foreground"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
