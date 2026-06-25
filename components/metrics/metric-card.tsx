"use client";

import CountUp from "react-countup";

import type { ImpactMetric } from "@/content/portfolio";
import { cn } from "@/lib/utils";

type MetricCardProps = {
  metric: ImpactMetric;
  className?: string;
};

export function MetricCard({ metric, className }: MetricCardProps) {
  return (
    <article
      className={cn(
        "group rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20",
        className
      )}
    >
      <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
        {metric.label}
      </div>
      <div className="mt-8 flex items-baseline gap-1 text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
        {metric.prefix ? <span>{metric.prefix}</span> : null}
        <CountUp
          duration={2.2}
          enableScrollSpy
          end={metric.value}
          preserveValue
          scrollSpyOnce
          separator=","
        />
        {metric.suffix ? <span>{metric.suffix}</span> : null}
      </div>
      <p className="mt-5 text-sm leading-6 text-muted-foreground">
        {metric.detail}
      </p>
    </article>
  );
}
