"use client";

import {
  ArrowRight,
  CalendarCheck,
  Clock,
  CreditCard,
  MessageSquareWarning,
  TrendingDown,
  UserX,
  Wallet,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { GlowCard } from "@/components/motion/glow-card";
import { cn } from "@/lib/utils";

type Item = {
  pain: string;
  painDetail: string;
  solution: string;
  solutionDetail: string;
  painIcon: typeof Clock;
  solutionIcon: typeof CalendarCheck;
  stat: { value: string; label: string };
  beforeMock: React.ReactNode;
  afterMock: React.ReactNode;
  barData: number[];
};

const ITEMS: Item[] = [
  {
    pain: "Tardas en responder mensajes",
    painDetail:
      "Tus clientes escriben por WhatsApp. Tú duermes, comes, vives. Y cuando contestas, ya se fueron con otro.",
    solution: "Charló responde 24/7",
    solutionDetail:
      "Tu agente responde en segundos, agenda citas, manda links de pago. Tú solo te enteras cuando hay algo importante.",
    painIcon: MessageSquareWarning,
    solutionIcon: Clock,
    stat: { value: "0 min", label: "tiempo de respuesta promedio" },
    beforeMock: (
      <div className="flex flex-col gap-1.5">
        <div className="flex items-start gap-1.5">
          <div className="bg-background/60 text-muted-foreground rounded-md px-2 py-1 text-[10px]">
            ¿Tienen disponible hoy?
          </div>
        </div>
        <div className="text-muted-foreground/60 flex items-center gap-1 px-1 text-[9px]">
          <span>Enviado 8:14pm</span>
          <span className="h-1 w-1 rounded-full bg-red-400" />
          <span className="text-red-500">Sin respuesta</span>
        </div>
      </div>
    ),
    afterMock: (
      <div className="flex flex-col gap-1.5">
        <div className="flex items-start justify-end gap-1.5">
          <div className="bg-primary text-primary-foreground rounded-md px-2 py-1 text-[10px]">
            Sí, 10am y 4pm. ¿Cuál prefieres?
          </div>
        </div>
        <div className="text-muted-foreground/60 flex items-center justify-end gap-1 px-1 text-[9px]">
          <span>Charló · 0.8s</span>
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
        </div>
      </div>
    ),
    barData: [10, 8, 6, 4, 2, 1, 0],
  },
  {
    pain: "Persigues pagos uno por uno",
    painDetail:
      "Pasas 3 horas a la semana mandando mensajes incómodos. Creas excels. Se te olvida. Cobras menos de lo que facturas.",
    solution: "Charló cobra por ti",
    solutionDetail:
      "Recordatorios automáticos, links de pago, seguimiento de promesas. Tu flujo de caja mejora desde el día uno.",
    painIcon: TrendingDown,
    solutionIcon: Wallet,
    stat: { value: "+42%", label: "cobro efectivo en promedio" },
    beforeMock: (
      <div className="flex flex-col gap-1">
        <div className="text-muted-foreground/60 text-[9px]">Cobrado este mes</div>
        <div className="text-foreground/80 text-base font-semibold">$8,400</div>
        <div className="text-[9px] text-red-500">↓ 18% vs mes anterior</div>
      </div>
    ),
    afterMock: (
      <div className="flex flex-col gap-1">
        <div className="text-muted-foreground/60 text-[9px]">Cobrado este mes</div>
        <div className="text-primary text-base font-semibold">$11,950</div>
        <div className="text-[9px] text-green-500">↑ 42% con Charló</div>
      </div>
    ),
    barData: [4, 5, 6, 7, 9, 11, 12],
  },
  {
    pain: "Las citas se te olvidan",
    painDetail:
      "Confirmas por WhatsApp. Reconfirmas el día anterior. El paciente no se presenta. Pierdes 30% de tu tiempo.",
    solution: "Charló agenda solo",
    solutionDetail:
      "Tus clientes agendan en línea, reciben recordatorios, confirman. Tú llegas a una agenda llena sin hacer nada.",
    painIcon: CalendarCheck,
    solutionIcon: CalendarCheck,
    stat: { value: "-30%", label: "no-shows desde el primer mes" },
    beforeMock: (
      <div className="grid grid-cols-7 gap-0.5">
        {[1, 0, 1, 0, 1, 0, 0].map((v, i) => (
          <div
            key={i}
            className={cn(
              "h-3 rounded-sm",
              v ? "bg-muted-foreground/30" : "bg-muted-foreground/10",
            )}
          />
        ))}
      </div>
    ),
    afterMock: (
      <div className="grid grid-cols-7 gap-0.5">
        {[1, 1, 1, 1, 1, 1, 1].map((v, i) => (
          <div
            key={i}
            className={cn("h-3 rounded-sm", v ? "bg-primary/70" : "bg-muted-foreground/10")}
          />
        ))}
      </div>
    ),
    barData: [3, 5, 6, 8, 7, 7, 7],
  },
  {
    pain: "Todo depende de ti",
    painDetail:
      "Si no estás, nada funciona. Tu negocio no puede crecer si depende 100% de ti. Estás atrapado.",
    solution: "Charló trabaja solo",
    solutionDetail:
      "Mientras tú duermes, comes o vives, Charló atiende, cobra y agenda. Tu negocio funciona sin ti.",
    painIcon: UserX,
    solutionIcon: CreditCard,
    stat: { value: "10+ h", label: "recuperadas cada semana" },
    beforeMock: (
      <div className="flex flex-col gap-1">
        <div className="text-muted-foreground/60 text-[9px]">Tu tiempo semanal</div>
        <div className="flex items-center gap-1.5">
          <div className="bg-muted-foreground/30 h-2 flex-1 rounded-full" />
        </div>
        <div className="text-foreground/80 text-[10px]">30h en tareas manuales</div>
      </div>
    ),
    afterMock: (
      <div className="flex flex-col gap-1">
        <div className="text-muted-foreground/60 text-[9px]">Con Charló</div>
        <div className="flex items-center gap-1.5">
          <div className="bg-primary/70 h-2 w-2/5 rounded-full" />
          <div className="bg-muted h-2 flex-1 rounded-full" />
        </div>
        <div className="text-primary text-[10px]">20h libre, 10h tareas</div>
      </div>
    ),
    barData: [2, 3, 4, 5, 6, 7, 7],
  },
];

export function ProblemSolutionSection() {
  const reduced = useReducedMotion();

  return (
    <SectionWrapper spacing="lg" tone="muted">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <motion.span
              initial={{ opacity: 0, y: reduced ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: reduced ? 0 : 0.5 }}
              className="border-border bg-background text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase"
            >
              El antes y el después
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: reduced ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.1 }}
              className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl"
            >
              Tu negocio hoy.
              <br />
              <span className="text-muted-foreground">Con Charló.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: reduced ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.2 }}
              className="text-muted-foreground mt-4 max-w-md text-pretty sm:text-lg"
            >
              Mismos problemas que vives cada semana. La diferencia es cómo se resuelven.
            </motion.p>
            <div className="mt-8 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, y: reduced ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.3 }}
                className="border-border bg-card relative aspect-square max-w-xs overflow-hidden rounded-3xl border p-6"
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.42_0.27_264_/_0.04)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.42_0.27_264_/_0.04)_1px,transparent_1px)] [background-size:24px_24px]" />
                <div className="relative flex h-full flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                      Antes
                    </span>
                    <span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-medium text-red-700">
                      caótico
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      "WhatsApp sin responder",
                      "Cobros olvidados",
                      "Citas a mano",
                      "Excel para todo",
                    ].map((line) => (
                      <div
                        key={line}
                        className="bg-muted/40 flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                        <span className="text-muted-foreground">{line}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {ITEMS.map((item, i) => (
              <ItemCard key={item.pain} item={item} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

function ItemCard({ item, index }: { item: Item; index: number }) {
  const reduced = useReducedMotion();
  const PainIcon = item.painIcon;
  const SolutionIcon = item.solutionIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: reduced ? 0 : 0.7,
        delay: reduced ? 0 : 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group"
    >
      <GlowCard className="relative overflow-hidden p-6 sm:p-8">
        <div
          className="from-primary/0 via-primary/5 to-primary/0 absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-3">
              <div className="text-muted-foreground flex items-center gap-2 text-xs font-semibold tracking-wide uppercase">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <span className="font-mono text-[10px]">{index + 1}</span>
                </span>
                Tu negocio hoy
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600">
                  <PainIcon className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{item.pain}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{item.painDetail}</p>
              <div className="border-border/40 bg-muted/20 mt-2 rounded-lg border p-3">
                {item.beforeMock}
              </div>
            </div>

            <div className="bg-primary/5 ring-primary/20 group-hover:bg-primary/10 relative flex flex-col gap-3 rounded-xl p-4 ring-1 transition-colors sm:p-5">
              <div className="text-primary flex items-center gap-2 text-xs font-semibold tracking-wide uppercase">
                <span className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-full">
                  <span className="font-mono text-[10px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </span>
                Con Charló
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                  <SolutionIcon className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{item.solution}</h3>
              </div>
              <p className="text-foreground/80 text-sm">{item.solutionDetail}</p>
              <div className="border-primary/20 bg-background/60 mt-2 rounded-lg border p-3">
                {item.afterMock}
              </div>
            </div>
          </div>

          <div className="border-border flex flex-col gap-3 border-t pt-4 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-baseline gap-3">
              <p className="text-primary text-2xl font-semibold tracking-tight">
                {item.stat.value}
              </p>
              <p className="text-muted-foreground text-xs">{item.stat.label}</p>
            </div>
            <div className="flex items-end gap-0.5 sm:ml-auto">
              {item.barData.map((v, i) => (
                <div
                  key={i}
                  className="bg-primary/60 w-2 rounded-sm"
                  style={{ height: `${v * 2.5 + 4}px` }}
                />
              ))}
            </div>
            <div className="text-muted-foreground/60 text-[10px] tracking-wide uppercase sm:text-right">
              Promedio clientes Charló
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="text-primary/10 group-hover:text-primary/30 absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 transition-colors sm:block"
        >
          <ArrowRight className="h-8 w-8 -rotate-90" />
        </div>
      </GlowCard>
    </motion.div>
  );
}
