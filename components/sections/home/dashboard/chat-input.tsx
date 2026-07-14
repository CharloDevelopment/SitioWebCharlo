"use client";

import { Paperclip, Send, Smile } from "lucide-react";
import { Logo } from "@/components/shared/logo";

export function ChatInput() {
  return (
    <div className="border-border/40 bg-muted/15 flex items-center gap-2 border-t px-3 py-2.5">
      <button
        type="button"
        aria-label="Emoji"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <Smile className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Adjuntar archivo"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <Paperclip className="h-4 w-4" />
      </button>
      <div className="bg-background text-muted-foreground flex flex-1 items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] shadow-sm">
        <Logo variant="mark" width={12} height={12} className="!h-3 !w-3 opacity-60" />
        Escribe un mensaje
      </div>
      <button
        type="button"
        aria-label="Enviar mensaje"
        className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-full transition-transform hover:scale-105"
      >
        <Send className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
