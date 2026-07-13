"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type RotatingTextProps = {
  phrases: string[];
  interval?: number;
  className?: string;
  pauseOnHover?: boolean;
};

export function RotatingText({
  phrases,
  interval = 4000,
  className,
  pauseOnHover = true,
}: RotatingTextProps) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reduced || phrases.length <= 1) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % phrases.length);
    }, interval);
    return () => clearInterval(id);
  }, [paused, reduced, interval, phrases.length]);

  const current = phrases[index] ?? phrases[0] ?? "";

  return (
    <span
      className={cn("relative inline-block", className)}
      onMouseEnter={pauseOnHover ? () => setPaused(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setPaused(false) : undefined}
      aria-live="polite"
    >
      <span aria-hidden="true" className="invisible inline-block whitespace-nowrap">
        {phrases.reduce((longest, p) => (p.length > longest.length ? p : longest), "")}
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={current}
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? { opacity: 1 } : { opacity: 0, y: -8 }}
          transition={{
            duration: reduced ? 0 : 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-0 inline-block whitespace-nowrap"
        >
          {current}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
