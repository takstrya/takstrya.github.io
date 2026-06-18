import type { ReactNode } from "react";

type RetroWindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
  drift?: "slow" | "medium" | "fast" | "none";
  driftDelay?: number;
  width?: "sm" | "md" | "lg";
};

const driftClass = {
  slow: "animate-drift-slow",
  medium: "animate-drift-medium",
  fast: "animate-drift-fast",
  none: "",
};

const driftDuration = {
  slow: 11,
  medium: 8.5,
  fast: 7,
};

const widthClass = {
  sm: "w-36",
  md: "w-44",
  lg: "w-52",
};

export function RetroWindow({
  title,
  children,
  className = "",
  drift = "slow",
  driftDelay = 0,
  width = "md",
}: RetroWindowProps) {
  return (
    <div
      className={`relative z-20 shrink-0 border border-white/80 bg-black shadow-[2px_2px_0_0_rgba(255,255,255,0.15)] ${widthClass[width]} ${drift !== "none" ? driftClass[drift] : ""} ${className}`}
      style={
        drift !== "none"
          ? {
              animationDelay: `${driftDelay}s`,
              animationDuration: `${driftDuration[drift]}s`,
            }
          : undefined
      }
    >
      <div className="flex items-center justify-between border-b border-white/60 bg-white px-1 py-0.5">
        <span className="truncate font-display text-base leading-none text-black">
          {title}
        </span>
        <div className="flex shrink-0 gap-0.5">
          <span className="flex h-3 w-3 items-center justify-center border border-black/40 text-[8px] leading-none text-black">
            □
          </span>
          <span className="flex h-3 w-3 items-center justify-center border border-black/40 text-[8px] leading-none text-black">
            ×
          </span>
        </div>
      </div>
      <div className="relative z-10 p-2">{children}</div>
    </div>
  );
}
