"use client";

import { Check, Minus } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeInUp } from "@/components/motion/fade-in-up";
import { cn } from "@/lib/utils";

type Value = boolean | string;

type Row = {
  feature: string;
  inicial: Value;
  crecimiento: Value;
  empresa: Value;
  highlight?: boolean;
};

const ROWS: Row[] = [
  {
    feature: "Acceso a Charlo Platform",
    inicial: true,
    crecimiento: true,
    empresa: true,
    highlight: true,
  },
  {
    feature: "Dashboard de métricas",
    inicial: "Básico",
    crecimiento: "Avanzado",
    empresa: "Avanzado + personalizado",
  },
  {
    feature: "Número de soluciones incluidas",
    inicial: "1",
    crecimiento: "3",
    empresa: "Ilimitadas",
    highlight: true,
  },
  { feature: "Charlo Atención", inicial: true, crecimiento: true, empresa: true },
  { feature: "Charlo Cobranza", inicial: false, crecimiento: true, empresa: true },
  { feature: "Charlo Agenda", inicial: false, crecimiento: true, empresa: true },
  {
    feature: "Conversaciones/mes",
    inicial: "500",
    crecimiento: "5,000",
    empresa: "Ilimitadas",
    highlight: true,
  },
  { feature: "Recordatorios de cobranza", inicial: false, crecimiento: true, empresa: true },
  { feature: "Citas agendadas", inicial: false, crecimiento: true, empresa: true },
  { feature: "Usuarios", inicial: "1", crecimiento: "5", empresa: "Ilimitados", highlight: true },
  { feature: "Integraciones estándar", inicial: false, crecimiento: true, empresa: true },
  {
    feature: "Integraciones a medida (APIs)",
    inicial: false,
    crecimiento: false,
    empresa: true,
    highlight: true,
  },
  { feature: "Landing pages personalizadas", inicial: false, crecimiento: false, empresa: true },
  { feature: "Soporte por email", inicial: true, crecimiento: true, empresa: true },
  { feature: "Soporte prioritario por WhatsApp", inicial: false, crecimiento: true, empresa: true },
  {
    feature: "Soporte dedicado con SLA",
    inicial: false,
    crecimiento: false,
    empresa: true,
    highlight: true,
  },
  { feature: "Onboarding de 14 días", inicial: false, crecimiento: false, empresa: true },
];

export function PricingComparator() {
  return (
    <SectionWrapper spacing="lg" tone="muted">
      <Container>
        <FadeInUp>
          <SectionHeading
            eyebrow="Compara los planes"
            title="Todo lo que incluye cada plan."
            subtitle="Encuentra el plan ideal para el tamaño y las necesidades de tu negocio."
            size="lg"
            className="mb-16"
          />
        </FadeInUp>

        <FadeInUp delay={0.15}>
          <div className="border-border bg-card overflow-x-auto rounded-2xl border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-border bg-muted/30 border-b">
                  <th className="px-4 py-4 text-left font-medium">Característica</th>
                  <th className="px-4 py-4 text-center font-medium">Inicial</th>
                  <th className="px-4 py-4 text-center font-medium">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-primary font-semibold">Crecimiento</span>
                      <span className="text-muted-foreground text-[10px] font-normal">
                        Más popular
                      </span>
                    </div>
                  </th>
                  <th className="px-4 py-4 text-center font-medium">Empresa</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={cn(
                      "border-border/50 border-b last:border-b-0",
                      row.highlight && "bg-muted/20",
                      i % 2 === 0 && !row.highlight && "bg-muted/5",
                    )}
                  >
                    <td className="px-4 py-3 font-medium">{row.feature}</td>
                    <td className="px-4 py-3 text-center">
                      <ValueCell value={row.inicial} />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <ValueCell value={row.crecimiento} highlight />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <ValueCell value={row.empresa} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeInUp>
      </Container>
    </SectionWrapper>
  );
}

function ValueCell({ value, highlight = false }: { value: Value; highlight?: boolean }) {
  if (value === true) {
    return (
      <Check className={cn("mx-auto h-4 w-4", highlight ? "text-primary" : "text-foreground")} />
    );
  }
  if (value === false) {
    return <Minus className="text-muted-foreground/40 mx-auto h-4 w-4" />;
  }
  return (
    <span className={cn("text-xs", highlight ? "font-medium" : "text-muted-foreground")}>
      {value}
    </span>
  );
}
