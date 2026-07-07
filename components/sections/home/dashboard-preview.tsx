"use client";

import { Fragment, useEffect, useState } from "react";
import { Bot, CalendarClock, CreditCard, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = "atencion" | "cobranza" | "agenda";

const TABS: { id: Tab; label: string; icon: typeof Bot }[] = [
  { id: "atencion", label: "Atención", icon: Bot },
  { id: "cobranza", label: "Cobranza", icon: CreditCard },
  { id: "agenda", label: "Agenda", icon: CalendarClock },
];

const ROTATION_INTERVAL = 5500;

export function DashboardPreview() {
  const [active, setActive] = useState<Tab>("atencion");
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((current) => {
        const idx = TABS.findIndex((t) => t.id === current);
        const nextIdx = (idx + 1) % TABS.length;
        return TABS[nextIdx]?.id ?? "atencion";
      });
    }, ROTATION_INTERVAL);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative w-full max-w-xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="from-primary/15 via-primary/5 absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-br to-transparent blur-2xl" />

      <div className="border-border/60 bg-card/90 shadow-primary/5 overflow-hidden rounded-2xl border shadow-2xl backdrop-blur-sm">
        <div className="border-border/60 bg-muted/30 flex items-center gap-1.5 border-b px-4 py-2.5">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          </div>
          <div className="bg-background/60 text-muted-foreground ml-auto flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[10px]">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            charlo.mx/plataforma
          </div>
        </div>

        <div className="border-border/60 bg-muted/20 flex items-center gap-1 border-b p-1.5">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={cn(
                  "relative flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
                type="button"
              >
                {isActive ? (
                  <motion.div
                    layoutId="dash-tab"
                    className="bg-background absolute inset-0 rounded-md shadow-sm"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                ) : null}
                <Icon className="relative h-3.5 w-3.5" />
                <span className="relative">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="relative h-[360px] overflow-hidden p-4 sm:p-5">
          {TABS.map((tab) => (
            <motion.div
              key={tab.id}
              initial={false}
              animate={{
                opacity: active === tab.id ? 1 : 0,
                y: active === tab.id ? 0 : 8,
                pointerEvents: active === tab.id ? "auto" : "none",
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-4 sm:inset-5"
            >
              {tab.id === "atencion" ? <AtencionMock /> : null}
              {tab.id === "cobranza" ? <CobranzaMock /> : null}
              {tab.id === "agenda" ? <AgendaMock /> : null}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-1.5">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            aria-label={`Ver ${tab.label}`}
            className={cn(
              "h-1 rounded-full transition-all",
              active === tab.id ? "bg-primary w-6" : "bg-muted-foreground/30 w-1",
            )}
          />
        ))}
      </div>
    </div>
  );
}

function AtencionMock() {
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="border-border/50 flex items-center gap-2 border-b pb-2 text-xs">
        <div className="bg-primary text-primary-foreground flex h-7 w-7 items-center justify-center rounded-full">
          <Bot className="h-3.5 w-3.5" />
        </div>
        <div className="flex-1">
          <p className="font-medium">Cliente · WhatsApp</p>
          <p className="text-muted-foreground text-[10px]">En línea</p>
        </div>
        <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
          En vivo
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-muted max-w-[80%] rounded-2xl rounded-tl-sm px-3 py-2 text-xs"
        >
          ¿Cuánto cuesta la consulta?
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-primary text-primary-foreground max-w-[85%] self-end rounded-2xl rounded-tr-sm px-3 py-2 text-xs"
        >
          La consulta general cuesta $800 MXN. ¿Quieres que te ayude a agendar?
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex max-w-[80%] gap-1"
        >
          <div className="bg-muted rounded-2xl rounded-tl-sm px-3 py-2 text-xs">Sí, agendar</div>
          <div className="bg-muted rounded-2xl rounded-tl-sm px-3 py-2 text-xs">Ver horarios</div>
        </motion.div>
      </div>
      <div className="border-border/60 bg-background/60 text-muted-foreground mt-auto flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px]">
        <div className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full" />
        Charló respondiendo en 1.2s
      </div>
    </div>
  );
}

function CobranzaMock() {
  const items = [
    { name: "María González", amount: "$2,500", status: "Enviado" },
    { name: "Roberto H.", amount: "$4,200", status: "Pagado" },
    { name: "Lucía M.", amount: "$1,800", status: "Promesa" },
  ];
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Cobrado", value: "$8.4K", color: "text-green-600" },
          { label: "Por cobrar", value: "$6.2K", color: "text-amber-600" },
          { label: "Vencido", value: "$1.8K", color: "text-red-500" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.1 }}
            className="border-border/50 bg-background/60 rounded-lg border p-2"
          >
            <p className="text-muted-foreground text-[9px] tracking-wide uppercase">{stat.label}</p>
            <p className={cn("text-sm font-semibold", stat.color)}>{stat.value}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex-1 space-y-1.5">
        {items.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.15 }}
            className="border-border/50 bg-background/60 flex items-center gap-2 rounded-lg border p-2 text-xs"
          >
            <div className="bg-primary/10 text-primary flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold">
              {item.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <span className="flex-1 truncate font-medium">{item.name}</span>
            <span className="text-muted-foreground">{item.amount}</span>
            <span
              className={cn(
                "rounded-full px-1.5 py-0.5 text-[9px] font-medium",
                item.status === "Pagado"
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                  : item.status === "Promesa"
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                    : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
              )}
            >
              {item.status}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="border-border/60 bg-background/60 text-muted-foreground mt-auto flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px]">
        <div className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full" />2 recordatorios
        enviados en los últimos 5 min
      </div>
    </div>
  );
}

function AgendaMock() {
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="text-muted-foreground flex items-center justify-between text-[10px]">
        <span>Esta semana</span>
        <span>15 Jul - 21 Jul</span>
      </div>
      <div className="border-border/50 bg-background/40 grid flex-1 grid-cols-[28px_repeat(5,1fr)] gap-1 overflow-hidden rounded-lg border p-2">
        {["9", "10", "11", "12", "16"].map((hour) => (
          <Fragment key={`row-${hour}`}>
            <div className="text-muted-foreground text-[9px]">{hour}</div>
            {Array.from({ length: 5 }).map((_, dayIdx) => {
              const appt =
                (dayIdx === 0 && hour === "9") ||
                (dayIdx === 1 && hour === "10") ||
                (dayIdx === 2 && hour === "11") ||
                (dayIdx === 3 && hour === "12") ||
                (dayIdx === 4 && hour === "16");
              return (
                <div
                  key={`${hour}-${dayIdx}`}
                  className={cn(
                    "rounded-sm border-l-2 transition-all",
                    appt ? "border-primary bg-primary/15" : "bg-background/30 border-transparent",
                  )}
                >
                  {appt ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + dayIdx * 0.08 }}
                      className="p-0.5"
                    >
                      <p className="text-primary truncate text-[8px] font-semibold">Cita</p>
                    </motion.div>
                  ) : null}
                </div>
              );
            })}
          </Fragment>
        ))}
      </div>
      <div className="border-border/60 bg-background/60 text-muted-foreground mt-auto flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px]">
        <Phone className="h-2.5 w-2.5" />5 citas esta semana · 2 confirmadas hoy
      </div>
    </div>
  );
}
