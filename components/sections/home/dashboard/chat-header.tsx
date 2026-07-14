"use client";

import { Phone, Search, Video } from "lucide-react";
import { Avatar } from "./avatar";
import { WhatsAppIcon } from "./whatsapp-icon";
import { fullName, initials, type Conversation } from "./scenarios";

type ChatHeaderProps = {
  conv: Conversation;
};

export function ChatHeader({ conv }: ChatHeaderProps) {
  return (
    <div className="border-border/40 bg-muted/20 flex items-center gap-2.5 border-b px-3.5 py-2.5">
      <Avatar
        src={conv.avatar}
        name={fullName(conv.name)}
        initials={initials(conv.name)}
        size={36}
        online={conv.online}
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <p className="truncate text-[12px] font-semibold">{fullName(conv.name)}</p>
          <span className="inline-flex shrink-0 items-center gap-0.5 rounded-full bg-[#25D366]/12 px-1.5 py-0.5 text-[9px] font-medium text-[#25D366]">
            <WhatsAppIcon className="h-2.5 w-2.5" />
            WhatsApp
          </span>
        </div>
        <p className="text-muted-foreground mt-0.5 text-[10px]">
          {conv.online ? (
            <span className="inline-flex items-center gap-1">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-green-500"
                aria-hidden="true"
              />
              En línea
            </span>
          ) : (
            "Visto hace 2h"
          )}
        </p>
      </div>
      <div className="text-muted-foreground flex items-center gap-2.5">
        <button
          type="button"
          aria-label="Videollamada"
          className="hover:text-foreground transition-colors"
        >
          <Video className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Llamada"
          className="hover:text-foreground transition-colors"
        >
          <Phone className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Buscar en el chat"
          className="hover:text-foreground transition-colors"
        >
          <Search className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
