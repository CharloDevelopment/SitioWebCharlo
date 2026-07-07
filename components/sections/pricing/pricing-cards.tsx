"use client";

import Link from "next/link";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { useDemoModal } from "@/components/forms/demo-modal";
import { FadeInUp } from "@/components/motion/fade-in-up";
import { cn } from "@/lib/utils";

type Plan = {
  id: string;
  name: string;
  description: string;
  priceMonthly: number | null;
  priceLabel: string;
  setup: number;
  highlighted?: boolean;
  features: string[];
  ctaLabel: string;
  ctaAction: "demo" | "contact";
};

const PLANS: Plan[] = [
  {
    id: "inicial",
    name: "Inicial",
    description: "Para empresas que apenas comienzan a automatizar.",
    priceMonthly: 599,
    priceLabel: "MXN/mes",
    setup: 499,
    features: [
      "Acceso a Charlo Platform (Centro de Control)",
      "Dashboard con métricas básicas",
      "1 solución incluida (Charlo Atención)",
      "Hasta 500 conversaciones/mes",
      "1 usuario administrador",
      "Soporte por email",
    ],
    ctaLabel: "Empezar con Inicial",
    ctaAction: "demo",
  },
  {
    id: "crecimiento",
    name: "Crecimiento",
    description: "Para empresas que quieren automatizar más procesos.",
    priceMonthly: 1499,
    priceLabel: "MXN/mes",
    setup: 499,
    highlighted: true,
    features: [
      "Todo del Plan Inicial, más:",
      "3 soluciones (Atención + Cobranza + Agenda)",
      "Hasta 5,000 conversaciones/mes",
      "Recordatorios automatizados ilimitados",
      "Hasta 5 usuarios",
      "Integraciones (Google Calendar, Stripe)",
      "Soporte prioritario por WhatsApp",
    ],
    ctaLabel: "Elegir Crecimiento",
    ctaAction: "demo",
  },
  {
    id: "empresa",
    name: "Empresa",
    description: "Para necesidades avanzadas y específicas.",
    priceMonthly: 5499,
    priceLabel: "MXN/mes (desde)",
    setup: 499,
    features: [
      "Todo del Plan Crecimiento, más:",
      "Soluciones personalizadas a la medida",
      "Conversaciones y cobranza ilimitadas",
      "Usuarios ilimitados",
      "Integraciones a medida (APIs, landing pages)",
      "Onboarding dedicado de 14 días",
      "Soporte dedicado con SLA",
    ],
    ctaLabel: "Hablar con ventas",
    ctaAction: "contact",
  },
];

export function PricingCards() {
  return (
    <SectionWrapper spacing="md">
      <Container>
        <FadeInUp>
          <div className="mb-8 flex flex-col items-center text-center">
            <p className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800 dark:border-amber-900/50 dark:bg-amber-900/20 dark:text-amber-300">
              ✨ Setup único de arranque: <strong>$499 MXN</strong> (incluye configuración,
              entrenamiento del agente y onboarding de 14 días)
            </p>
          </div>
        </FadeInUp>

        <div className="grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <FadeInUp delay={0.3}>
          <p className="text-muted-foreground mt-8 text-center text-sm">
            💡 ¿Necesitas algo entre Crecimiento y Empresa? Escribenos y configuramos un plan a la
            medida.
          </p>
        </FadeInUp>
      </Container>
    </SectionWrapper>
  );
}

function PricingCard({ plan }: { plan: Plan }) {
  const { setOpen: setDemoOpen } = useDemoModal();

  return (
    <div
      className={cn(
        "bg-card relative flex flex-col gap-6 rounded-2xl border p-8 transition-all",
        plan.highlighted
          ? "border-primary shadow-primary/10 shadow-2xl lg:scale-105"
          : "border-border hover:border-primary/40",
      )}
    >
      {plan.highlighted ? (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
          <span className="bg-primary text-primary-foreground inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold shadow-lg">
            <Star className="h-3 w-3 fill-current" />
            Más popular
          </span>
        </div>
      ) : null}

      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold tracking-tight">{plan.name}</h3>
        <p className="text-muted-foreground text-sm">{plan.description}</p>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-baseline gap-1">
          {plan.priceMonthly ? (
            <>
              <span className="text-muted-foreground text-sm">$</span>
              <span className="text-5xl font-semibold tracking-tight">
                {plan.priceMonthly.toLocaleString("es-MX")}
              </span>
              <span className="text-muted-foreground text-sm">{plan.priceLabel}</span>
            </>
          ) : (
            <span className="text-3xl font-semibold">A medida</span>
          )}
        </div>
        <p className="text-muted-foreground text-xs">+ ${plan.setup} MXN de setup único</p>
      </div>

      <ul className="flex flex-1 flex-col gap-3 text-sm">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check className="text-primary mt-0.5 h-4 w-4 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {plan.ctaAction === "demo" ? (
        <Button
          size="lg"
          variant={plan.highlighted ? "default" : "outline"}
          className="w-full"
          onClick={() => setDemoOpen(true)}
        >
          {plan.ctaLabel}
        </Button>
      ) : (
        <Button asChild size="lg" variant="outline" className="w-full">
          <Link href="/contacto">{plan.ctaLabel}</Link>
        </Button>
      )}
    </div>
  );
}
