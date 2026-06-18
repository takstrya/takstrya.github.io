import type { ReactNode } from "react";

type RetroWindowProps = {
  title: string;
  children: ReactNode;
  className?: string;
  drift?: "slow" | "medium" | "fast" | "none";
  width?: "sm" | "md" | "lg";
};

const driftClass = {
  slow: "animate-drift-slow",
  medium: "animate-drift-medium",
  fast: "animate-drift-fast",
  none: "",
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
  width = "md",
}: RetroWindowProps) {
  return (
    <div
      className={`shrink-0 border border-white/80 bg-black shadow-[2px_2px_0_0_rgba(255,255,255,0.15)] ${widthClass[width]} ${driftClass[drift]} ${className}`}
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
      <div className="p-2">{children}</div>
    </div>
  );
}
