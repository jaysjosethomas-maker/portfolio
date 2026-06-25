"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { navItems, profile } from "@/content/portfolio";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Collapsible.Root
      className="sticky top-0 z-40 border-b border-border/70 bg-background/82 backdrop-blur-xl"
      onOpenChange={setOpen}
      open={open}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 md:px-8">
        <Link
          aria-label="Jays Thomas home"
          className="group inline-flex items-center gap-3"
          href="/"
        >
          <span className="grid size-8 place-items-center rounded-full border border-border bg-foreground text-[11px] font-semibold tracking-tight text-background transition-transform group-hover:scale-105">
            JT
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-sm font-semibold tracking-tight">{profile.name}</span>
            <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Product Leader
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);

            return (
              <Link
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  active && "bg-secondary text-foreground"
                )}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Collapsible.Trigger asChild>
            <Button
              aria-label={open ? "Close navigation" : "Open navigation"}
              className="md:hidden"
              size="sm"
              type="button"
              variant="outline"
            >
              {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Button>
          </Collapsible.Trigger>
        </div>
      </div>

      <Collapsible.Content className="border-t border-border md:hidden">
        <nav aria-label="Mobile primary" className="grid gap-1 px-5 py-4">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);

            return (
              <Link
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                  active && "bg-secondary text-foreground"
                )}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
