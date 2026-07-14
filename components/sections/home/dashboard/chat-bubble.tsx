"use client";

import { useState } from "react";
import {
  Banknote,
  Building2,
  CalendarCheck,
  CalendarClock,
  Check,
  CheckCheck,
  ChevronRight,
  CircleCheck,
  CreditCard,
  ShoppingBag,
  Store,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type {
  HighlightKind,
  Message,
  PaymentMethod,
  QuickReply,
  ServiceItem,
  TimeSlot,
} from "./scenarios";

type ChatBubbleProps = {
  message: Message;
  onAction?: (kind: HighlightKind) => void;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function ChatBubble({ message, onAction }: ChatBubbleProps) {
  const isCharlo = message.from === "charlo";

  if (message.attachment === "link") {
    return <PaymentBubble key={`m-${message.time}`} message={message} onAction={onAction} />;
  }
  if (message.attachment === "calendar" || message.attachment === "reminder") {
    return <CalendarBubble key={`m-${message.time}`} message={message} onAction={onAction} />;
  }
  if (message.attachment === "service-menu") {
    return <ServiceMenuBubble key={`m-${message.time}`} message={message} onAction={onAction} />;
  }
  if (message.attachment === "payment-methods") {
    return <PaymentMethodsBubble key={`m-${message.time}`} message={message} onAction={onAction} />;
  }
  if (message.attachment === "receipt") {
    return <ReceiptBubble key={`m-${message.time}`} message={message} onAction={onAction} />;
  }
  if (message.attachment === "time-slots") {
    return <TimeSlotsBubble key={`m-${message.time}`} message={message} onAction={onAction} />;
  }
  if (message.attachment === "calendar-event") {
    return <CalendarEventBubble key={`m-${message.time}`} message={message} onAction={onAction} />;
  }
  if (message.attachment === "quick-replies") {
    return <QuickRepliesBubble key={`m-${message.time}`} message={message} onAction={onAction} />;
  }
  if (message.typing) {
    return <TypingBubble key={`m-${message.time}`} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: EASE }}
      className={cn("flex flex-col gap-0.5", isCharlo ? "items-end" : "items-start")}
    >
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-3 py-1.5 text-[12px] leading-relaxed shadow-sm",
          isCharlo
            ? "bg-primary text-primary-foreground rounded-tr-md"
            : "bg-muted text-foreground rounded-tl-md",
        )}
      >
        {message.text}
      </div>
      <BubbleMeta message={message} isCharlo={isCharlo} />
    </motion.div>
  );
}

function BubbleMeta({ message, isCharlo }: { message: Message; isCharlo: boolean }) {
  return (
    <div
      className={cn(
        "text-muted-foreground flex items-center gap-0.5 px-1 text-[9px]",
        isCharlo ? "flex-row-reverse" : "",
      )}
    >
      <span>{message.time}</span>
      {isCharlo ? (
        message.status === "read" ? (
          <CheckCheck className="text-primary h-3 w-3" aria-label="Leído" />
        ) : message.status === "delivered" ? (
          <CheckCheck className="h-3 w-3" aria-label="Entregado" />
        ) : (
          <Check className="h-3 w-3" aria-label="Enviado" />
        )
      ) : null}
    </div>
  );
}

function CharloCardShell({ children, message }: { children: React.ReactNode; message: Message }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: EASE }}
      className="flex flex-col items-end gap-0.5"
    >
      <div className="bg-primary text-primary-foreground max-w-[92%] rounded-2xl rounded-tr-md p-2.5 shadow-sm">
        {children}
      </div>
      <BubbleMeta message={message} isCharlo />
    </motion.div>
  );
}

function useSuccess(duration = 1800) {
  const [done, setDone] = useState<string | null>(null);
  const trigger = (id: string, onAction?: (k: HighlightKind) => void) => {
    setDone(id);
    onAction?.(id as HighlightKind);
    window.setTimeout(() => setDone(null), duration);
  };
  return { done, trigger };
}

