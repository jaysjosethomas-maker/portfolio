import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { beyondWork } from "@/content/portfolio";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Beyond Work",
  description:
    "A minimal look at the interests that shape Jays Thomas outside product leadership: physics, astronomy, photography, and mentoring.",
  path: "/beyond-work"
});

export default function BeyondWorkPage() {
  return (
    <Container className="py-16 md:py-24">
      <Badge variant="outline">Beyond work</Badge>
      <h1 className="mt-7 max-w-5xl text-balance text-6xl font-semibold tracking-[-0.075em] md:text-8xl">
        The supporting identities stay quiet.
      </h1>
      <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground md:text-xl">
        Physics, astronomy, photography, and mentoring are not the headline. They are
        the practices that sharpen attention, judgment, and patience.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {beyondWork.map((item) => (
          <article
            className="rounded-[2rem] border border-border bg-card p-6 md:p-8"
            key={item.title}
          >
            <item.icon aria-hidden="true" className="size-5" />
            <h2 className="mt-8 text-2xl font-semibold tracking-tight">{item.title}</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </Container>
  );
}
