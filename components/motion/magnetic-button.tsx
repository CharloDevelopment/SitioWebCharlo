"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
  asChild?: boolean;
};

export function MagneticButton({
  children,
  className,
  strength = 0.2,
  asChild = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 22, stiffness: 200, mass: 0.4 };
  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);
  const scale = useTransform([sx, sy], ([latestX, latestY]) => {
    const distance = Math.sqrt((latestX as number) ** 2 + (latestY as number) ** 2);
    return 1 + Math.min(distance / 600, 0.03);
  });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      data-magnetic=""
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy, scale }}
      className={cn("inline-block will-change-transform", asChild && "w-full", className)}
    >
      {children}
    </motion.div>
  );
}
