import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductVisual } from "@/components/work/product-visual";
import type { Product, ProductStorySection } from "@/content/portfolio";
import { profile } from "@/content/portfolio";

type ProductStoryProps = {
  product: Product;
};

type RenderSection = ProductStorySection & {
  items?: string[];
};

const requiredSections = [
  "overview",
  "problem",
  "business-context",
  "constraints",
  "research",
  "tradeoffs",
  "decision",
  "execution",
  "architecture",
  "impact",
  "metrics",
  "lessons",
  "today"
] as const;

const sectionLabels: Record<(typeof requiredSections)[number], string> = {
  overview: "Overview",
  problem: "Problem",
  "business-context": "Business Context",
  constraints: "Constraints",
  research: "Research",
  tradeoffs: "Tradeoffs",
  decision: "Decision",
  execution: "Execution",
  architecture: "Architecture",
  impact: "Business Impact",
  metrics: "Metrics",
  lessons: "Lessons Learned",
  today: "What I would do differently today"
};

function getProductSections(product: Product): RenderSection[] {
  const byId = new Map(product.sections.map((section) => [section.id, section]));

  const fallbacks: Record<(typeof requiredSections)[number], RenderSection> = {
    overview: {
      id: "overview",
      title: "Overview",
      eyebrow: product.category,
      body: [product.narrative]
    },
    problem: {
      id: "problem",
      title: "Problem",
      eyebrow: "The customer and business tension",
      body: [
        product.summary,
        "The work mattered because the product sat at the intersection of customer friction, operational complexity, and measurable business impact."
      ]
    },
    "business-context": {
      id: "business-context",
      title: "Business Context",
      eyebrow: product.company,
      body: [
        `${product.title} was built inside ${product.company} during ${product.timeframe}, where speed, reliability, and business outcomes had to move together.`,
        "The product needed to create confidence for customers while giving internal teams a clearer system for execution."
      ]
    },
    constraints: {
      id: "constraints",
      title: "Constraints",
      eyebrow: "Where judgment mattered",
      body: [
        "The constraints were not only technical. They included customer trust, internal operating capacity, roadmap sequencing, support readiness, and the need to ship without making the experience feel unfinished.",
        "The product direction had to balance near-term launch pressure with long-term platform coherence."
      ]
    },
    research: {
      id: "research",
      title: "Research",
      eyebrow: "Signals over opinions",
      body: [
        "Research combined user behavior, operational data, customer conversations, support patterns, and stakeholder inputs.",
        "The goal was to identify the moments where product design could remove friction and create measurable leverage."
      ]
    },
    tradeoffs: {
      id: "tradeoffs",
      title: "Tradeoffs",
      eyebrow: "Choosing the right compromises",
      body: [
        "The important tradeoff was depth versus clarity: expose enough capability for advanced users while keeping the first experience understandable.",
        "Jays prioritized decisions that made the system easier to adopt, operate, and improve after launch."
      ]
    },
    decision: {
      id: "decision",
      title: "Decision",
      eyebrow: "The product bet",
      body: [
        "The product direction centered on creating a simple customer-facing mental model for a complex system.",
        "That meant aligning UX, documentation, operations, roadmap sequencing, and success metrics around the same product promise."
      ]
    },
    execution: {
      id: "execution",
      title: "Execution",
      eyebrow: "From plan to shipped product",
      body: [
        "Execution was organized around clear PRDs, cross-functional ownership, launch readiness, customer feedback, and continuous quality loops.",
        "The product shipped by making ambiguity explicit early and turning it into decisions the team could act on."
      ]
    },
    architecture: {
      id: "architecture",
      title: "Architecture",
      eyebrow: "How the system held together",
      body: [],
      items: product.architecture
    },
    impact: {
      id: "impact",
      title: "Business Impact",
      eyebrow: "The outcome",
      body: [
        "The impact was measured through adoption, revenue, conversion, customer satisfaction, support quality, and operational leverage.",
        "The product created value because it made a hard business system easier to understand and use."
      ]
    },
    metrics: {
      id: "metrics",
      title: "Metrics",
      eyebrow: "Evidence",
      body: [],
      items: product.metrics.map((metric) => `${metric.value} ${metric.label}`)
    },
    lessons: {
      id: "lessons",
      title: "Lessons Learned",
      eyebrow: "What compounded",
      body: [],
      items: product.lessons
    },
    today: {
      id: "today",
      title: "What I would do differently today",
      eyebrow: "Sharper next iteration",
      body: [],
      items: product.today
    }
  };

  return requiredSections.map((id) => {
    const existing = byId.get(id);
    return existing ? { ...fallbacks[id], ...existing } : fallbacks[id];
  });
}

export function ProductStory({ product }: ProductStoryProps) {
  const sections = getProductSections(product);

  return (
    <>
      <ScrollProgress />
      <Container className="py-10 md:py-16">
        <Link
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          href="/work"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to work
        </Link>

        <section className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="mt-8 font-mono text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              {product.company} · {product.timeframe}
            </p>
            <h1 className="mt-5 max-w-5xl text-balance text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
              {product.title}
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground md:text-xl">
              {product.narrative}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a download href={profile.resumePath}>
                  <Download aria-hidden="true" />
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={`mailto:${profile.email}`}>Discuss this work</a>
              </Button>
            </div>
          </div>
          <ProductVisual
            accent={product.accent}
            category={product.category}
            title={product.title}
          />
        </section>
      </Container>

      <Container className="grid gap-10 pb-24 lg:grid-cols-[240px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-3xl border border-border bg-card p-4">
            <p className="px-3 pb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Story
            </p>
            <nav aria-label={`${product.title} table of contents`}>
              {sections.map((section) => (
                <a
                  className="block rounded-2xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  href={`#${section.id}`}
                  key={section.id}
                >
                  {sectionLabels[section.id as keyof typeof sectionLabels]}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <article className="min-w-0">
          <dl className="mb-10 grid gap-3 md:grid-cols-3">
            {product.metrics.map((metric) => (
              <div
                className="rounded-3xl border border-border bg-card p-5"
                key={metric.label}
              >
                <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  {metric.label}
                </dt>
                <dd className="mt-3 text-3xl font-semibold tracking-tight">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="grid gap-5">
            {sections.map((section) => (
              <section
                className="scroll-mt-24 rounded-[2rem] border border-border bg-card p-6 md:p-8"
                id={section.id}
                key={section.id}
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  {section.eyebrow}
                </p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight">
                  {section.title}
                </h2>
                <div className="mt-5 grid gap-4">
                  {section.body.map((paragraph) => (
                    <p
                      className="text-pretty text-base leading-8 text-muted-foreground"
                      key={paragraph}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.items ? (
                  <ul className="mt-6 grid gap-3">
                    {section.items.map((item) => (
                      <li
                        className="flex gap-3 text-sm leading-6 text-muted-foreground"
                        key={item}
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </article>
      </Container>
    </>
  );
}
