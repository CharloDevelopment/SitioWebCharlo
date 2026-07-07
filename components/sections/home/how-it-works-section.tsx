"use client";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion/fade-in-up";

const STEPS = [
  {
    number: "01",
    title: "Cuéntanos sobre tu empresa",
    description:
      "Agenda una demostración. Entendemos tus necesidades y encontramos la solución adecuada para tu negocio.",
  },
  {
    number: "02",
    title: "Configuramos Charlo",
    description: "Nosotros adaptamos la plataforma a tus procesos. Tú no haces nada técnico.",
  },
  {
    number: "03",
    title: "Empieza a automatizar",
    description:
      "Tu empresa comienza a ahorrar tiempo desde el primer día. Te acompañamos 14 días.",
  },
];

export function HowItWorksSection() {
  return (
    <SectionWrapper spacing="lg">
      <Container>
        <FadeInUp>
          <SectionHeading
            eyebrow="Cómo funciona"
            title="Empieza en tres pasos."
            subtitle="Sin procesos complicados. Sin cursos. Sin consultores."
            size="lg"
            className="mb-16"
          />
        </FadeInUp>

        <StaggerContainer className="grid gap-6 md:grid-cols-3" staggerDelay={0.15}>
          {STEPS.map((step) => (
            <StaggerItem
              key={step.number}
              className="border-border bg-card relative flex flex-col gap-4 rounded-2xl border p-8"
            >
              <div className="text-primary/30 text-5xl font-semibold tracking-tight">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </SectionWrapper>
  );
}
