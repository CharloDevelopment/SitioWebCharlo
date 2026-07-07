"use client";

import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { GlowCard } from "@/components/motion/glow-card";
import { motion, useReducedMotion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Nos escribes",
    description:
      "Por WhatsApp o desde el formulario. Cuéntanos qué haces hoy y qué quieres dejar de hacer.",
  },
  {
    n: "02",
    title: "Configuramos Charló",
    description:
      "Nuestro equipo adapta la plataforma a tu negocio. Tú no tocas código ni configuración complicada.",
  },
  {
    n: "03",
    title: "Charló empieza a trabajar",
    description:
      "En 24 horas ya tienes a Charló atendiendo, cobrando y agendando. Te acompañamos 14 días.",
  },
];

export function HowItWorksSection() {
  const reduced = useReducedMotion();

  return (
    <SectionWrapper spacing="lg">
      <Container>
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: reduced ? 0 : 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: reduced ? 0 : 0.5 }}
            className="border-border bg-muted/50 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase"
          >
            Cómo funciona
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.1 }}
            className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl"
          >
            Empieza en tres pasos.
          </motion.h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: reduced ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: reduced ? 0 : 0.7,
                delay: reduced ? 0 : i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <GlowCard className="h-full p-6 sm:p-8">
                <p className="text-primary/30 font-mono text-5xl font-semibold tracking-tight sm:text-6xl">
                  {step.n}
                </p>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{step.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{step.description}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
