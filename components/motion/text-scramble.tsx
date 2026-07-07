"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type TextScrambleProps = {
  text: string;
  className?: string;
  duration?: number;
  trigger?: "hover" | "view" | "mount";
  characters?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

const DEFAULT_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

export function TextScramble({
  text,
  className,
  duration = 600,
  trigger = "hover",
  characters = DEFAULT_CHARS,
  as: Tag = "span",
}: TextScrambleProps) {
  const [display, setDisplay] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ref = useRef<HTMLElement>(null);

  function scramble() {
    if (isAnimating) return;
    setIsAnimating(true);
    const length = text.length;
    const totalFrames = Math.max(8, Math.floor(duration / 30));
    let frame = 0;

    intervalRef.current = setInterval(() => {
      frame += 1;
      const progress = frame / totalFrames;
      const result = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < progress * length) {
            return text[i];
          }
          return characters[Math.floor(Math.random() * characters.length)];
        })
        .join("");

      setDisplay(result);

      if (frame >= totalFrames) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplay(text);
        setIsAnimating(false);
      }
    }, 30);
  }

  useEffect(() => {
    if (trigger === "mount") {
      scramble();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  const Component = Tag as React.ElementType;
  const props =
    trigger === "hover"
      ? { onMouseEnter: scramble }
      : trigger === "view"
        ? {
            ref: ref as React.RefObject<HTMLElement>,
          }
        : {};

  if (trigger === "view" && ref.current) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isAnimating) {
          scramble();
          observer.disconnect();
        }
      });
    });
    if (ref.current) observer.observe(ref.current);
  }

  return (
    <Component className={cn("inline-block", className)} {...props}>
      {display}
    </Component>
  );
}
