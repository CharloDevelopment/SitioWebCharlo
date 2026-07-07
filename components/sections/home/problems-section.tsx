"use client";

import { AlertCircle, Clock, FileSpreadsheet, MessageSquareWarning, UserX } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/motion/fade-in-up";

const PROBLEMS = [
  {
    icon: MessageSquareWarning,
    title: "Pierdes clientes",
    description:
      "Tardas demasiado en responder mensajes y pierdes clientes que ya querían comprar.",
  },
  {
    icon: Clock,
    title: "Persigues cobros",
    description: "Pasas horas persiguiendo pagos uno por uno en vez de hacer crecer tu empresa.",
  },
  {
    icon: AlertCircle,
    title: "Olvidas citas",
    description: "Se te olvidan citas y reagendados, y dañas tu reputación con cada equivocación.",
  },
  {
    icon: UserX,
    title: "Todo depende de ti",
    description: "Si no estás, nada funciona. Tu negocio no puede crecer si depende 100% de ti.",
  },
  {
    icon: FileSpreadsheet,
    title: "Tienes 10 herramientas",
    description:
      "Excel, WhatsApp, otro chat, calendario, post-it… y ninguna se habla con las demás.",
  },
];

export function ProblemsSection() {
  return (
    <SectionWrapper spacing="lg" tone="muted">
      <Container>
        <FadeInUp>
          <SectionHeading
            eyebrow="El problema"
            title="Tu empresa tiene mejores cosas que hacer."
            subtitle="Sabemos cómo se siente dirigir una empresa. Estos son los problemas que nos comparten todos los días."
            size="lg"
            className="mb-16"
          />
        </FadeInUp>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {PROBLEMS.map((problem) => {
            const Icon = problem.icon;
            return (
              <StaggerItem
                key={problem.title}
                className="group border-border bg-card hover:border-primary/40 flex flex-col gap-3 rounded-2xl border p-6 transition-colors"
              >
                <div className="bg-destructive/10 text-destructive flex h-10 w-10 items-center justify-center rounded-lg">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground text-sm">{problem.description}</p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </SectionWrapper>
  );
}
