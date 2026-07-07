"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { useDemoModal } from "@/components/forms/demo-modal";
import { motion, useReducedMotion } from "framer-motion";

export function HeroSection() {
  const { setOpen: setDemoOpen } = useDemoModal();
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.42_0.27_264_/_0.12),transparent_60%)]"
      />
      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="border-border bg-muted/50 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide sm:text-sm">
              <Sparkles className="text-primary h-3.5 w-3.5" />
              Para PYMES de 2 a 50 empleados
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: reduced ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduced ? 0 : 0.7,
              delay: reduced ? 0 : 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl md:text-7xl"
          >
            La inteligencia artificial, <span className="text-primary">hecha simple.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduced ? 0 : 0.7,
              delay: reduced ? 0 : 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-muted-foreground mt-6 max-w-2xl text-base text-balance sm:text-lg"
          >
            Charlo automatiza tu atención, cobranza y agenda para que recuperes tiempo y hagas
            crecer tu negocio — sin procesos complicados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduced ? 0 : 0.7,
              delay: reduced ? 0 : 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Button size="lg" onClick={() => setDemoOpen(true)}>
              Solicitar demostración
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/plataforma">Conocer la plataforma</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: reduced ? 0 : 0.7,
              delay: reduced ? 0 : 0.5,
            }}
            className="text-muted-foreground mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm"
          >
            <span>✔ Sin conocimientos técnicos</span>
            <span>✔ Implementación rápida</span>
            <span>✔ Diseñado para PYMES</span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
