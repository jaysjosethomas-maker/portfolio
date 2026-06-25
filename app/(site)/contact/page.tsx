import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { contactLinks, profile } from "@/content/portfolio";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Jays Thomas for product leadership roles across AI infrastructure, cloud platforms, marketplace products, and enterprise SaaS.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <Container className="py-16 md:py-24">
      <Badge variant="outline">Contact</Badge>
      <h1 className="mt-7 max-w-5xl text-balance text-6xl font-semibold tracking-[-0.075em] md:text-8xl">
        If the problem is complex, the conversation is probably worth having.
      </h1>
      <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground md:text-xl">
        Jays is focused on product leadership roles where AI infrastructure,
        cloud platforms, marketplaces, or enterprise systems need stronger
        product judgment and execution.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild>
          <Link href={`mailto:${profile.email}`}>
            Email Jays
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href={profile.resumePath}>Download Resume</Link>
        </Button>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {contactLinks.map((link) => (
          <a
            className="group rounded-[2rem] border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20"
            href={link.href}
            key={link.label}
            rel="noreferrer"
            target={link.href.startsWith("http") ? "_blank" : undefined}
          >
            <div className="flex items-start justify-between gap-6">
              <link.icon aria-hidden="true" className="size-5" />
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>
            <p className="mt-8 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {link.label}
            </p>
            <p className="mt-3 text-lg font-semibold tracking-tight">
              {link.value}
            </p>
          </a>
        ))}
      </div>
    </Container>
  );
}
