"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type CustomCursorProps = {
  className?: string;
};

type CursorState = "default" | "link" | "nav-link";
type TargetRect = {
  left: number;
  top: number;
  width: number;
  height: number;
};

const PILL_PADDING = 6;

export function CustomCursor({ className }: CustomCursorProps) {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [state, setState] = useState<CursorState>("default");
  const [target, setTarget] = useState<TargetRect | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [reduced, setReduced] = useState(false);
  const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
    }
    setEnabled(true);

    function onMove(e: MouseEvent) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect();
        setTarget({
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height,
        });
      }
    }

    function onOver(e: MouseEvent) {
      const el = e.target as HTMLElement | null;
      if (!el) return;

      const navEl = el.closest('[data-cursor="nav-link"]') as HTMLElement | null;
      if (navEl) {
        const rect = navEl.getBoundingClientRect();
        targetRef.current = navEl;
        setTarget({
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height,
        });
        setState("nav-link");
        return;
      }

      const isInteractive = Boolean(
        el.closest(
          "a, button, [role='button'], input, textarea, select, [data-cursor-hover], label, [data-magnetic]",
        ),
      );
      targetRef.current = null;
      setTarget(null);
      setState(isInteractive ? "link" : "default");
    }

    function onOut(e: MouseEvent) {
      const el = e.target as HTMLElement | null;
      if (!el) return;
      const related = e.relatedTarget as HTMLElement | null;
      if (related && el.contains(related)) return;
      targetRef.current = null;
      setTarget(null);
      setState("default");
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mouseout", onOut, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <CursorRender
      state={state}
      mouseX={mouseX}
      mouseY={mouseY}
      target={target}
      reduced={reduced}
      className={className}
    />
  );
}

type CursorRenderProps = {
  state: CursorState;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  target: TargetRect | null;
  reduced: boolean;
  className?: string;
};

function CursorRender({ state, mouseX, mouseY, target, reduced, className }: CursorRenderProps) {
  const ringX = useSpring(mouseX, { damping: 28, stiffness: 220, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 28, stiffness: 220, mass: 0.5 });

  const pillX = useSpring(mouseX, { damping: 32, stiffness: 350, mass: 0.5 });
  const pillY = useSpring(mouseY, { damping: 32, stiffness: 350, mass: 0.5 });

  const sizeSpring = { damping: 26, stiffness: 320, mass: 0.5 };

  const w = useSpring(28, sizeSpring);
  const h = useSpring(28, sizeSpring);
  const borderRadius = useSpring(9999, { damping: 26, stiffness: 280 });
  const dotScale = useSpring(1, { damping: 22, stiffness: 280 });
  const ringOpacity = useSpring(1, { damping: 26, stiffness: 280 });

  useEffect(() => {
    if (state === "nav-link" && target) {
      w.set(target.width + PILL_PADDING * 2);
      h.set(target.height + PILL_PADDING * 2);
      pillX.set(target.left + target.width / 2);
      pillY.set(target.top + target.height / 2);
      borderRadius.set(9999);
      dotScale.set(0);
    } else if (state === "link") {
      w.set(40);
      h.set(40);
      borderRadius.set(9999);
      dotScale.set(1);
    } else {
      w.set(28);
      h.set(28);
      borderRadius.set(9999);
      dotScale.set(1);
    }
  }, [state, target, w, h, borderRadius, dotScale, pillX, pillY]);

  useEffect(() => {
    ringOpacity.set(state === "nav-link" ? 0 : 1);
  }, [state, ringOpacity]);

  const pillMode = state === "nav-link";
  const useMouseRing = !pillMode;
  const usePillRing = pillMode;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className={cn(
          "bg-primary pointer-events-none fixed top-0 left-0 z-[100] h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference",
          className,
        )}
        style={{
          x: mouseX,
          y: mouseY,
          scale: dotScale,
        }}
      />
      <motion.div
        aria-hidden="true"
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-[99] -translate-x-1/2 -translate-y-1/2 border",
          state === "link"
            ? "border-primary/60 bg-primary/5"
            : "border-foreground/20 bg-transparent",
          className,
        )}
        style={{
          x: useMouseRing ? ringX : pillX,
          y: useMouseRing ? ringY : pillY,
          width: useMouseRing ? w : 0,
          height: useMouseRing ? h : 0,
          borderRadius,
          opacity: useMouseRing ? 1 : 0,
        }}
      />
      <motion.div
        aria-hidden="true"
        className={cn(
          "border-primary/40 bg-primary/[0.08] pointer-events-none fixed top-0 left-0 z-[99] -translate-x-1/2 -translate-y-1/2 border",
          className,
        )}
        style={{
          x: usePillRing ? pillX : 0,
          y: usePillRing ? pillY : 0,
          width: usePillRing ? w : 0,
          height: usePillRing ? h : 0,
          borderRadius,
          opacity: usePillRing ? (reduced ? 1 : 1) : 0,
        }}
      />
    </>
  );
}
