"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FadeInUpProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "div" | "section" | "article" | "header";
  amount?: number;
};

export function FadeInUp({
  children,
  className,
  delay = 0,
  duration = 0.6,
  as: Tag = "div",
  amount = 0.3,
}: FadeInUpProps) {
  const reduced = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0 : duration,
        delay: reduced ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const MotionTag = motion[Tag];

  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  as?: "div" | "ul" | "ol" | "section";
};

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  as: Tag = "div",
}: StaggerContainerProps) {
  const reduced = useReducedMotion();

  const variants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduced ? 0 : staggerDelay,
        delayChildren: reduced ? 0 : 0.1,
      },
    },
  };

  const MotionTag = motion[Tag];

  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
};

export function StaggerItem({ children, className, as: Tag = "div" }: StaggerItemProps) {
  const reduced = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0 : 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const MotionTag = motion[Tag];

  return (
    <MotionTag variants={variants} className={cn(className)}>
      {children}
    </MotionTag>
  );
}
