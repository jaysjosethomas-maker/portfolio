"use client";

import * as React from "react";
import { motion, type MotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

type FadeInProps = React.ComponentPropsWithoutRef<typeof motion.div> &
  MotionProps & {
    delay?: number;
  };

export function FadeIn({ children, className, delay = 0, ...props }: FadeInProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
      transition={{
        delay,
        duration: 0.7,
        ease: [0.21, 1, 0.21, 1]
      }}
      viewport={{ once: true, margin: "-80px" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
