"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type AvatarProps = {
  src: string;
  name: string;
  initials: string;
  size?: number;
  online?: boolean;
  className?: string;
};

export function Avatar({ src, name, initials, size = 36, online, className }: AvatarProps) {
  const [error, setError] = useState(false);
  const px = `${size}px`;
  const dotSize = Math.max(8, Math.round(size * 0.28));
  const dotOffset = Math.max(1, Math.round(size * 0.06));
  const borderWidth = 2;

  return (
    <div className={cn("relative shrink-0", className)} style={{ width: px, height: px }}>
      {error ? (
        <div
          aria-hidden="true"
          className="bg-primary/15 text-primary flex items-center justify-center rounded-full text-[11px] font-semibold"
          style={{ width: px, height: px, fontSize: size * 0.32 }}
        >
          {initials}
        </div>
      ) : (
        <img
          src={src}
          alt={name}
          width={size}
          height={size}
          loading="lazy"
          decoding="async"
          onError={() => setError(true)}
          className="rounded-full object-cover"
          style={{ width: px, height: px }}
        />
      )}
      {online ? (
        <span
          aria-hidden="true"
          className="border-card absolute rounded-full border-2 bg-green-500"
          style={{
            width: dotSize,
            height: dotSize,
            right: -dotOffset,
            bottom: -dotOffset,
            borderWidth,
          }}
        />
      ) : null}
    </div>
  );
}
