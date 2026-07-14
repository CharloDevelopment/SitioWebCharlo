"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChatHeader } from "./chat-header";
import { ChatBubble } from "./chat-bubble";
import { ChatInput } from "./chat-input";
import type { ChatItem, Conversation, Message } from "./scenarios";

type ChatViewProps = {
  conv: Conversation;
  visibleItems: ChatItem[];
  onAction: (kind: NonNullable<Message["highlight"]>) => void;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function ChatView({ conv, visibleItems, onAction }: ChatViewProps) {
  return (
    <div className="flex min-h-0 flex-col">
      <ChatHeader conv={conv} />
      <div
        className="flex-1 space-y-1.5 overflow-hidden bg-[radial-gradient(ellipse_at_top,oklch(0.42_0.27_264_/_0.05),transparent_60%)] p-3"
        aria-live="polite"
      >
        <AnimatePresence initial={false}>
          {visibleItems.map((item, i) => {
            if ("type" in item && item.type === "divider") {
              return (
                <motion.div
                  key={`d-${conv.id}-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="my-1.5 flex justify-center"
                >
                  <span className="bg-background/80 text-muted-foreground rounded-full px-2 py-0.5 text-[9.5px] font-medium shadow-sm">
                    {item.label}
                  </span>
                </motion.div>
              );
            }
            return (
              <ChatBubble key={`m-${conv.id}-${i}`} message={item as Message} onAction={onAction} />
            );
          })}
        </AnimatePresence>
      </div>
      <ChatInput />
    </div>
  );
}
