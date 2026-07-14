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

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, [data-cursor-hover], label, [data-magnetic]";

export function CustomCursor({ className }: CustomCursorProps) {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const pillAnchorX = useMotionValue(-100);
  const pillAnchorY = useMotionValue(-100);
  const [state, setState] = useState<CursorState>("default");
  const [target, setTarget] = useState<TargetRect | null>(null);
  const [enabled, setEnabled] = useState(false);
  const targetRef = useRef<HTMLElement | null>(null);
  const stateRef = useRef<CursorState>("default");
  const lastRectRef = useRef<TargetRect | null>(null);

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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

    function findInteractiveAncestor(el: HTMLElement | null): HTMLElement | null {
      if (!el) return null;
      return el.closest(INTERACTIVE_SELECTOR) as HTMLElement | null;
    }

    function findInteractiveDescendant(el: HTMLElement | null): HTMLElement | null {
      if (!el) return null;
      return el.querySelector(INTERACTIVE_SELECTOR) as HTMLElement | null;
    }

    function clearNavTarget() {
      if (targetRef.current) {
        targetRef.current = null;
        lastRectRef.current = null;
        setTarget(null);
      }
    }

    function resetToDefault() {
      if (stateRef.current === "default" && !targetRef.current) return;
      clearNavTarget();
      setState("default");
    }

    function onMove(e: MouseEvent) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (targetRef.current) {
        const rect = captureRect(targetRef.current);
        const last = lastRectRef.current;
        if (
          !last ||
          last.left !== rect.left ||
          last.top !== rect.top ||
          last.width !== rect.width ||
          last.height !== rect.height
        ) {
          lastRectRef.current = rect;
          setTarget(rect);
          pillAnchorX.set(rect.left + rect.width / 2);
          pillAnchorY.set(rect.top + rect.height / 2);
        }
      }
    }

    function onOver(e: MouseEvent) {
      const el = e.target as HTMLElement | null;
      if (!el) return;

      const navEl = isNavLink(el);
      if (navEl) {
        if (targetRef.current !== navEl) {
          const rect = captureRect(navEl);
          targetRef.current = navEl;
          lastRectRef.current = rect;
          setTarget(rect);
          pillAnchorX.set(rect.left + rect.width / 2);
          pillAnchorY.set(rect.top + rect.height / 2);
        }
        if (stateRef.current !== "nav-link") setState("nav-link");
        return;
      }

      if (stateRef.current === "nav-link" && findNavDescendant(el)) {
        return;
      }

      clearNavTarget();
      const isInteractive = Boolean(el.closest(INTERACTIVE_SELECTOR));
      setState(isInteractive ? "link" : "default");
    }

    function onOut(e: MouseEvent) {
      const el = e.target as HTMLElement | null;
      if (!el) return;
      const related = e.relatedTarget as HTMLElement | null;
      if (related && el.contains(related)) return;

      if (stateRef.current === "nav-link") {
        if (isNavLink(related)) return;
        if (findNavDescendant(related)) return;
        resetToDefault();
        return;
      }

      if (stateRef.current === "link") {
        if (findInteractiveAncestor(related)) return;
        if (findInteractiveDescendant(related)) return;
        resetToDefault();
        return;
      }
    }

    function onLeaveWindow() {
      resetToDefault();
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mouseout", onOut, { passive: true });
    document.addEventListener("mouseleave", onLeaveWindow);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onLeaveWindow);
    };
  }, [mouseX, mouseY, pillAnchorX, pillAnchorY]);

  if (!enabled) return null;

  return (
    <CursorRender
      state={state}
      mouseX={mouseX}
      mouseY={mouseY}
      target={target}
      pillAnchorX={pillAnchorX}
      pillAnchorY={pillAnchorY}
      className={className}
    />
  );
}

type CursorRenderProps = {
  state: CursorState;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  target: TargetRect | null;
  pillAnchorX: ReturnType<typeof useMotionValue<number>>;
  pillAnchorY: ReturnType<typeof useMotionValue<number>>;
  className?: string;
};

function CursorRender({
  state,
  mouseX,
  mouseY,
  target,
  pillAnchorX,
  pillAnchorY,
  className,
}: CursorRenderProps) {
  const ringX = useSpring(mouseX, SPRING_POS);
  const ringY = useSpring(mouseY, SPRING_POS);
  const pillX = useSpring(pillAnchorX, SPRING_POS);
  const pillY = useSpring(pillAnchorY, SPRING_POS);

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
        ringOpacity.set(0);
      } else {
        w.set(28);
        h.set(28);
        dotScale.set(1);
        pillOpacity.set(0);
        ringOpacity.set(1);
      }
    } else if (state === "link") {
      w.set(40);
      h.set(40);
      borderRadius.set(9999);
      dotScale.set(1);
      pillOpacity.set(0);
      ringOpacity.set(1);
    } else {
      w.set(28);
      h.set(28);
      borderRadius.set(9999);
      dotScale.set(1);
      pillOpacity.set(0);
      ringOpacity.set(1);
    }
  }, [state, target, w, h, borderRadius, dotScale, pillOpacity, ringOpacity, pillX, pillY]);

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
          x: ringX,
          y: ringY,
          width: w,
          height: h,
          borderRadius,
          opacity: ringOpacity,
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
          opacity: pillOpacity,
        }}
      />
    </>
  );
}
