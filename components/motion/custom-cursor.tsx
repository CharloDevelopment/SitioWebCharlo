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
  const ringX = useSpring(dotX, { damping: 30, stiffness: 250, mass: 0.5 });
  const ringY = useSpring(dotY, { damping: 30, stiffness: 250, mass: 0.5 });
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
          "bg-primary pointer-events-none fixed top-0 left-0 z-[100] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference",
          className,
        )}
        style={{ x: dotX, y: dotY }}
      />
      <motion.div
        aria-hidden="true"
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-[99] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,border-color] duration-200",
          hovering
            ? "border-primary bg-primary/10 h-16 w-16"
            : "border-foreground/40 bg-transparent",
          className,
        )}
        style={{ x: ringX, y: ringY }}
      />
    </>
  );
}
