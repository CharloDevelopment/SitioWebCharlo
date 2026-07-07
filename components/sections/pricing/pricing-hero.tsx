"use client";

import { Sparkles } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FadeInUp } from "@/components/motion/fade-in-up";

export function PricingHero() {
  return (
    <SectionWrapper spacing="lg">
      <Container>
        <FadeInUp>
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="border-border bg-muted/50 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide">
              <Sparkles className="text-primary h-3.5 w-3.5" />
              Precios simples, sin sorpresas
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
              Empieza pequeño. <span className="text-primary">Crece cuando quieras.</span>
            </h1>
            <p className="text-muted-foreground mt-6 max-w-2xl text-base text-balance sm:text-lg">
              Sin contratos. Sin costos ocultos. Pagas solo por lo que necesitas y agregas
              soluciones cuando tu negocio crece.
            </p>
            <div className="text-muted-foreground mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              <span>✔ Sin contratos forzosos</span>
              <span>✔ Setup de arranque</span>
              <span>✔ Cancela cuando quieras</span>
            </div>
          </div>
        </FadeInUp>
      </Container>
    </SectionWrapper>
  );
}
