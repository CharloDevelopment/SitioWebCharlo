"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { useDemoModal } from "@/components/forms/demo-modal";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { RotatingText } from "@/components/motion/rotating-text";
import { DashboardPreview } from "./dashboard-preview";

const HERO_PHRASES = [
  "hecha simple.",
  "sin complicaciones.",
  "para vender más.",
  "al alcance de todos.",
];

const FEATURES = ["Configuración Incluida", "Precios Accesibles", "Cancela Cuando Quieras"];

export function HeroSection() {
  const { setOpen: setDemoOpen } = useDemoModal();
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.42_0.27_264_/_0.12),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,oklch(0.42_0.27_264_/_0.04)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.42_0.27_264_/_0.04)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] [background-size:64px_64px]"
      />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-12 xl:grid-cols-[0.95fr_1.15fr] xl:gap-16">
          <div className="flex flex-col items-start text-left">
            <motion.h1
              initial={{ opacity: 0, y: reduced ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduced ? 0 : 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
            >
              <span className="block">La inteligencia artificial,</span>
              <span className="text-primary block">
                <RotatingText phrases={HERO_PHRASES} interval={4000} />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduced ? 0 : 0.7,
                delay: reduced ? 0 : 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-muted-foreground mt-6 max-w-xl text-base text-balance sm:text-lg"
            >
              Charló automatiza tu atención, cobranza y agenda. Recupera tiempo, deja de perseguir
              clientes y haz crecer tu negocio mientras duermes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduced ? 0 : 0.7,
                delay: reduced ? 0 : 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <MagneticButton strength={0.2}>
                <Button
                  size="lg"
                  onClick={() => setDemoOpen(true)}
                  className="group h-12 px-6 text-base"
                >
                  Solicitar demostración
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.15}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="group hover:bg-accent hover:text-foreground h-12 px-6 text-base"
                >
                  <Link href="/plataforma">
                    Conocer la plataforma
                    <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>

            <ol className="text-foreground/75 mt-8 flex flex-nowrap items-baseline gap-x-3.5 text-sm">
              {FEATURES.map((label, i) => (
                <li
                  key={label}
                  className="inline-flex shrink-0 items-baseline gap-1.5 whitespace-nowrap"
                >
                  <span className="text-primary/70 font-mono text-[12px] tracking-wider tabular-nums">
                    0{i + 1}
                  </span>
                  <span className="font-medium">{label}</span>
                  {i < FEATURES.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="text-muted-foreground/30 ml-1.5 select-none"
                    >
                      /
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: reduced ? 1 : 0.96, y: reduced ? 0 : 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: reduced ? 0 : 0.9,
              delay: reduced ? 0 : 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex justify-center lg:justify-end"
          >
            <DashboardPreview />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
