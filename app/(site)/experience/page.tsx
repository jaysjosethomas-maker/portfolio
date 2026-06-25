import type { Metadata } from "next";

import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { Container } from "@/components/layout/container";
import { MetricCard } from "@/components/metrics/metric-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { experiences, leadershipMetrics } from "@/content/portfolio";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Experience",
  description:
    "Interactive career timeline for Jays Thomas across BITS Pilani, Ola, Joveo, Ola Consumer, and Krutrim AI Cloud.",
  path: "/experience"
});

export default function ExperiencePage() {
  return (
    <>
      <Container className="py-16 md:py-24">
        <Badge variant="outline">
          BITS -&gt; Ola -&gt; Joveo -&gt; Ola -&gt; Krutrim
        </Badge>
        <h1 className="mt-7 max-w-5xl text-balance text-6xl font-semibold tracking-[-0.075em] md:text-8xl">
          A career built around messy systems becoming clear products.
        </h1>
        <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground md:text-xl">
          Jays has moved through physics, engineering, marketplaces, SaaS, consumer
          operations, and AI infrastructure. The consistent pattern is product judgment
          under complexity.
        </p>
      </Container>

      <Container className="pb-16 md:pb-24">
        <SectionHeading
          eyebrow="Leadership scope"
          title="Cross-functional leadership with measurable outcomes."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {leadershipMetrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </Container>

      <section className="border-y border-border bg-secondary/35 py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Timeline"
            title="Expandable career story."
            description="Open each chapter to see the product mandate, the execution pattern, and the impact Jays created."
          />
          <div className="mt-10">
            <ExperienceTimeline experiences={experiences} />
          </div>
        </Container>
      </section>
    </>
  );
}
