"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Bot, CalendarClock, CreditCard } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { GlowCard } from "@/components/motion/glow-card";
import { cn } from "@/lib/utils";

type SolutionId = "atencion" | "cobranza" | "agenda";

const SOLUTIONS = [
  {
    id: "atencion" as const,
    title: "Charló Atención",
    description:
      "Atiende a tus clientes por WhatsApp 24/7. Responde preguntas, agenda citas y escala a humanos cuando es necesario.",
    href: "/atencion",
    icon: Bot,
    visual: <AtencionVisual />,
  },
  {
    id: "cobranza" as const,
    title: "Charló Cobranza",
    description:
      "Automatiza recordatorios de pago, envío de links de cobro y seguimiento de promesas. Sin perseguir a nadie.",
    href: "/cobranza",
    icon: CreditCard,
    visual: <CobranzaVisual />,
  },
  {
    id: "agenda" as const,
    title: "Charló Agenda",
    description:
      "Tus clientes agendan en línea, reciben recordatorios y confirman. Tú llegas con la agenda llena.",
    href: "/agenda",
    icon: CalendarClock,
    visual: <AgendaVisual />,
  },
];

export function PlatformSolutionsSection() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState<SolutionId>("atencion");

  return (
    <SectionWrapper spacing="lg">
      <Container>
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: reduced ? 0 : 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: reduced ? 0 : 0.5 }}
            className="border-border bg-muted/50 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase"
          >
            Una plataforma, todo resuelto
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.1 }}
            className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl"
          >
            Empieza con lo que necesitas hoy.
            <br />
            <span className="text-muted-foreground">Crece cuando tu negocio crezca.</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduced ? 0 : 0.7 }}
          className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-12"
        >
          <div className="flex flex-col gap-2">
            {SOLUTIONS.map((sol) => {
              const Icon = sol.icon;
              const isActive = active === sol.id;
              return (
                <button
                  key={sol.id}
                  onClick={() => setActive(sol.id)}
                  type="button"
                  className={cn(
                    "group flex flex-col items-start gap-3 rounded-2xl border p-6 text-left transition-all",
                    isActive
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-border bg-card hover:border-primary/40",
                  )}
                >
                  <div className="flex w-full items-center justify-between">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10 text-primary",
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowRight
                      className={cn(
                        "h-4 w-4 transition-all",
                        isActive
                          ? "text-primary translate-x-0 opacity-100"
                          : "text-muted-foreground -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                      )}
                    />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">{sol.title}</h3>
                  <p className="text-muted-foreground text-sm">{sol.description}</p>
                  {isActive ? (
                    <Link
                      href={sol.href}
                      className="text-primary mt-1 inline-flex items-center gap-1 text-sm font-medium hover:underline"
                    >
                      Conocer {sol.title}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ) : null}
                </button>
              );
            })}
          </div>

          <div className="relative">
            <GlowCard className="flex min-h-[440px] items-center justify-center p-6 lg:min-h-[520px]">
              {SOLUTIONS.map((sol) =>
                active === sol.id ? (
                  <motion.div
                    key={sol.id}
                    initial={{ opacity: 0, scale: 0.96, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: reduced ? 0 : 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full"
                  >
                    {sol.visual}
                  </motion.div>
                ) : null,
              )}
            </GlowCard>
          </div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}

function AtencionVisual() {
  return (
    <div className="grid gap-4">
      <div className="border-border/60 bg-background/60 rounded-xl border p-3 text-xs">
        <div className="mb-2 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <span className="text-muted-foreground">Charló en vivo</span>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-start gap-2">
            <div className="bg-muted rounded-lg px-2.5 py-1.5">¿Tienen disponible el viernes?</div>
          </div>
          <div className="flex items-start justify-end gap-2">
            <div className="bg-primary text-primary-foreground rounded-lg px-2.5 py-1.5">
              Sí, tenemos a las 10am y 4pm. ¿Cuál te acomoda?
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        {[
          { v: "24/7", l: "disponible" },
          { v: "<30s", l: "respuesta" },
          { v: "1 sola", l: "conversación" },
        ].map((s) => (
          <div key={s.l} className="border-border/60 bg-background/60 rounded-lg border p-2">
            <p className="text-primary font-mono text-sm font-semibold">{s.v}</p>
            <p className="text-muted-foreground text-[10px]">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CobranzaVisual() {
  return (
    <div className="grid gap-3">
      {[
        {
          name: "Roberto H.",
          amount: "$4,200",
          state: "Pagado",
          color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
        },
        {
          name: "Lucía M.",
          amount: "$1,800",
          state: "Promesa",
          color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
        },
        {
          name: "Andrés C.",
          amount: "$3,100",
          state: "Enviado",
          color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
        },
      ].map((item) => (
        <div
          key={item.name}
          className="border-border/60 bg-background/60 flex items-center gap-3 rounded-lg border p-3 text-sm"
        >
          <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-semibold">
            {item.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <span className="flex-1 font-medium">{item.name}</span>
          <span className="text-muted-foreground">{item.amount}</span>
          <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-medium", item.color)}>
            {item.state}
          </span>
        </div>
      ))}
      <div className="mt-1 grid grid-cols-3 gap-2 text-center text-xs">
        {[
          { v: "+42%", l: "cobro" },
          { v: "0", l: "persecuciones" },
          { v: "auto", l: "24/7" },
        ].map((s) => (
          <div key={s.l} className="border-border/60 bg-background/60 rounded-lg border p-2">
            <p className="text-primary font-mono text-sm font-semibold">{s.v}</p>
            <p className="text-muted-foreground text-[10px]">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AgendaVisual() {
  return (
    <div className="grid gap-3">
      <div className="border-border/60 bg-background/60 rounded-xl border p-3 text-xs">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-medium">Esta semana</span>
          <span className="text-muted-foreground">15 - 21 Jul</span>
        </div>
        <div className="grid grid-cols-5 gap-1">
          {["L", "M", "M", "J", "V"].map((d, i) => (
            <div
              key={`${d}-${i}`}
              className="bg-muted/40 rounded py-1 text-center text-[10px] font-medium"
            >
              {d}
            </div>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-5 gap-1">
          {[
            [1, 0, 1, 0, 0],
            [0, 1, 0, 1, 1],
            [1, 1, 0, 0, 1],
            [0, 1, 1, 0, 0],
          ].map((row, ri) =>
            row.map((cell, ci) => (
              <div
                key={`${ri}-${ci}`}
                className={cn("h-4 rounded-sm", cell ? "bg-primary/30" : "bg-muted/20")}
              />
            )),
          )}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        {[
          { v: "-30%", l: "no-shows" },
          { v: "5 min", l: "setup" },
          { v: "24/7", l: "agenda abierta" },
        ].map((s) => (
          <div key={s.l} className="border-border/60 bg-background/60 rounded-lg border p-2">
            <p className="text-primary font-mono text-sm font-semibold">{s.v}</p>
            <p className="text-muted-foreground text-[10px]">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
