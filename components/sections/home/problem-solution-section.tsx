"use client";

import {
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

type Item = {
  pain: string;
  painDetail: string;
  solution: string;
  solutionDetail: string;
  painIcon: typeof Clock;
  solutionIcon: typeof CalendarCheck;
  stat: { value: string; label: string };
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
                    <span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
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
      <GlowCard className="p-6 sm:p-8">
        <div className="flex flex-col gap-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-3">
              <div className="text-muted-foreground flex items-center gap-2 text-xs font-semibold tracking-wide uppercase">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                  <span className="font-mono text-[10px]">{index + 1}</span>
                </span>
                Tu negocio hoy
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                  <PainIcon className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{item.pain}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{item.painDetail}</p>
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
            </div>
          </div>

          <div className="border-border flex items-center gap-4 border-t pt-4">
            <div>
              <p className="text-primary text-2xl font-semibold tracking-tight">
                {item.stat.value}
              </p>
              <p className="text-muted-foreground text-xs">{item.stat.label}</p>
            </div>
            <div className="text-muted-foreground/60 ml-auto text-[10px] tracking-wide uppercase">
              Promedio clientes Charló
            </div>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}
