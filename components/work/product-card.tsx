import { ArrowUpRight } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { ProductVisual } from "@/components/work/product-visual";
import type { Product } from "@/content/portfolio";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  prominent?: boolean;
};

export function ProductCard({ product, prominent = false }: ProductCardProps) {
  const href = `/work/${product.slug}` as Route;

  return (
    <article
      className={cn(
        "group rounded-[2rem] border border-border bg-card p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-black/20",
        prominent && "md:col-span-2"
      )}
    >
      <ProductVisual
        accent={product.accent}
        category={product.category}
        compact={!prominent}
        title={product.title}
      />
      <div className="p-4 md:p-5">
        <div className="flex flex-wrap gap-2">
          {product.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              {product.title}
            </h3>
            <p className="mt-2 text-sm font-medium text-muted-foreground">
              {product.subtitle}
            </p>
          </div>
          <Link
            aria-label={`Read ${product.title} story`}
            className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-background transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-foreground group-hover:text-background"
            href={href}
          >
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
        <p className="mt-5 text-sm leading-6 text-muted-foreground">
          {product.summary}
        </p>
        <dl className="mt-6 grid grid-cols-3 gap-2">
          {product.metrics.slice(0, 3).map((metric) => (
            <div
              className="rounded-2xl border border-border bg-background/70 p-3"
              key={metric.label}
            >
              <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {metric.label}
              </dt>
              <dd className="mt-2 text-sm font-semibold tracking-tight">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
