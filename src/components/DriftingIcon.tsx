type DriftingIconProps = {
  label: string;
  symbol: string;
  className?: string;
};

export function DriftingIcon({ label, symbol, className = "" }: DriftingIconProps) {
  return (
    <div
      className={`shrink-0 animate-drift-fast border border-white/50 bg-black px-3 py-2 text-center shadow-[1px_1px_0_0_rgba(255,255,255,0.1)] ${className}`}
      title={label}
    >
      <div className="font-display text-2xl leading-none">{symbol}</div>
      <div className="mt-1 text-[9px] tracking-widest text-white/40">
        {label}
      </div>
    </div>
  );
}
