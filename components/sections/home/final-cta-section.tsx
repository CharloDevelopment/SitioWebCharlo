"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { useDemoModal } from "@/components/forms/demo-modal";
import { FadeInUp } from "@/components/motion/fade-in-up";

export function FinalCtaSection() {
  const { setOpen: setDemoOpen } = useDemoModal();

  return (
    <SectionWrapper spacing="lg" tone="primary" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_30%_50%,oklch(1_0_0_/_0.15),transparent_50%)]"
      />
      <Container size="md" className="relative">
        <FadeInUp>
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              Estamos listos
            </div>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Deja de hacer lo que la tecnología puede hacer por ti.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-pretty opacity-90">
              Solicita una demostración y descubre cómo Charlo se adapta a tu negocio en minutos.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" variant="secondary" onClick={() => setDemoOpen(true)}>
                Solicitar demostración
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </FadeInUp>
      </Container>
    </SectionWrapper>
  );
}
