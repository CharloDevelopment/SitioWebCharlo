"use client";

import { Avatar } from "./avatar";
import { Logo } from "@/components/shared/logo";
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
      <div className="bg-background/60 ml-auto flex shrink-0 items-center gap-1 rounded-md px-1.5 py-1">
        <Logo variant="mark" width={12} height={12} className="!h-3 !w-3" />
        <span className="text-foreground/70 text-[9px] font-semibold">Charló</span>
      </div>
    </div>
  );
}
