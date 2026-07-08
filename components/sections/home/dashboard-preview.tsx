"use client";

import { useEffect, useState } from "react";
import {
  Bot,
  CalendarClock,
  Check,
  CheckCheck,
  CreditCard,
  Paperclip,
  Phone,
  Search,
  Send,
  Smile,
  Video,
  Wallet,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = "atencion" | "cobranza" | "agenda";

const TABS: { id: Tab; label: string; icon: typeof Bot }[] = [
  { id: "atencion", label: "Atención", icon: Bot },
  { id: "cobranza", label: "Cobranza", icon: Wallet },
  { id: "agenda", label: "Agenda", icon: CalendarClock },
];

const ROTATION_INTERVAL = 6000;

type Conversation = {
  initials: string;
  name: string;
  preview: string;
  time: string;
  unread?: number;
  online?: boolean;
  selected?: boolean;
};

type Message = {
  from: "client" | "charlo";
  text?: string;
  time: string;
  status?: "sent" | "delivered" | "read";
  attachment?: "link" | "calendar" | "reminder";
  typing?: boolean;
};

type DayDivider = { type: "divider"; label: string };
type ChatItem = Message | DayDivider;

const FILTERS = ["Todos", "No leídos", "Clientes", "Pagos", "Citas"];

const SCENARIOS: Record<
  Tab,
  { conversations: Conversation[]; active: number; chat: ChatItem[]; filterIdx: number }
> = {
  atencion: {
    filterIdx: 0,
    conversations: [
      {
        initials: "MG",
        name: "María González",
        preview: "¿Tienen disponible el viernes?",
        time: "12:42",
        unread: 2,
        online: true,
        selected: true,
      },
      {
        initials: "AP",
        name: "Ana Pérez",
        preview: "Gracias, nos vemos el sábado",
        time: "11:18",
      },
      {
        initials: "LC",
        name: "Luis Castañeda",
        preview: "¿Cuánto cuesta la consulta?",
        time: "10:55",
        unread: 1,
      },
      {
        initials: "RV",
        name: "Rosa Velasco",
        preview: "Perfecto, confirmado",
        time: "Ayer",
      },
      {
        initials: "DM",
        name: "Diego Maldonado",
        preview: "Necesito información",
        time: "Ayer",
      },
      {
        initials: "SF",
        name: "Sofía Fuentes",
        preview: "El servicio incluye garantía?",
        time: "Lun",
      },
    ],
    active: 0,
    chat: [
      { type: "divider", label: "Hoy" },
      {
        from: "client",
        text: "Hola, ¿tienen disponibilidad para el viernes en la mañana?",
        time: "12:38",
      },
      {
        from: "charlo",
        text: "Hola María. Tengo espacio a las 9:00 y a las 11:30. ¿Cuál te acomoda mejor?",
        time: "12:39",
        status: "read",
      },
      {
        from: "client",
        text: "A las 11:30 va perfecto",
        time: "12:40",
      },
      {
        from: "charlo",
        text: "Listo. Te aparto el viernes 18 a las 11:30. Te mando un recordatorio el jueves. ¿Confirmo?",
        time: "12:41",
        status: "read",
        attachment: "calendar",
      },
      {
        from: "client",
        text: "Sí, gracias",
        time: "12:42",
      },
      { from: "charlo", typing: true, time: "12:42" },
    ],
  },
  cobranza: {
    filterIdx: 3,
    conversations: [
      {
        initials: "RH",
        name: "Roberto Hernández",
        preview: "Pago realizado. Gracias",
        time: "13:15",
        online: true,
        selected: true,
      },
      {
        initials: "LM",
        name: "Lucía Martínez",
        preview: "Listo, mañana temprano",
        time: "12:08",
        unread: 1,
      },
      {
        initials: "AC",
        name: "Andrés Cruz",
        preview: "¿Aceptan transferencia?",
        time: "11:30",
      },
      {
        initials: "PG",
        name: "Patricia Gutiérrez",
        preview: "Pagado",
        time: "10:00",
      },
      {
        initials: "JS",
        name: "Jorge Salinas",
        preview: "Espero el link por favor",
        time: "Ayer",
      },
      {
        initials: "MR",
        name: "Mariana Reyes",
        preview: "Confirmado",
        time: "Lun",
      },
    ],
    active: 0,
    chat: [
      { type: "divider", label: "Hoy" },
      {
        from: "charlo",
        text: "Hola Roberto. Te recuerdo que tu pago de $4,200 vence hoy. ¿Te envío el link?",
        time: "10:02",
        status: "read",
      },
      {
        from: "client",
        text: "Sí, mándamelo por favor",
        time: "10:05",
      },
      {
        from: "charlo",
        text: "Listo. Puedes pagar con tarjeta o transferencia.",
        time: "10:06",
        status: "read",
        attachment: "link",
      },
      { type: "divider", label: "Más tarde" },
      {
        from: "charlo",
        text: "Hola Roberto, ¿pudiste realizar el pago?",
        time: "13:00",
        status: "read",
      },
      {
        from: "client",
        text: "Pago realizado. Gracias",
        time: "13:15",
      },
      {
        from: "charlo",
        text: "Recibido. Tu saldo está al corriente. Gracias por tu preferencia.",
        time: "13:15",
        status: "read",
      },
    ],
  },
  agenda: {
    filterIdx: 4,
    conversations: [
      {
        initials: "LO",
        name: "Lucía Ortega",
        preview: "Confirmo cita del viernes 10am",
        time: "14:22",
        online: true,
        selected: true,
      },
      {
        initials: "CV",
        name: "Carlos Vera",
        preview: "Necesito reagendar",
        time: "13:50",
        unread: 1,
      },
      {
        initials: "MR",
        name: "Mariana Reyes",
        preview: "A las 4pm perfecto",
        time: "12:10",
      },
      {
        initials: "JL",
        name: "Juan López",
        preview: "Listo, ahí estaré",
        time: "11:00",
      },
      {
        initials: "EM",
        name: "Elena Mendoza",
        preview: "¿Hay espacio mañana?",
        time: "Ayer",
      },
      {
        initials: "DT",
        name: "David Torres",
        preview: "Confirmado",
        time: "Lun",
      },
    ],
    active: 0,
    chat: [
      { type: "divider", label: "Hoy" },
      {
        from: "charlo",
        text: "Hola Lucía. Tienes cita el viernes 18 a las 10:00 con el Dr. Hernández. ¿Confirmas?",
        time: "14:00",
        status: "read",
        attachment: "reminder",
      },
      {
        from: "client",
        text: "Confirmo cita del viernes 10am",
        time: "14:22",
      },
      {
        from: "charlo",
        text: "Perfecto. Te mando recordatorio 24 horas antes. Si necesitas reagendar, dime con tiempo.",
        time: "14:22",
        status: "read",
        attachment: "calendar",
      },
      { from: "charlo", typing: true, time: "14:23" },
    ],
  },
};

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

  const scenario = SCENARIOS[active];

  return (
    <div
      className="relative w-full max-w-2xl"
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

        <div className="relative h-[440px] overflow-hidden">
          {TABS.map((tab) => (
            <motion.div
              key={tab.id}
              initial={false}
              animate={{
                opacity: active === tab.id ? 1 : 0,
                pointerEvents: active === tab.id ? "auto" : "none",
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <WhatsAppView scenario={scenario} />
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

function WhatsAppView({ scenario }: { scenario: (typeof SCENARIOS)[Tab] }) {
  return (
    <div className="grid h-full grid-cols-[180px_1fr] sm:grid-cols-[220px_1fr]">
      <div className="border-border/60 bg-muted/10 flex flex-col border-r">
        <div className="border-border/60 bg-muted/20 flex items-center gap-2 border-b px-3 py-2.5">
          <div className="bg-primary text-primary-foreground flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold">
            JM
          </div>
          <span className="text-foreground/80 text-xs font-medium">Tu negocio</span>
        </div>

        <div className="border-border/60 border-b px-2 py-2">
          <div className="bg-background/60 text-muted-foreground flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[10px]">
            <Search className="h-3 w-3" />
            Buscar
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {FILTERS.map((f, i) => (
              <span
                key={f}
                className={cn(
                  "rounded-full px-2 py-0.5 text-[9px] font-medium",
                  i === scenario.filterIdx
                    ? "bg-primary text-primary-foreground"
                    : "bg-background/60 text-muted-foreground",
                )}
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          {scenario.conversations.map((c) => (
            <ConversationRow key={c.name} conv={c} />
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <ChatHeader conv={scenario.conversations[scenario.active]} />
        <ChatBody items={scenario.chat} />
        <ChatInput />
      </div>
    </div>
  );
}

function ConversationRow({ conv }: { conv: Conversation }) {
  return (
    <div
      className={cn(
        "border-border/40 flex cursor-default items-start gap-2 border-b px-2.5 py-2 transition-colors",
        conv.selected ? "bg-primary/8" : "hover:bg-muted/30",
      )}
    >
      <div className="relative shrink-0">
        <div
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-semibold",
            conv.selected ? "bg-primary text-primary-foreground" : "bg-primary/15 text-primary",
          )}
        >
          {conv.initials}
        </div>
        {conv.online ? (
          <div className="border-card absolute -right-0.5 -bottom-0.5 h-2 w-2 rounded-full border bg-green-500" />
        ) : null}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-1">
          <span
            className={cn(
              "truncate text-[11px]",
              conv.unread ? "text-foreground font-semibold" : "text-foreground/80 font-medium",
            )}
          >
            {conv.name}
          </span>
          <span className="text-muted-foreground shrink-0 text-[9px]">{conv.time}</span>
        </div>
        <div className="mt-0.5 flex items-center gap-1">
          <span
            className={cn(
              "truncate text-[10px]",
              conv.unread ? "text-foreground/70" : "text-muted-foreground",
            )}
          >
            {conv.preview}
          </span>
          {conv.unread ? (
            <span className="bg-primary text-primary-foreground ml-auto flex h-3.5 min-w-3.5 shrink-0 items-center justify-center rounded-full px-1 text-[8px] font-semibold">
              {conv.unread}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function ChatHeader({ conv }: { conv?: Conversation }) {
  if (!conv) return null;
  return (
    <div className="border-border/60 bg-muted/20 flex items-center gap-2.5 border-b px-3 py-2.5">
      <div className="relative">
        <div className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-semibold">
          {conv.initials}
        </div>
        {conv.online ? (
          <div className="border-card absolute -right-0.5 -bottom-0.5 h-2 w-2 rounded-full border bg-green-500" />
        ) : null}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[11px] font-semibold">{conv.name}</p>
        <p className="text-muted-foreground text-[9px]">
          {conv.online ? "En línea" : "Visto hace 2h"}
        </p>
      </div>
      <div className="text-muted-foreground flex items-center gap-2">
        <Video className="h-3.5 w-3.5" />
        <Phone className="h-3.5 w-3.5" />
        <Search className="h-3.5 w-3.5" />
      </div>
    </div>
  );
}

function ChatBody({ items }: { items: ChatItem[] }) {
  return (
    <div className="flex-1 space-y-1.5 overflow-hidden bg-[radial-gradient(ellipse_at_top,oklch(0.42_0.27_264_/_0.04),transparent_60%)] p-3">
      {items.map((item, i) => {
        if ("type" in item && item.type === "divider") {
          return (
            <div key={`d-${i}`} className="my-2 flex justify-center">
              <span className="bg-background/70 text-muted-foreground rounded-full px-2 py-0.5 text-[9px] font-medium shadow-sm">
                {item.label}
              </span>
            </div>
          );
        }
        if ("typing" in item && item.typing) {
          return <TypingBubble key={`t-${i}`} />;
        }
        return <MessageBubble key={`m-${i}`} message={item as Message} />;
      })}
    </div>
  );
}

function MessageBubble({ message }: { message: Message }) {
  const isCharlo = message.from === "charlo";
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn("flex flex-col gap-0.5", isCharlo ? "items-end" : "items-start")}
    >
      {message.attachment === "link" ? (
        <div className="bg-primary text-primary-foreground max-w-[88%] rounded-lg rounded-tr-sm p-2.5 shadow-sm">
          <div className="flex items-center gap-2 text-[10px] font-semibold">
            <CreditCard className="h-3 w-3" />
            Link de pago
          </div>
          <div className="mt-1 text-[10px] opacity-90">$4,200 MXN · vence hoy</div>
          <div className="mt-2 rounded bg-white/15 px-2 py-1 text-center text-[10px] font-medium">
            Pagar ahora
          </div>
        </div>
      ) : message.attachment === "calendar" ? (
        <div className="bg-primary text-primary-foreground max-w-[88%] rounded-lg rounded-tr-sm p-2.5 shadow-sm">
          <div className="flex items-center gap-2 text-[10px] font-semibold">
            <CalendarClock className="h-3 w-3" />
            Cita agendada
          </div>
          <div className="mt-1 text-[10px] opacity-90">Vie 18 · 10:00</div>
          <div className="mt-2 flex gap-1.5">
            <div className="rounded bg-white/15 px-2 py-0.5 text-[9px]">Confirmar</div>
            <div className="rounded bg-white/15 px-2 py-0.5 text-[9px]">Reagendar</div>
          </div>
        </div>
      ) : message.attachment === "reminder" ? (
        <div className="bg-primary text-primary-foreground max-w-[88%] rounded-lg rounded-tr-sm p-2.5 shadow-sm">
          <div className="flex items-center gap-2 text-[10px] font-semibold">
            <CalendarClock className="h-3 w-3" />
            Recordatorio
          </div>
          <div className="mt-1 text-[10px] opacity-90">Tienes una cita próxima</div>
        </div>
      ) : (
        <div
          className={cn(
            "max-w-[85%] rounded-lg px-2.5 py-1.5 text-[11px] shadow-sm",
            isCharlo
              ? "bg-primary text-primary-foreground rounded-tr-sm"
              : "bg-muted text-foreground rounded-tl-sm",
          )}
        >
          {message.text}
        </div>
      )}
      <div
        className={cn(
          "text-muted-foreground flex items-center gap-0.5 px-1 text-[8px]",
          isCharlo ? "flex-row-reverse" : "",
        )}
      >
        <span>{message.time}</span>
        {isCharlo ? (
          message.status === "read" ? (
            <CheckCheck className="text-primary h-2.5 w-2.5" />
          ) : message.status === "delivered" ? (
            <CheckCheck className="h-2.5 w-2.5" />
          ) : (
            <Check className="h-2.5 w-2.5" />
          )
        ) : null}
      </div>
    </motion.div>
  );
}

function TypingBubble() {
  return (
    <div className="flex justify-start">
      <div className="bg-muted flex items-center gap-1 rounded-lg rounded-tl-sm px-2.5 py-2">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="bg-muted-foreground/60 h-1.5 w-1.5 rounded-full"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}

function ChatInput() {
  return (
    <div className="border-border/60 bg-muted/20 flex items-center gap-2 border-t px-3 py-2.5">
      <Smile className="text-muted-foreground h-4 w-4" />
      <Paperclip className="text-muted-foreground h-4 w-4" />
      <div className="bg-background/60 text-muted-foreground flex-1 rounded-full px-3 py-1.5 text-[10px]">
        Escribe un mensaje
      </div>
      <div className="bg-primary text-primary-foreground flex h-7 w-7 items-center justify-center rounded-full">
        <Send className="h-3 w-3" />
      </div>
    </div>
  );
}
