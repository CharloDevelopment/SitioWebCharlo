"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { useDemoModal } from "@/components/forms/demo-modal";
import { cn } from "@/lib/utils";

type ProductHeroProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle: ReactNode;
  icon: ReactNode;
  backHref?: string;
  backLabel?: string;
  ctaLabel?: string;
  align?: "center" | "left";
};

export function ProductHero({
  eyebrow,
  title,
  subtitle,
  icon,
  backHref = "/",
  backLabel = "Charlo",
  ctaLabel = "Solicitar demostración",
  align = "center",
}: ProductHeroProps) {
  const { setOpen: setDemoOpen } = useDemoModal();
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.42_0.27_264_/_0.10),transparent_60%)]"
      />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "flex flex-col gap-6",
            align === "center"
              ? "mx-auto max-w-3xl items-center text-center"
              : "max-w-3xl items-start text-left",
          )}
        >
          <Link
            href={backHref}
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Volver a {backLabel}
          </Link>

          <span className="border-border bg-muted/50 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide">
            {icon}
            {eyebrow}
          </span>

          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            {title}
          </h1>

          <p className="text-muted-foreground max-w-2xl text-base text-balance sm:text-lg">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button size="lg" onClick={() => setDemoOpen(true)}>
              {ctaLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/plataforma">Ver plataforma completa</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