function PaymentBubble({ message, onAction }: ChatBubbleProps) {
  const [pressed, setPressed] = useState(false);
  const { done, trigger } = useSuccess();
  const finished = done === "pagar";

  function handle() {
    if (finished) return;
    setPressed(true);
    window.setTimeout(() => {
      setPressed(false);
      trigger("pagar", onAction);
    }, 220);
  }

  return (
    <CharloCardShell message={message}>
      <div className="flex items-center gap-2 text-[11px] font-semibold">
        <CreditCard className="h-3.5 w-3.5" aria-hidden="true" />
        Link de pago
      </div>
      <div className="mt-1 text-[11px] opacity-90">$4,200 MXN · vence hoy</div>
      <button
        type="button"
        onClick={handle}
        aria-label="Pagar ahora"
        className={cn(
          "mt-2 w-full rounded-md py-1.5 text-[11px] font-medium transition-transform",
          "bg-white/20 hover:bg-white/30",
          pressed && "scale-95",
          finished && "bg-green-400/30",
        )}
      >
        {finished ? (
          <span className="inline-flex items-center justify-center gap-1">
            <Check className="h-3 w-3" aria-hidden="true" />
            Pago realizado
          </span>
        ) : (
          "Pagar ahora"
        )}
      </button>
    </CharloCardShell>
  );
}

function CalendarBubble({ message, onAction }: ChatBubbleProps) {
  const [pressed, setPressed] = useState<string | null>(null);
  const { done, trigger } = useSuccess();
  const isReminder = message.attachment === "reminder";
  const title = isReminder ? "Recordatorio" : "Cita agendada";
  const subtitle = isReminder ? "Tienes una cita próxima" : "Vie 18 · 11:30";

  function act(kind: "confirmar" | "reagendar") {
    if (done) return;
    setPressed(kind);
    window.setTimeout(() => {
      setPressed(null);
      trigger(kind, onAction);
    }, 220);
  }

  return (
    <CharloCardShell message={message}>
      <div className="flex items-center gap-2 text-[11px] font-semibold">
        <CalendarClock className="h-3.5 w-3.5" aria-hidden="true" />
        {title}
      </div>
      <div className="mt-1 text-[11px] opacity-90">{subtitle}</div>
      {isReminder ? null : (
        <div className="mt-2 flex gap-1.5">
          <button
            type="button"
            onClick={() => act("confirmar")}
            aria-label="Confirmar cita"
            className={cn(
              "rounded-md px-2.5 py-1 text-[10px] font-medium transition-transform",
              "bg-white/20 hover:bg-white/30",
              pressed === "confirmar" && "scale-95",
              done === "confirmar" && "bg-green-400/30",
            )}
          >
            {done === "confirmar" ? (
              <span className="inline-flex items-center gap-1">
                <Check className="h-3 w-3" aria-hidden="true" />
                Confirmado
              </span>
            ) : (
              "Confirmar"
            )}
          </button>
          <button
            type="button"
            onClick={() => act("reagendar")}
            aria-label="Reagendar cita"
            className={cn(
              "rounded-md px-2.5 py-1 text-[10px] font-medium transition-transform",
              "bg-white/20 hover:bg-white/30",
              pressed === "reagendar" && "scale-95",
              done === "reagendar" && "bg-green-400/30",
            )}
          >
            {done === "reagendar" ? (
              <span className="inline-flex items-center gap-1">
                <Check className="h-3 w-3" aria-hidden="true" />
                Reagendado
              </span>
            ) : (
              "Reagendar"
            )}
          </button>
        </div>
      )}
    </CharloCardShell>
  );
}

function ServiceMenuBubble({ message, onAction }: ChatBubbleProps) {
  const services = message.data?.services ?? [];
  const [selected, setSelected] = useState<string | null>(null);
  const { done, trigger } = useSuccess();

  function pick(svc: ServiceItem) {
    if (done) return;
    setSelected(svc.title);
    window.setTimeout(() => trigger(svc.title, onAction), 600);
  }

  return (
    <CharloCardShell message={message}>
      <div className="flex items-center gap-2 text-[11px] font-semibold">
        <ShoppingBag className="h-3.5 w-3.5" aria-hidden="true" />
        Nuestros servicios
      </div>
      <div className="mt-1.5 w-full space-y-1">
        {services.map((svc, i) => (
          <button
            key={svc.title}
            type="button"
            onClick={() => pick(svc)}
            aria-label={`Ver ${svc.title}`}
            className={cn(
              "group/svc flex w-full items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left text-[11px] transition-colors",
              "bg-white/10 hover:bg-white/20",
              selected === svc.title && "bg-white/25",
              i > 0 && "border-t border-white/10 pt-2",
            )}
          >
            <div className="min-w-0">
              <p className="truncate font-medium">{svc.title}</p>
              <p className="text-[9.5px] opacity-75">{svc.duration}</p>
            </div>
            <div className="flex shrink-0 items-center gap-1.5">
              <span className="font-semibold tabular-nums">{svc.price}</span>
              {selected === svc.title ? (
                <Check className="h-3 w-3" aria-hidden="true" />
              ) : (
                <ChevronRight
                  className="h-3 w-3 opacity-60 transition-transform group-hover/svc:translate-x-0.5"
                  aria-hidden="true"
                />
              )}
            </div>
          </button>
        ))}
      </div>
    </CharloCardShell>
  );
}

