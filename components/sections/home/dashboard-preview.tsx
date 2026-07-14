"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChatView } from "./dashboard/chat-view";
import { ConversationList } from "./dashboard/conversation-list";
import { SCENARIOS, TABS, type ChatItem, type Tab } from "./dashboard/scenarios";

const ROTATION_INTERVAL = 14000;
const RESUME_AFTER_INTERACTION = 5000;
const STEP_TYPING = 1500;
const STEP_MESSAGE = 1800;
const STEP_DIVIDER = 1000;
const STEP_RICH_CARD = 3000;
const STEP_END_PAUSE = 4000;

const BUSINESS = { initials: "JM", name: "Tu negocio" };

export function DashboardPreview() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState<Tab>("atencion");
  const [activeConvId, setActiveConvId] = useState<string>(
    SCENARIOS.atencion.conversations[0]?.id ?? "",
  );
  const [playhead, setPlayhead] = useState(0);
  const [autoPlaying, setAutoPlaying] = useState(true);
  const [pausedByUser, setPausedByUser] = useState(false);
  const [hovered, setHovered] = useState(false);
  const resumeTimerRef = useRef<number | null>(null);
  const stepTimerRef = useRef<number | null>(null);

  const scenario = SCENARIOS[active];
  const activeConv =
    scenario.conversations.find((c) => c.id === activeConvId) ?? scenario.conversations[0];

  const clearResumeTimer = useCallback(() => {
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }, []);

  const clearStepTimer = useCallback(() => {
    if (stepTimerRef.current !== null) {
      window.clearTimeout(stepTimerRef.current);
      stepTimerRef.current = null;
    }
  }, []);

  const scheduleResume = useCallback(() => {
    clearResumeTimer();
    resumeTimerRef.current = window.setTimeout(() => {
      setPausedByUser(false);
    }, RESUME_AFTER_INTERACTION);
  }, [clearResumeTimer]);

  const resetPlayhead = useCallback(() => {
    setPlayhead(0);
  }, []);

  const handleTabChange = useCallback(
    (tab: Tab) => {
      setActive(tab);
      setActiveConvId(SCENARIOS[tab].conversations[0]?.id ?? "");
      resetPlayhead();
    },
    [resetPlayhead],
  );

  const handleSelectConv = useCallback(
    (id: string) => {
      setActiveConvId(id);
      resetPlayhead();
      setPausedByUser(true);
      scheduleResume();
    },
    [resetPlayhead, scheduleResume],
  );

  const handleAttachment = useCallback(() => {
    setPausedByUser(true);
    scheduleResume();
  }, [scheduleResume]);

  useEffect(() => {
    if (pausedByUser || hovered || reduced) {
      setAutoPlaying(false);
      return;
    }
    setAutoPlaying(true);
  }, [pausedByUser, hovered, reduced]);

  useEffect(() => {
    if (pausedByUser || hovered || reduced) {
      clearStepTimer();
      return;
    }

    const item = scenario.chat[playhead];
    if (!item) {
      stepTimerRef.current = window.setTimeout(() => {
        const nextTabIdx = (TABS.findIndex((t) => t.id === active) + 1) % TABS.length;
        const nextTab = TABS[nextTabIdx]?.id ?? "atencion";
        handleTabChange(nextTab);
      }, STEP_END_PAUSE);
      return () => clearStepTimer();
    }

    let delay: number;
    if ("type" in item && item.type === "divider") delay = STEP_DIVIDER;
    else if ("typing" in item && item.typing) delay = STEP_TYPING;
    else if ("attachment" in item && item.attachment) delay = STEP_RICH_CARD;
    else delay = STEP_MESSAGE;

    stepTimerRef.current = window.setTimeout(() => {
      setPlayhead((p) => p + 1);
    }, delay);

    return () => clearStepTimer();
  }, [playhead, pausedByUser, hovered, reduced, scenario, active, handleTabChange, clearStepTimer]);

  useEffect(() => {
    return () => {
      clearResumeTimer();
      clearStepTimer();
    };
  }, [clearResumeTimer, clearStepTimer]);

  useEffect(() => {
    if (!autoPlaying) return;
    const id = window.setInterval(() => {
      setActive((current) => {
        const idx = TABS.findIndex((t) => t.id === current);
        const nextIdx = (idx + 1) % TABS.length;
        const nextTab = TABS[nextIdx]?.id ?? "atencion";
        setActiveConvId(SCENARIOS[nextTab].conversations[0]?.id ?? "");
        setPlayhead(0);
        return nextTab;
      });
    }, ROTATION_INTERVAL);
    return () => window.clearInterval(id);
  }, [autoPlaying]);

  if (!activeConv) return null;

  const visibleItems: ChatItem[] = scenario.chat.slice(0, playhead + 1);

  return (
    <div
      className="relative w-full max-w-2xl xl:max-w-3xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        aria-hidden="true"
        className="from-primary/15 via-primary/5 absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-br to-transparent blur-2xl"
      />

      <div className="border-border/40 bg-card/90 shadow-primary/8 overflow-hidden rounded-2xl border shadow-2xl backdrop-blur-sm">
        <div className="border-border/40 bg-muted/30 flex items-center gap-1.5 border-b px-4 py-2.5">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          </div>
          <div className="bg-background/60 ml-auto flex items-center gap-1.5 rounded-md px-2 py-1">
            <img
              src="/brand/logo-dashboard.png"
              alt="Charló"
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden="true" />
          </div>
        </div>

        <div className="border-border/40 bg-muted/15 flex items-center gap-1 border-b p-1.5">
          {TABS.map((tab) => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={cn(
                  "relative flex flex-1 items-center justify-center rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
                type="button"
                aria-pressed={isActive}
              >
                {isActive ? (
                  <motion.div
                    layoutId="dash-tab"
                    className="bg-background absolute inset-0 rounded-md shadow-sm"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                ) : null}
                <span className="relative">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="relative h-[400px] overflow-hidden xl:h-[440px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 grid grid-cols-[190px_1fr] xl:grid-cols-[210px_1fr]"
            >
              <ConversationList
                scenario={scenario}
                activeId={activeConv.id}
                onSelect={handleSelectConv}
                business={BUSINESS}
              />
              <ChatView
                key={activeConv.id}
                conv={activeConv}
                visibleItems={visibleItems}
                onAction={handleAttachment}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
