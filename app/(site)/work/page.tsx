import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/work/product-card";
import { productIndexIcons, products } from "@/content/portfolio";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Work",
  description:
    "Product stories from Jays Thomas across AI cloud, GPU infrastructure, marketplaces, CRM, billing, inference, fine tuning, and object storage.",
  path: "/work"
});

export default function WorkPage() {
  return (
    <>
      <Container className="py-16 md:py-24">
        <div className="max-w-5xl">
          <Badge variant="outline">Product-wise, not company-wise</Badge>
          <h1 className="mt-7 text-balance text-6xl font-semibold tracking-[-0.075em] md:text-8xl">
            Work that turned complex systems into product leverage.
          </h1>
          <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground md:text-xl">
            Each story is written around the decisions that matter to hiring
            teams: problem framing, constraints, tradeoffs, execution,
            architecture, metrics, and learning.
          </p>
        </div>
      </Container>

      <Container className="pb-20">
        <div className="grid gap-5 md:grid-cols-2">
          {products.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              prominent={index === 0 || index === 4}
            />
          ))}
        </div>
      </Container>

      <section className="border-y border-border bg-secondary/35 py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Product range"
            title="The through-line is not domain hopping. It is systems thinking."
            description="AI infrastructure, cloud platforms, marketplaces, CRM, and consumer operations all reward the same product muscle: make a complex business system easier to understand, adopt, and scale."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {Object.entries(productIndexIcons).map(([category, Icon]) => (
              <article
                className="rounded-3xl border border-border bg-card p-5"
                key={category}
              >
                <Icon aria-hidden="true" className="size-5" />
                <h2 className="mt-5 text-lg font-semibold tracking-tight">
                  {category}
                </h2>
                <Link
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  href="/contact"
                >
                  Discuss fit
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
