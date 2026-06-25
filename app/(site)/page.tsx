import { ArrowRight, Download } from "lucide-react";
import type { Metadata } from "next";
import type { Route } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";
import { MagneticLink } from "@/components/motion/magnetic-link";
import { MetricCard } from "@/components/metrics/metric-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductCarousel } from "@/components/work/product-carousel";
import { ProductCard } from "@/components/work/product-card";
import {
  featuredProducts,
  homepageSignals,
  impactMetrics,
  leadershipMetrics,
  productPrinciples,
  profile
} from "@/content/portfolio";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Jays Thomas - Product Leader",
  description:
    "Product leader building AI infrastructure, cloud platforms, marketplaces, SaaS, and consumer products at scale."
});

export default function HomePage() {
  return (
    <>
      <Container className="py-16 md:py-24">
        <section className="grid min-h-[calc(100svh-12rem)] gap-12 lg:grid-cols-[1fr_0.84fr] lg:items-center">
          <FadeIn>
            <Badge variant="outline">Product Lead at Krutrim AI Cloud</Badge>
            <h1 className="mt-7 max-w-5xl text-balance text-6xl font-semibold tracking-[-0.075em] md:text-8xl lg:text-[6.6rem]">
              {profile.headline}
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground md:text-xl">
              {profile.subheading}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <MagneticLink href={"/work" as Route}>
                View My Work
                <ArrowRight aria-hidden="true" className="ml-2 size-4" />
              </MagneticLink>
              <Button asChild className="h-12 rounded-full px-6" variant="outline">
                <a download href={profile.resumePath}>
                  <Download aria-hidden="true" />
                  Download Resume
                </a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="relative rounded-[2.25rem] border border-border bg-card p-3 shadow-2xl shadow-black/5 dark:shadow-black/30">
              <div className="rounded-[1.75rem] border border-border bg-background p-4">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                      Product operating system
                    </p>
                    <p className="mt-2 text-sm font-semibold">
                      Strategy -&gt; systems -&gt; shipped outcomes
                    </p>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="size-2 rounded-full bg-foreground/20" />
                    <span className="size-2 rounded-full bg-foreground/30" />
                    <span className="size-2 rounded-full bg-foreground/40" />
                  </div>
                </div>
                <div className="grid gap-3 pt-4">
                  {homepageSignals.map((signal) => (
                    <div
                      className="rounded-3xl border border-border bg-card p-5"
                      key={signal.title}
                    >
                      <signal.icon
                        aria-hidden="true"
                        className="size-5 text-foreground"
                      />
                      <p className="mt-5 text-lg font-semibold tracking-tight">
                        {signal.title}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {signal.detail}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {leadershipMetrics.map((metric) => (
                    <div
                      className="rounded-2xl border border-border bg-secondary p-4"
                      key={metric.label}
                    >
                      <p className="text-2xl font-semibold tracking-tight">
                        {metric.value}
                        {metric.suffix}
                      </p>
                      <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </Container>

      <section className="border-y border-border bg-secondary/35 py-16 md:py-24">
        <Container>
          <SectionHeading
            description="The numbers are intentionally visible because they show the level Jays has operated at: revenue, adoption, customer trust, team scale, and product depth."
            eyebrow="Impact"
            title="Built at the intersection of product quality and business outcomes."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {impactMetrics.map((metric) => (
              <MetricCard key={metric.label} metric={metric} />
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-16 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            description="Not company-wise. Product-wise. Each story explains the business problem, the constraints, the decisions, and the measurable outcome."
            eyebrow="Featured work"
            title="The work is the hero."
          />
          <Button asChild variant="outline">
            <Link href="/work">
              View all products
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 hidden grid-cols-2 gap-5 md:grid">
          {featuredProducts.slice(0, 6).map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              prominent={index === 0 || index === 3}
            />
          ))}
        </div>
        <div className="mt-10">
          <ProductCarousel products={featuredProducts.slice(0, 6)} />
        </div>
      </Container>

      <section className="border-y border-border bg-secondary/35 py-16 md:py-24">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Product philosophy"
            title="Simple experiences for complex systems."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {productPrinciples.map((principle) => (
              <article
                className="rounded-3xl border border-border bg-card p-6"
                key={principle.title}
              >
                <h3 className="text-xl font-semibold tracking-tight">
                  {principle.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {principle.detail}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-16 md:py-24">
        <section className="rounded-[2rem] border border-border bg-foreground p-8 text-background md:p-12">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-background/60">
            Next chapter
          </p>
          <div className="mt-6 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              Let&apos;s build something meaningful.
            </h2>
            <Button
              asChild
              className="bg-background text-foreground hover:bg-background/90"
            >
              <a href={`mailto:${profile.email}`}>
                Contact Jays
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </section>
      </Container>
    </>
  );
}
