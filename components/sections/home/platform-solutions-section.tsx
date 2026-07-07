"use client";

import Link from "next/link";
import { ArrowRight, Bot, CalendarClock, CreditCard } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion/fade-in-up";

const SOLUTIONS = [
  {
    icon: Bot,
    title: "Charlo Atención",
    description:
      "Nunca dejes a un cliente esperando. Responde preguntas frecuentes y atiende solicitudes automáticamente 24/7.",
    href: "/atencion",
  },
  {
    icon: CreditCard,
    title: "Charlo Cobranza",
    description:
      "Haz que tu cobranza trabaje por ti. Automatiza recordatorios y seguimientos sin perseguir a tus clientes.",
    href: "/cobranza",
  },
  {
    icon: CalendarClock,
    title: "Charlo Agenda",
    description:
      "Organiza tus citas sin esfuerzo. Permite que tus clientes agenden, confirmen y gestionen citas automáticamente.",
    href: "/agenda",
  },
];

export function PlatformSolutionsSection() {
  return (
    <SectionWrapper spacing="lg">
      <Container>
        <FadeInUp>
          <SectionHeading
            eyebrow="La plataforma"
            title="Una plataforma. Todas las soluciones que necesitas."
            subtitle="Charlo reúne herramientas inteligentes en un solo lugar. Empieza con lo que necesitas hoy y agrega nuevas soluciones cuando tu negocio crezca."
            size="lg"
            className="mb-16"
          />
        </FadeInUp>

        <StaggerContainer className="grid gap-6 md:grid-cols-3" staggerDelay={0.15}>
          {SOLUTIONS.map((solution) => {
            const Icon = solution.icon;
            return (
              <StaggerItem key={solution.title}>
                <Link
                  href={solution.href}
                  className="group border-border bg-card hover:border-primary/50 flex h-full flex-col gap-4 rounded-2xl border p-8 transition-all hover:shadow-lg"
                >
                  <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{solution.title}</h3>
                  <p className="text-muted-foreground flex-1 text-sm">{solution.description}</p>
                  <span className="text-primary inline-flex items-center text-sm font-medium">
                    Conocer solución
                    <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </SectionWrapper>
  );
}
