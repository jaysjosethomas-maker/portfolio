"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { Download } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  capabilityGroups,
  experiences,
  profile,
  resumeHighlights
} from "@/content/portfolio";
import { cn } from "@/lib/utils";

export function ResumeView() {
  return (
    <Tabs.Root defaultValue="timeline">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <Tabs.List
          aria-label="Resume sections"
          className="inline-flex w-fit rounded-full border border-border bg-card p-1"
        >
          {["timeline", "capabilities", "education"].map((tab) => (
            <Tabs.Trigger
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium capitalize text-muted-foreground transition-colors",
                "data-[state=active]:bg-foreground data-[state=active]:text-background"
              )}
              key={tab}
              value={tab}
            >
              {tab}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <Button asChild>
          <Link download href={profile.resumePath as Route}>
            <Download aria-hidden="true" />
            Download PDF
          </Link>
        </Button>
      </div>

      <Tabs.Content className="mt-8 outline-none" value="timeline">
        <div className="grid gap-4">
          {experiences.map((experience) => (
            <article
              className="rounded-3xl border border-border bg-card p-6"
              key={experience.company}
            >
              <div className="grid gap-6 md:grid-cols-[1fr_auto]">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                    {experience.period}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                    {experience.role}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {experience.company} · {experience.location}
                  </p>
                </div>
                <dl className="grid grid-cols-3 gap-2 md:w-80">
                  {experience.metrics.map((metric) => (
                    <div
                      className="rounded-2xl border border-border bg-background p-3"
                      key={metric.label}
                    >
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {metric.label}
                      </dt>
                      <dd className="mt-2 text-sm font-semibold">
                        {metric.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-foreground">
                {experience.summary}
              </p>
              <ul className="mt-5 grid gap-2">
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
            </article>
          ))}
        </div>
      </Tabs.Content>

      <Tabs.Content className="mt-8 outline-none" value="capabilities">
        <div className="grid gap-4 md:grid-cols-2">
          {resumeHighlights.map((highlight) => (
            <article
              className="rounded-3xl border border-border bg-card p-6"
              key={highlight.title}
            >
              <highlight.icon aria-hidden="true" className="size-5" />
              <h2 className="mt-5 text-xl font-semibold tracking-tight">
                {highlight.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {highlight.detail}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {capabilityGroups.map((group) => (
            <article
              className="rounded-3xl border border-border bg-card p-6"
              key={group.title}
            >
              <h2 className="font-semibold tracking-tight">{group.title}</h2>
              <ul className="mt-4 grid gap-2">
                {group.items.map((item) => (
                  <li
                    className="text-sm leading-6 text-muted-foreground"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Tabs.Content>

      <Tabs.Content className="mt-8 outline-none" value="education">
        <article className="rounded-3xl border border-border bg-card p-6 md:p-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Aug 2016 - May 2021
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Birla Institute of Technology and Science, Pilani
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-background p-5">
              Integrated M.Sc. (Hons.) Physics
            </div>
            <div className="rounded-3xl border border-border bg-background p-5">
              B.E. (Hons.) Chemical Engineering
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground">
            The dual-degree background shows up in Jays&apos; product work:
            systems thinking, first-principles reasoning, and comfort operating
            across technical and business ambiguity.
          </p>
        </article>
      </Tabs.Content>
    </Tabs.Root>
  );
}
