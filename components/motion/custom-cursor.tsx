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

const SPRING_POS = { damping: 32, stiffness: 160, mass: 0.7 };
const SPRING_SIZE = { damping: 32, stiffness: 160, mass: 0.7 };
const SPRING_RADIUS = { damping: 28, stiffness: 160, mass: 0.6 };
const SPRING_OPACITY = { damping: 28, stiffness: 200, mass: 0.5 };
const SPRING_DOT = { damping: 26, stiffness: 200, mass: 0.5 };

export function CustomCursor({ className }: CustomCursorProps) {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [state, setState] = useState<CursorState>("default");
  const [target, setTarget] = useState<TargetRect | null>(null);
  const [enabled, setEnabled] = useState(false);
  const targetRef = useRef<HTMLElement | null>(null);
  const stateRef = useRef<CursorState>("default");

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setEnabled(true);
      return;
    }
    setEnabled(true);

    function captureRect(el: HTMLElement): TargetRect {
      const rect = el.getBoundingClientRect();
      return {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
      };
    }

    function isNavLink(el: HTMLElement | null): HTMLElement | null {
      if (!el) return null;
      return el.closest('[data-cursor="nav-link"]') as HTMLElement | null;
    }

    function findNavDescendant(el: HTMLElement | null): HTMLElement | null {
      if (!el) return null;
      return el.querySelector('[data-cursor="nav-link"]') as HTMLElement | null;
    }

    function clearNavTarget() {
      if (targetRef.current) {
        targetRef.current = null;
        setTarget(null);
      }
    }

    function onMove(e: MouseEvent) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (targetRef.current) {
        setTarget(captureRect(targetRef.current));
      }
    }

    function onOver(e: MouseEvent) {
      const el = e.target as HTMLElement | null;
      if (!el) return;

      const navEl = isNavLink(el);
      if (navEl) {
        if (targetRef.current !== navEl) {
          targetRef.current = navEl;
          setTarget(captureRect(navEl));
        }
        if (stateRef.current !== "nav-link") setState("nav-link");
        return;
      }

      clearNavTarget();
      const isInteractive = Boolean(
        el.closest(
          "a, button, [role='button'], input, textarea, select, [data-cursor-hover], label, [data-magnetic]",
        ),
      );
      setState(isInteractive ? "link" : "default");
    }

    function onOut(e: MouseEvent) {
      const el = e.target as HTMLElement | null;
      if (!el) return;
      const related = e.relatedTarget as HTMLElement | null;

      if (related && el.contains(related)) return;

      const currentNav = isNavLink(el);
      if (currentNav) {
        const nextNav = isNavLink(related);
        if (nextNav && nextNav !== currentNav) return;
        if (findNavDescendant(related)) return;
      }

      if (stateRef.current !== "default") {
        clearNavTarget();
        setState("default");
      }
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
      className={className}
    />
  );
}

type CursorRenderProps = {
  state: CursorState;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  target: TargetRect | null;
  className?: string;
};

function CursorRender({ state, mouseX, mouseY, target, className }: CursorRenderProps) {
  const ringX = useSpring(mouseX, SPRING_POS);
  const ringY = useSpring(mouseY, SPRING_POS);

  const pillX = useSpring(mouseX, SPRING_POS);
  const pillY = useSpring(mouseY, SPRING_POS);

  const w = useSpring(28, SPRING_SIZE);
  const h = useSpring(28, SPRING_SIZE);
  const borderRadius = useSpring(9999, SPRING_RADIUS);
  const dotScale = useSpring(1, SPRING_DOT);
  const ringOpacity = useSpring(1, SPRING_OPACITY);
  const pillOpacity = useSpring(0, SPRING_OPACITY);

  useEffect(() => {
    if (state === "nav-link") {
      if (target) {
        w.set(target.width + PILL_PADDING * 2);
        h.set(target.height + PILL_PADDING * 2);
        pillX.set(target.left + target.width / 2);
        pillY.set(target.top + target.height / 2);
        borderRadius.set(9999);
        dotScale.set(0);
        pillOpacity.set(1);
      } else {
        w.set(28);
        h.set(28);
        dotScale.set(1);
        pillOpacity.set(0);
      }
    } else if (state === "link") {
      w.set(40);
      h.set(40);
      borderRadius.set(9999);
      dotScale.set(1);
      pillOpacity.set(0);
    } else {
      w.set(28);
      h.set(28);
      borderRadius.set(9999);
      dotScale.set(1);
      pillOpacity.set(0);
    }
  }, [state, target, w, h, borderRadius, dotScale, pillOpacity, pillX, pillY]);

  const pillMode = state === "nav-link";

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
          x: pillMode ? pillX : ringX,
          y: pillMode ? pillY : ringY,
          width: w,
          height: h,
          borderRadius,
          opacity: pillMode ? 0 : 1,
        }}
      />
      <motion.div
        aria-hidden="true"
        className={cn(
          "border-primary/40 bg-primary/[0.08] pointer-events-none fixed top-0 left-0 z-[99] -translate-x-1/2 -translate-y-1/2 border",
          className,
        )}
        style={{
          x: pillX,
          y: pillY,
          width: w,
          height: h,
          borderRadius,
          opacity: pillMode ? 1 : 0,
        }}
      />
    </>
  );
}
