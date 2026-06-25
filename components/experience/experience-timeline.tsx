"use client";

import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import * as React from "react";

import type { Experience } from "@/content/portfolio";
import { cn } from "@/lib/utils";

type ExperienceTimelineProps = {
  experiences: Experience[];
};

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const [openCompany, setOpenCompany] = React.useState(experiences[0]?.company);

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-border md:block"
      />
      <div className="grid gap-4">
        {experiences.map((experience) => {
          const open = openCompany === experience.company;

          return (
            <Collapsible.Root
              className="relative md:pl-12"
              key={experience.company}
              onOpenChange={(nextOpen) =>
                setOpenCompany(nextOpen ? experience.company : "")
              }
              open={open}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute left-[9px] top-7 hidden size-3 rounded-full border border-border bg-background md:block",
                  open && "bg-foreground"
                )}
              />
              <div className="rounded-3xl border border-border bg-card p-5 shadow-sm">
                <Collapsible.Trigger className="flex w-full items-start justify-between gap-6 text-left">
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                      {experience.period}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                      {experience.company}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                      {experience.role} · {experience.location}
                    </p>
                  </div>
                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                      "mt-1 size-5 shrink-0 text-muted-foreground transition-transform",
                      open && "rotate-180"
                    )}
                  />
                </Collapsible.Trigger>
                <Collapsible.Content>
                  <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
                    {experience.summary}
                  </p>
                  <ul className="mt-6 grid gap-3">
                    {experience.highlights.map((highlight) => (
                      <li
                        className="flex gap-3 text-sm leading-6 text-muted-foreground"
                        key={highlight}
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <dl className="mt-6 grid gap-3 sm:grid-cols-3">
                    {experience.metrics.map((metric) => (
                      <div
                        className="rounded-2xl border border-border bg-background p-4"
                        key={metric.label}
                      >
                        <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                          {metric.label}
                        </dt>
                        <dd className="mt-2 text-xl font-semibold tracking-tight">
                          {metric.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Collapsible.Content>
              </div>
            </Collapsible.Root>
          );
        })}
      </div>
    </div>
  );
}
