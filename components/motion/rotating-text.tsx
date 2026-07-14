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

const EASE = [0.22, 1, 0.36, 1] as const;
const ENTER_DURATION = 0.75;
const EXIT_DURATION = 0.55;

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
  const longest = phrases.reduce(
    (longestPhrase, p) => (p.length > longestPhrase.length ? p : longestPhrase),
    "",
  );

  const enterTransition = {
    duration: ENTER_DURATION,
    ease: EASE,
  };
  const exitTransition = {
    duration: EXIT_DURATION,
    ease: EASE,
  };

  if (reduced) {
    return (
      <span className={cn("inline-block", className)} aria-live="polite">
        {current}
      </span>
    );
  }

  return (
    <span
      className={cn("relative inline-block", className)}
      onMouseEnter={pauseOnHover ? () => setPaused(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setPaused(false) : undefined}
      aria-live="polite"
    >
      <span aria-hidden="true" className="invisible inline-block whitespace-nowrap">
        {longest}
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={current}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={enterTransition}
          className="absolute inset-0 inline-block whitespace-nowrap will-change-transform"
        >
          {current}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
