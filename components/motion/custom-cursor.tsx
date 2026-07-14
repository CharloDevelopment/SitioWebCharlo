"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type CustomCursorProps = {
  className?: string;
};

export function CustomCursor({ className }: CustomCursorProps) {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { damping: 28, stiffness: 220, mass: 0.5 });
  const ringY = useSpring(dotY, { damping: 28, stiffness: 220, mass: 0.5 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setEnabled(true);

    function onMove(e: MouseEvent) {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    }

    function onOver(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = Boolean(
        target.closest(
          "a, button, [role='button'], input, textarea, select, [data-cursor-hover], label, [data-magnetic]",
        ),
      );
      setHovering(isInteractive);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [dotX, dotY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        ref={ref}
        aria-hidden="true"
        className={cn(
          "bg-primary pointer-events-none fixed top-0 left-0 z-[100] h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference",
          className,
        )}
        style={{ x: dotX, y: dotY }}
      />
      <motion.div
        aria-hidden="true"
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-[99] h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,border-color,background-color] duration-200",
          hovering
            ? "border-primary/60 bg-primary/5 h-10 w-10"
            : "border-foreground/20 bg-transparent",
          className,
        )}
        style={{ x: ringX, y: ringY }}
      />
    </>
  );
}
