"use client";

import { cn } from "@/lib/utils";
import { Avatar } from "./avatar";
import { fullName, initials, type Conversation } from "./scenarios";

type ConversationRowProps = {
  conv: Conversation;
  selected: boolean;
  onClick: () => void;
};

export function ConversationRow({ conv, selected, onClick }: ConversationRowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Abrir conversación con ${fullName(conv.name)}`}
      aria-pressed={selected}
      className={cn(
        "border-border/30 flex w-full items-start gap-2.5 border-b px-3 py-2 text-left transition-colors",
        selected ? "bg-primary/8" : "hover:bg-muted/40 focus-visible:bg-muted/40",
      )}
    >
      <Avatar
        src={conv.avatar}
        name={fullName(conv.name)}
        initials={initials(conv.name)}
        size={36}
        online={conv.online}
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-1">
          <span
            className={cn(
              "truncate text-[12px]",
              conv.unread ? "text-foreground font-semibold" : "text-foreground/85 font-medium",
            )}
          >
            {fullName(conv.name)}
          </span>
          <span className="text-muted-foreground shrink-0 text-[9px]">{conv.time}</span>
        </div>
        <div className="mt-0.5 flex items-center gap-1">
          <span
            className={cn(
              "truncate text-[10.5px]",
              conv.unread ? "text-foreground/75" : "text-muted-foreground",
            )}
          >
            {conv.preview}
          </span>
          {conv.unread ? (
            <span className="bg-primary text-primary-foreground ml-auto flex h-4 min-w-4 shrink-0 items-center justify-center rounded-full px-1 text-[9px] font-semibold">
              {conv.unread}
            </span>
          ) : null}
        </div>
      </div>
    </button>
  );
}
