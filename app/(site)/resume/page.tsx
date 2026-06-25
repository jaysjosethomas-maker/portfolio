import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { ResumeView } from "@/components/resume/resume-view";
import { Badge } from "@/components/ui/badge";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Resume",
  description:
    "Interactive resume for Jays Thomas, Product Leader at Krutrim AI Cloud with experience across Ola, Joveo, and BITS Pilani.",
  path: "/resume"
});

export default function ResumePage() {
  return (
    <Container className="py-16 md:py-24">
      <Badge variant="outline">Interactive resume</Badge>
      <h1 className="mt-7 max-w-5xl text-balance text-6xl font-semibold tracking-[-0.075em] md:text-8xl">
        Built for humans. Structured for ATS.
      </h1>
      <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground md:text-xl">
        A concise view of Jays&apos; product leadership, business impact,
        platform depth, and education, with a downloadable PDF for hiring
        workflows.
      </p>
      <div className="mt-12">
        <ResumeView />
      </div>
    </Container>
  );
}
