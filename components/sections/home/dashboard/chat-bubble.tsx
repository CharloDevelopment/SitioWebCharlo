"use client";

import { useState } from "react";
import { CalendarClock, Check, CheckCheck, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Message } from "./scenarios";

type ChatBubbleProps = {
  message: Message;
  onAction?: (kind: NonNullable<Message["highlight"]>) => void;
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

function PaymentBubble({ message, onAction }: ChatBubbleProps) {
  const [pressed, setPressed] = useState(false);
  const [done, setDone] = useState(false);

  function handle() {
    if (done) return;
    setPressed(true);
    setTimeout(() => {
      setPressed(false);
      setDone(true);
      onAction?.("pagar");
      setTimeout(() => setDone(false), 1800);
    }, 220);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: EASE }}
      className="flex flex-col items-end gap-0.5"
    >
      <div className="bg-primary text-primary-foreground max-w-[88%] rounded-2xl rounded-tr-md p-2.5 shadow-sm">
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
            done && "bg-green-400/30",
          )}
        >
          {done ? (
            <span className="inline-flex items-center justify-center gap-1">
              <Check className="h-3 w-3" aria-hidden="true" />
              Pago realizado
            </span>
          ) : (
            "Pagar ahora"
          )}
        </button>
      </div>
      <BubbleMeta message={message} isCharlo />
    </motion.div>
  );
}

function CalendarBubble({ message, onAction }: ChatBubbleProps) {
  const [confirming, setConfirming] = useState(false);
  const [reagendando, setReagendando] = useState(false);
  const [done, setDone] = useState<null | "confirmar" | "reagendar">(null);

  function act(kind: "confirmar" | "reagendar") {
    if (done) return;
    if (kind === "confirmar") setConfirming(true);
    if (kind === "reagendar") setReagendando(true);
    setTimeout(() => {
      setConfirming(false);
      setReagendando(false);
      setDone(kind);
      onAction?.(kind);
      setTimeout(() => setDone(null), 1800);
    }, 220);
  }

  const isReminder = message.attachment === "reminder";
  const title = isReminder ? "Recordatorio" : "Cita agendada";
  const subtitle = isReminder ? "Tienes una cita próxima" : "Vie 18 · 11:30";

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: EASE }}
      className="flex flex-col items-end gap-0.5"
    >
      <div className="bg-primary text-primary-foreground max-w-[88%] rounded-2xl rounded-tr-md p-2.5 shadow-sm">
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
                confirming && "scale-95",
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
                reagendando && "scale-95",
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
      </div>
      <BubbleMeta message={message} isCharlo />
    </motion.div>
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
