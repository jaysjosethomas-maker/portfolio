import type { MDXComponents } from "mdx/types";

import { cn } from "@/lib/utils";

export const mdxComponents: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1
      className={cn(
        "text-balance text-4xl font-semibold tracking-tight md:text-6xl",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={cn(
        "mt-12 text-balance text-2xl font-semibold tracking-tight md:text-4xl",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn("text-pretty leading-8 text-muted-foreground", className)}
      {...props}
    />
  ),
  a: ({ className, ...props }) => (
    <a
      className={cn(
        "font-medium text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
};
