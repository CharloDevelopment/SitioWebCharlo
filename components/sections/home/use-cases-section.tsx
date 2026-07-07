"use client";

import { Briefcase, GraduationCap, HeartPulse, UtensilsCrossed } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion/fade-in-up";

const USE_CASES = [
  {
    icon: HeartPulse,
    title: "Clínicas y Consultorios",
    description:
      "Atiende pacientes, organiza citas y responde preguntas frecuentes sin perder tiempo.",
  },
  {
    icon: GraduationCap,
    title: "Escuelas y Academias",
    description: "Mejora la comunicación con alumnos y padres. Gestiona inscripciones y cobros.",
  },
  {
    icon: UtensilsCrossed,
    title: "Comercios y Restaurantes",
    description: "Gestiona consultas, reservaciones y atención al cliente en automático.",
  },
  {
    icon: Briefcase,
    title: "Despachos y Servicios",
    description: "Organiza clientes, citas y seguimientos. Más tiempo para tu trabajo real.",
  },
];

export function UseCasesSection() {
  return (
    <SectionWrapper spacing="lg" tone="muted">
      <Container>
        <FadeInUp>
          <SectionHeading
            eyebrow="Casos de uso"
            title="Soluciones para negocios reales."
            subtitle="Charlo se adapta a tu industria, no al revés."
            size="lg"
            className="mb-16"
          />
        </FadeInUp>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
          {USE_CASES.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <StaggerItem
                key={useCase.title}
                className="group border-border bg-card hover:border-primary/40 flex flex-col gap-3 rounded-2xl border p-6 text-center transition-colors"
              >
                <div className="bg-primary/10 text-primary mx-auto flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{useCase.title}</h3>
                <p className="text-muted-foreground text-sm">{useCase.description}</p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </SectionWrapper>
  );
}
