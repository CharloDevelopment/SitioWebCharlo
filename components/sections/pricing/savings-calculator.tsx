"use client";

import { useMemo, useState } from "react";
import { Calculator, Sparkles, TrendingDown } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeInUp } from "@/components/motion/fade-in-up";
import { useDemoModal } from "@/components/forms/demo-modal";
import { cn } from "@/lib/utils";

const PLAN_COSTS = {
  inicial: 599,
  crecimiento: 1499,
  empresa: 5499,
} as const;

const AUTOMATION_RATE = 0.6;

function formatMXN(n: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(n);
}

function formatHours(n: number) {
  return new Intl.NumberFormat("es-MX", {
    maximumFractionDigits: 1,
  }).format(n);
}

export function SavingsCalculator() {
  const { setOpen: setDemoOpen } = useDemoModal();

  const [clientesPorDia, setClientesPorDia] = useState(20);
  const [horasPorSemana, setHorasPorSemana] = useState(15);
  const [costoPorHora, setCostoPorHora] = useState(150);

  const result = useMemo(() => {
    const horasAhorradasMes = horasPorSemana * 4 * AUTOMATION_RATE;
    const dineroAhorradoMes = horasAhorradasMes * costoPorHora;

    const planInicial = {
      cost: PLAN_COSTS.inicial,
      net: dineroAhorradoMes - PLAN_COSTS.inicial,
      roi: dineroAhorradoMes / PLAN_COSTS.inicial,
    };
    const planCrecimiento = {
      cost: PLAN_COSTS.crecimiento,
      net: dineroAhorradoMes - PLAN_COSTS.crecimiento,
      roi: dineroAhorradoMes / PLAN_COSTS.crecimiento,
    };
    const planEmpresa = {
      cost: PLAN_COSTS.empresa,
      net: dineroAhorradoMes - PLAN_COSTS.empresa,
      roi: dineroAhorradoMes / PLAN_COSTS.empresa,
    };

    const recommended =
      horasPorSemana <= 8 ? "inicial" : horasPorSemana <= 25 ? "crecimiento" : "empresa";

    return {
      horasAhorradasMes,
      dineroAhorradoMes,
      planInicial,
      planCrecimiento,
      planEmpresa,
      recommended,
    };
  }, [horasPorSemana, costoPorHora]);

  return (
    <SectionWrapper spacing="lg">
      <Container>
        <FadeInUp>
          <SectionHeading
            eyebrow="Calculadora de ahorro"
            title="¿Cuánto puedes ahorrar con Charlo?"
            subtitle="Calculamos en tiempo real cuánto tiempo y dinero recuperas al automatizar tus tareas manuales."
            size="lg"
            className="mb-12"
          />
        </FadeInUp>

        <div className="grid gap-8 lg:grid-cols-2">
          <FadeInUp delay={0.1}>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Calculator className="text-primary h-5 w-5" />
                  <CardTitle>Cuéntanos sobre tu negocio</CardTitle>
                </div>
                <CardDescription>Ajusta los valores según tu realidad.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="clientes">Clientes que atiendes por día</Label>
                  <Input
                    id="clientes"
                    type="number"
                    min={1}
                    max={1000}
                    value={clientesPorDia}
                    onChange={(e) => setClientesPorDia(Number(e.target.value) || 0)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="horas">
                    Horas por semana en tareas manuales (cobros, citas, mensajes)
                  </Label>
                  <Input
                    id="horas"
                    type="number"
                    min={1}
                    max={80}
                    value={horasPorSemana}
                    onChange={(e) => setHorasPorSemana(Number(e.target.value) || 0)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="costo">Costo por hora de tu tiempo (o de tu equipo)</Label>
                  <div className="relative">
                    <span className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2 text-sm">
                      $
                    </span>
                    <Input
                      id="costo"
                      type="number"
                      min={1}
                      max={5000}
                      value={costoPorHora}
                      onChange={(e) => setCostoPorHora(Number(e.target.value) || 0)}
                      className="pl-7"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeInUp>

          <FadeInUp delay={0.25}>
            <Card className="border-primary/40 from-primary/5 to-primary/0 bg-gradient-to-br">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <TrendingDown className="text-primary h-5 w-5" />
                  <CardTitle>Tu ahorro estimado</CardTitle>
                </div>
                <CardDescription>Calculado con 60% de automatización conservadora.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-muted-foreground text-xs">Horas recuperadas / mes</p>
                    <p className="text-primary mt-1 text-2xl font-semibold">
                      {formatHours(result.horasAhorradasMes)} h
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Dinero ahorrado / mes</p>
                    <p className="text-primary mt-1 text-2xl font-semibold">
                      {formatMXN(result.dineroAhorradoMes)}
                    </p>
                  </div>
                </div>

                <div className="border-border bg-background space-y-2 rounded-lg border p-3">
                  <p className="text-muted-foreground text-xs font-medium">
                    ROI por plan (dinero ahorrado vs costo mensual)
                  </p>
                  {[
                    {
                      id: "inicial",
                      name: "Inicial",
                      data: result.planInicial,
                    },
                    {
                      id: "crecimiento",
                      name: "Crecimiento",
                      data: result.planCrecimiento,
                    },
                    { id: "empresa", name: "Empresa", data: result.planEmpresa },
                  ].map((plan) => (
                    <div
                      key={plan.id}
                      className={cn(
                        "flex items-center justify-between gap-2 rounded-md px-2 py-1.5 text-sm",
                        result.recommended === plan.id && "bg-primary/10 ring-primary/40 ring-1",
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {result.recommended === plan.id ? (
                          <Sparkles className="text-primary h-3.5 w-3.5" />
                        ) : (
                          <span className="w-3.5" />
                        )}
                        <span className="font-medium">{plan.name}</span>
                        {result.recommended === plan.id ? (
                          <span className="text-primary text-[10px] font-semibold uppercase">
                            Recomendado
                          </span>
                        ) : null}
                      </span>
                      <span
                        className={cn(
                          "text-xs",
                          plan.data.net > 0
                            ? "font-semibold text-green-600 dark:text-green-400"
                            : "text-muted-foreground",
                        )}
                      >
                        {plan.data.net > 0 ? "+" : ""}
                        {formatMXN(plan.data.net)} /mes
                        <span className="text-muted-foreground ml-1">
                          ({plan.data.roi.toFixed(1)}x)
                        </span>
                      </span>
                    </div>
                  ))}
                </div>

                <Button size="lg" className="w-full" onClick={() => setDemoOpen(true)}>
                  Solicitar demostración
                </Button>
                <p className="text-muted-foreground text-center text-xs">
                  Cálculo basado en promedios de clientes Charlo. Resultados reales pueden variar.
                </p>
              </CardContent>
            </Card>
          </FadeInUp>
        </div>
      </Container>
    </SectionWrapper>
  );
}
