"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { FILTERS, type Conversation, type Scenario } from "./scenarios";
import { ConversationRow } from "./conversation-row";

type ConversationListProps = {
  scenario: Scenario;
  activeId: string;
  onSelect: (id: string) => void;
  business: { initials: string; name: string };
};

export function ConversationList({
  scenario,
  activeId,
  onSelect,
  business,
}: ConversationListProps) {
  return (
    <div className="border-border/40 bg-muted/8 flex flex-col border-r">
      <div className="border-border/40 bg-muted/20 flex items-center gap-2.5 border-b px-3 py-2.5">
        <div className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-semibold">
          {business.initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[12px] font-semibold">{business.name}</p>
          <p className="text-muted-foreground text-[9px]">Conectado a WhatsApp</p>
        </div>
      </div>

      <div className="border-border/40 space-y-1.5 border-b px-3 py-2">
        <div className="bg-background/60 text-muted-foreground flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[10.5px] shadow-sm">
          <Search className="h-3 w-3" aria-hidden="true" />
          Buscar
        </div>
        <div className="flex flex-wrap gap-1">
          {FILTERS.map((f, i) => (
            <span
              key={f}
              className={cn(
                "rounded-full px-2 py-0.5 text-[9.5px] font-medium transition-colors",
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
        {scenario.conversations.map((c: Conversation) => (
          <ConversationRow
            key={c.id}
            conv={c}
            selected={c.id === activeId}
            onClick={() => onSelect(c.id)}
          />
        ))}
      </div>
    </div>
  );
}
