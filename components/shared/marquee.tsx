"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
};

const speedMap = {
  slow: "duration-[40s]",
  normal: "duration-[30s]",
  fast: "duration-[20s]",
};

export function Marquee({
  children,
  speed = "normal",
  direction = "left",
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex shrink-0 gap-8 pr-8",
          "animate-marquee",
          speedMap[speed],
          direction === "right" && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 gap-8 pr-8",
          "animate-marquee",
          speedMap[speed],
          direction === "right" && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        {children}
      </div>
    </div>
  );
}