const METHOD_ICONS: Record<string, typeof CreditCard> = {
  tarjeta: CreditCard,
  transfer: Building2,
  oxxo: Store,
};

function PaymentMethodsBubble({ message, onAction }: ChatBubbleProps) {
  const methods = message.data?.methods ?? [];
  const [selected, setSelected] = useState<string | null>(null);
  const { done, trigger } = useSuccess();

  function pick(m: PaymentMethod) {
    if (done) return;
    setSelected(m.id);
    window.setTimeout(() => trigger(m.id, onAction), 600);
  }

  return (
    <CharloCardShell message={message}>
      <div className="flex items-center gap-2 text-[11px] font-semibold">
        <Banknote className="h-3.5 w-3.5" aria-hidden="true" />
        Pago pendiente
      </div>
      <div className="mt-1.5 text-[13px] font-semibold tabular-nums">
        {message.data?.amount ?? "$0"}
      </div>
      <div className="text-[10px] opacity-80">{message.data?.dueLabel}</div>
      <div className="mt-2 grid w-full grid-cols-3 gap-1.5">
        {methods.map((m) => {
          const Icon = METHOD_ICONS[m.id] ?? CreditCard;
          const isSelected = selected === m.id;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => pick(m)}
              aria-label={`Pagar con ${m.label}`}
              className={cn(
                "flex flex-col items-center gap-0.5 rounded-md py-1.5 transition-transform",
                "bg-white/15 hover:bg-white/25",
                isSelected && "scale-95 bg-white/30",
              )}
            >
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="text-[9.5px] font-semibold">{m.label}</span>
            </button>
          );
        })}
      </div>
    </CharloCardShell>
  );
}

function ReceiptBubble({ message, onAction }: ChatBubbleProps) {
  return (
    <CharloCardShell message={message}>
      <div className="flex w-full flex-col items-center gap-1 py-1 text-center">
        <CircleCheck className="h-7 w-7 text-green-300" strokeWidth={2.5} aria-hidden="true" />
        <p className="text-[12px] font-semibold">Pago recibido</p>
        <p className="text-[14px] font-bold tabular-nums">{message.data?.amount ?? "$0 MXN"}</p>
        <p className="text-[9.5px] opacity-75">{message.time} · Hoy</p>
        <p className="text-[9.5px] opacity-75">Ref: {message.data?.ref}</p>
        <button
          type="button"
          onClick={() => onAction?.("pagar")}
          aria-label="Descargar comprobante"
          className="mt-1.5 w-full rounded-md bg-white/20 py-1.5 text-[10.5px] font-medium transition-colors hover:bg-white/30"
        >
          Descargar comprobante
        </button>
      </div>
    </CharloCardShell>
  );
}

function TimeSlotsBubble({ message, onAction }: ChatBubbleProps) {
  const slots = message.data?.slots ?? [];
  const [selected, setSelected] = useState<string | null>(null);
  const { done, trigger } = useSuccess();

  function pick(slot: TimeSlot) {
    if (!slot.available || done) return;
    setSelected(slot.time);
    window.setTimeout(() => trigger(slot.time, onAction), 600);
  }

  return (
    <CharloCardShell message={message}>
      <div className="flex items-center gap-2 text-[11px] font-semibold">
        <CalendarClock className="h-3.5 w-3.5" aria-hidden="true" />
        Elige un horario
      </div>
      <div className="text-[10px] opacity-80">Viernes 18 de octubre</div>
      <div className="mt-2 grid w-full grid-cols-3 gap-1.5">
        {slots.map((slot) => {
          const isSelected = selected === slot.time;
          return (
            <button
              key={slot.time}
              type="button"
              disabled={!slot.available}
              onClick={() => pick(slot)}
              aria-label={`Reservar ${slot.time}`}
              className={cn(
                "rounded-md py-1.5 text-[11px] font-semibold tabular-nums transition-all",
                slot.available
                  ? "text-primary-foreground bg-white/15 hover:bg-white/25"
                  : "text-primary-foreground/30 cursor-not-allowed bg-white/5 line-through",
                isSelected && "scale-95 bg-white/35 ring-1 ring-white/40",
              )}
            >
              {slot.time}
            </button>
          );
        })}
      </div>
    </CharloCardShell>
  );
}

