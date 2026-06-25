"use client";

import type { Route } from "next";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "motion/react";
import type * as React from "react";

import { cn } from "@/lib/utils";

type MagneticLinkProps = {
  href: Route | URL;
  children: React.ReactNode;
  className?: string;
  download?: boolean;
};

export function MagneticLink({
  href,
  children,
  className,
  download
}: MagneticLinkProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 240, damping: 18 });
  const springY = useSpring(y, { stiffness: 240, damping: 18 });

  function onPointerMove(event: React.PointerEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
  }

  function onPointerLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.span style={{ x: springX, y: springY }}>
      <Link
        className={cn(
          "inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold tracking-tight text-primary-foreground shadow-sm transition-colors hover:bg-primary/90",
          className
        )}
        download={download}
        href={href}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
      >
        {children}
      </Link>
    </motion.span>
  );
}
