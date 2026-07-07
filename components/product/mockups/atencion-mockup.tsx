"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Message = {
  role: "bot" | "user";
  text: string;
  quickReplies?: string[];
};

const CONVERSATION: Message[] = [
  {
    role: "user",
    text: "Hola, ¿cuánto cuesta la consulta?",
  },
  {
    role: "bot",
    text: "¡Hola! 😊 La consulta general tiene un costo de $800 MXN. La consulta especializada es de $1,200. ¿Quieres que te ayude a agendar una cita?",
    quickReplies: ["Sí, agendar", "Ver horarios", "Hablar con humano"],
  },
];

const QUICK_REPLY_RESPONSES: Record<string, string> = {
  "Sí, agendar":
    "Perfecto. Tenemos disponibilidad esta semana. ¿Qué día prefieres: lunes, miércoles o viernes?",
  "Ver horarios":
    "Nuestros horarios son: Lunes a Viernes 9:00-18:00 y Sábados 9:00-14:00. ¿Qué día te acomoda?",
  "Hablar con humano":
    "Conecto con un asesor humano en un momento. Mientras tanto, ¿me compartes tu nombre para identificarte?",
  "Ver precios":
    "Tenemos 3 planes: Inicial $599, Crecimiento $1,499 y Empresa desde $5,499 MXN/mes.",
  "1": "¡Genial! Te enviamos un recordatorio. ¿Confirmo la cita para ese día?",
};

const SUGGESTED_PROMPTS = ["¿Cuánto cuesta?", "Ver horarios", "Hablar con humano"];

export function AtencionMockup() {
  const [messages, setMessages] = useState<Message[]>(CONVERSATION);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  function botReply(userText: string) {
    const reply =
      QUICK_REPLY_RESPONSES[userText] ??
      "¡Entendido! Un asesor te contactará en breve. Mientras tanto, ¿hay algo más en lo que pueda ayudarte?";
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
      setIsTyping(false);
    }, 900);
  }

  function send(text: string) {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    botReply(text);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    send(input);
  }

  return (
    <div className="border-border bg-card mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border shadow-2xl">
      <div className="border-border bg-muted/30 flex items-center gap-3 border-b px-4 py-3">
        <div className="relative">
          <div className="bg-primary text-primary-foreground flex h-9 w-9 items-center justify-center rounded-full">
            <Bot className="h-4 w-4" />
          </div>
          <div className="border-card absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full border-2 bg-green-500" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold">Charlo Atención</p>
          <p className="text-muted-foreground text-xs">En línea · 24/7</p>
        </div>
        <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
          Activo
        </span>
      </div>

      <div ref={scrollRef} className="bg-muted/10 h-[400px] overflow-y-auto p-4">
        <div className="flex flex-col gap-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={cn(
                "flex max-w-[80%] flex-col gap-2",
                msg.role === "user" ? "ml-auto items-end" : "mr-auto items-start",
              )}
            >
              <div
                className={cn("flex items-start gap-2", msg.role === "user" && "flex-row-reverse")}
              >
                <div
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                    msg.role === "bot"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  {msg.role === "bot" ? (
                    <Bot className="h-3.5 w-3.5" />
                  ) : (
                    <User className="h-3.5 w-3.5" />
                  )}
                </div>
                <div
                  className={cn(
                    "rounded-2xl px-4 py-2.5 text-sm",
                    msg.role === "bot"
                      ? "bg-card text-card-foreground shadow-sm"
                      : "bg-primary text-primary-foreground",
                  )}
                >
                  {msg.text}
                </div>
              </div>
              {msg.quickReplies && i === messages.length - 1 ? (
                <div className="ml-9 flex flex-wrap gap-2">
                  {msg.quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => send(reply)}
                      className="border-border bg-background hover:border-primary hover:text-primary rounded-full border px-3 py-1 text-xs font-medium transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          ))}

          {isTyping ? (
            <div className="flex max-w-[80%] items-start gap-2">
              <div className="bg-primary text-primary-foreground flex h-7 w-7 shrink-0 items-center justify-center rounded-full">
                <Bot className="h-3.5 w-3.5" />
              </div>
              <div className="bg-card rounded-2xl px-4 py-3 text-sm shadow-sm">
                <div className="flex gap-1">
                  <div className="bg-muted-foreground/50 h-1.5 w-1.5 animate-bounce rounded-full [animation-delay:-0.3s]" />
                  <div className="bg-muted-foreground/50 h-1.5 w-1.5 animate-bounce rounded-full [animation-delay:-0.15s]" />
                  <div className="bg-muted-foreground/50 h-1.5 w-1.5 animate-bounce rounded-full" />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="border-border bg-card border-t p-3">
        <div className="mb-2 flex flex-wrap gap-1.5">
          {SUGGESTED_PROMPTS.map((prompt) => (
            <button
              key={prompt}
              onClick={() => send(prompt)}
              className="bg-muted text-muted-foreground hover:bg-muted/70 hover:text-foreground rounded-full px-2.5 py-1 text-xs transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe un mensaje..."
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={!input.trim()} aria-label="Enviar mensaje">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
