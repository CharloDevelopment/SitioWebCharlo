"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgePercent, Settings, Sparkles, XCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { useDemoModal } from "@/components/forms/demo-modal";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { RotatingText } from "@/components/motion/rotating-text";
import { cn } from "@/lib/utils";
import { DashboardPreview } from "./dashboard-preview";

const HERO_PHRASES = [
  "hecha simple.",
  "sin complicaciones.",
  "para vender más.",
  "al alcance de todos.",
];

type Feature = {
  icon: typeof Sparkles;
  label: string;
  iconClass: string;
  pingClass: string;
  ping: boolean;
  delay: number;
};

const FEATURES: Feature[] = [
  {
    icon: Sparkles,
    label: "Configuración Incluida",
    iconClass: "text-primary",
    pingClass: "bg-primary/40",
    ping: true,
    delay: 0.55,
  },
  {
    icon: BadgePercent,
    label: "Precios Accesibles",
    iconClass: "text-emerald-600 dark:text-emerald-400",
    pingClass: "bg-emerald-500/40",
    ping: false,
    delay: 0.65,
  },
  {
    icon: XCircle,
    label: "Cancela Cuando Quieras",
    iconClass: "text-amber-600 dark:text-amber-400",
    pingClass: "bg-amber-500/40",
    ping: false,
    delay: 0.75,
  },
];

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
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
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

            <div
              className="border-border/60 from-muted/40 via-muted/15 to-muted/40 mt-10 inline-flex flex-wrap items-center gap-0.5 rounded-full border bg-gradient-to-r p-1 shadow-sm backdrop-blur-sm"
              style={{
                animation: reduced
                  ? undefined
                  : "fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both",
              }}
            >
              {FEATURES.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: reduced ? 0 : 0.6,
                      delay: reduced ? 0 : feature.delay,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={cn(
                      "group/chip relative inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors",
                      "hover:bg-background/80",
                      i > 0 &&
                        "before:bg-border/60 before:absolute before:-left-0.5 before:h-3 before:w-px before:content-[''] sm:before:block",
                    )}
                  >
                    <span className="relative flex items-center justify-center">
                      {feature.ping ? (
                        <span
                          className={cn(
                            "absolute inset-0 -m-1 animate-ping rounded-full",
                            feature.pingClass,
                          )}
                          aria-hidden="true"
                        />
                      ) : null}
                      <Icon
                        className={cn(
                          "relative h-3.5 w-3.5 transition-transform group-hover/chip:scale-110",
                          feature.iconClass,
                        )}
                        strokeWidth={2.25}
                      />
                    </span>
                    <span className="text-foreground/80 text-xs font-medium whitespace-nowrap">
                      {feature.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
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
