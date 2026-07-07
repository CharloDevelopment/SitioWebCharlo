"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { useDemoModal } from "@/components/forms/demo-modal";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { TextScramble } from "@/components/motion/text-scramble";
import { DashboardPreview } from "./dashboard-preview";

export function HeroSection() {
  const { setOpen: setDemoOpen } = useDemoModal();
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
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
            <motion.div
              initial={{ opacity: 0, y: reduced ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="border-border bg-background/60 text-muted-foreground mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur"
            >
              <span className="bg-primary h-1.5 w-1.5 rounded-full" />
              Para tu negocio, sin importar el tamaño
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: reduced ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduced ? 0 : 0.7,
                delay: reduced ? 0 : 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
            >
              <TextScramble
                text="La inteligencia artificial,"
                as="span"
                trigger="mount"
                className="block"
              />
              <TextScramble
                text="hecha simple."
                as="span"
                trigger="mount"
                className="text-primary block"
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduced ? 0 : 0.7,
                delay: reduced ? 0 : 0.4,
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
                delay: reduced ? 0 : 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <MagneticButton strength={0.4}>
                <Button
                  size="lg"
                  onClick={() => setDemoOpen(true)}
                  className="group h-12 px-6 text-base"
                >
                  Solicitar demostración
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.3}>
                <Button asChild size="lg" variant="outline" className="group h-12 px-6 text-base">
                  <Link href="/plataforma">
                    Conocer la plataforma
                    <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduced ? 0 : 0.7, delay: 0.7 }}
              className="text-muted-foreground mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm"
            >
              <span>Empieza en minutos</span>
              <span className="bg-muted-foreground/40 hidden h-1 w-1 rounded-full sm:block" />
              <span>Sin contratos</span>
              <span className="bg-muted-foreground/40 hidden h-1 w-1 rounded-full sm:block" />
              <span>Cancela cuando quieras</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: reduced ? 1 : 0.96, y: reduced ? 0 : 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: reduced ? 0 : 0.9,
              delay: reduced ? 0 : 0.3,
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