function CalendarEventBubble({ message, onAction }: ChatBubbleProps) {
  const { done, trigger } = useSuccess();
  const d = message.data;

  return (
    <CharloCardShell message={message}>
      <div className="flex items-center gap-2 text-[11px] font-semibold">
        <CalendarCheck className="h-3.5 w-3.5" aria-hidden="true" />
        Cita confirmada
      </div>
      <div className="mt-2 flex w-full items-center gap-2 rounded-md bg-white/15 px-2.5 py-2">
        <div className="flex flex-col items-center justify-center rounded bg-white/20 px-2 py-1">
          <span className="text-[8.5px] font-semibold tracking-wider uppercase opacity-80">
            {d?.eventDate?.split(" ")[0] ?? "VIE"}
          </span>
          <span className="text-[14px] leading-none font-bold tabular-nums">
            {d?.eventDate?.split(" ")[1]?.replace(/\D/g, "") ?? "18"}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[12px] font-semibold tabular-nums">{d?.eventTime ?? "10:00"}</p>
          <p className="truncate text-[9.5px] opacity-80">{d?.eventDoctor ?? "Dr."}</p>
          <p className="truncate text-[9.5px] opacity-70">{d?.eventLocation ?? ""}</p>
        </div>
      </div>
      <div className="mt-2 flex w-full gap-1.5">
        <button
          type="button"
          onClick={() => trigger("agendar", onAction)}
          aria-label="Agregar a calendario"
          className={cn(
            "flex-1 rounded-md py-1.5 text-[10.5px] font-medium transition-transform",
            "bg-white/20 hover:bg-white/30",
            done === "agendar" && "scale-95 bg-green-400/30",
          )}
        >
          {done === "agendar" ? (
            <span className="inline-flex items-center justify-center gap-1">
              <Check className="h-3 w-3" aria-hidden="true" />
              Agregado
            </span>
          ) : (
            "+ Calendario"
          )}
        </button>
        <button
          type="button"
          onClick={() => trigger("reagendar", onAction)}
          aria-label="Reagendar cita"
          className={cn(
            "rounded-md px-2.5 py-1.5 text-[10.5px] font-medium transition-transform",
            "bg-white/15 hover:bg-white/25",
            done === "reagendar" && "scale-95 bg-green-400/30",
          )}
        >
          {done === "reagendar" ? (
            <span className="inline-flex items-center gap-1">
              <Check className="h-3 w-3" aria-hidden="true" />
            </span>
          ) : (
            "Reagendar"
          )}
        </button>
      </div>
    </CharloCardShell>
  );
}

function QuickRepliesBubble({ message, onAction }: ChatBubbleProps) {
  const replies: QuickReply[] = message.data?.replies ?? [];
  const [picked, setPicked] = useState<string | null>(null);
  const { done, trigger } = useSuccess();

  function pick(r: QuickReply) {
    if (done) return;
    setPicked(r.id);
    window.setTimeout(() => trigger(r.id, onAction), 400);
  }

  return (
    <CharloCardShell message={message}>
      <div className="w-full space-y-1">
        {replies.map((r) => {
          const isPicked = picked === r.id;
          const isPrimary = r.variant === "primary";
          return (
            <button
              key={r.id}
              type="button"
              onClick={() => pick(r)}
              aria-label={r.label}
              className={cn(
                "flex w-full items-center justify-center gap-1.5 rounded-md py-1.5 text-[11px] font-medium transition-all",
                isPrimary
                  ? "text-primary bg-white hover:bg-white/90"
                  : "text-primary-foreground bg-white/15 hover:bg-white/25",
                isPicked && "scale-95",
                done === r.id && "bg-green-400/30",
              )}
            >
              {done === r.id ? (
                <>
                  <Check className="h-3 w-3" aria-hidden="true" />
                  {r.label}
                </>
              ) : (
                r.label
              )}
            </button>
          );
        })}
      </div>
    </CharloCardShell>
  );
}

function TypingBubble() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex justify-start"
    >
      <div
        className="bg-muted flex items-center gap-1 rounded-2xl rounded-tl-md px-3 py-2"
        role="status"
        aria-label="Escribiendo"
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="bg-muted-foreground/60 h-1.5 w-1.5 rounded-full"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
