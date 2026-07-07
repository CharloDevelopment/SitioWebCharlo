"use client";

import { CalendarCheck, Clock, Heart, LineChart, ShieldCheck, Wallet } from "lucide-react";
import { Container } from "@/components/shared/container";
import { BentoCard, BentoGrid } from "@/components/shared/bento-grid";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion/fade-in-up";

const BENEFITS = [
  {
    icon: Clock,
    title: "Ahorra 10+ horas a la semana",
    description: "Lo que hacías manualmente, Charlo lo hace por ti. Recupera tu tiempo.",
    span: "wide" as const,
  },
  {
    icon: Heart,
    title: "Tus clientes felices",
    description: "Respuestas inmediatas, sin esperas ni clientes perdidos.",
  },
  {
    icon: CalendarCheck,
    title: "Cero citas olvidadas",
    description: "Confirmaciones y recordatorios automáticos.",
    span: "tall" as const,
  },
  {
    icon: Wallet,
    title: "Cobra sin perseguir",
    description: "Recordatorios automáticos que recuperan pagos sin que tengas que insistir.",
  },
  {
    icon: LineChart,
    title: "Decisiones con datos",
    description: "Métricas claras de lo que funciona y lo que no.",
  },
  {
    icon: ShieldCheck,
    title: "Datos seguros",
    description: "Encriptación y servidores confiables.",
  },
];

export function BenefitsSection() {
  return (
    <SectionWrapper spacing="lg" tone="muted">
      <Container>
        <FadeInUp>
          <SectionHeading
            eyebrow="Beneficios"
            title="Recupera el control de tu tiempo."
            subtitle="Charlo no solo automatiza. Te devuelve lo más valioso: tiempo para hacer crecer tu negocio."
            size="lg"
            className="mb-16"
          />
        </FadeInUp>

        <StaggerContainer staggerDelay={0.08}>
          <BentoGrid>
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <StaggerItem key={benefit.title}>
                  <BentoCard span={benefit.span}>
                    <div className="flex h-full flex-col gap-3">
                      <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </BentoCard>
                </StaggerItem>
              );
            })}
          </BentoGrid>
        </StaggerContainer>
      </Container>
    </SectionWrapper>
  );
}
