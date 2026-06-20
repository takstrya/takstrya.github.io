type DriftPreset = "slow" | "medium" | "fast";

type DriftingIconProps = {
  label: string;
  symbol?: string;
  image?: string;
  imageAlt?: string;
  drift?: DriftPreset;
  driftDelay?: number;
  labelClassName?: string;
  className?: string;
};

const driftClass: Record<DriftPreset, string> = {
  slow: "animate-drift-slow",
  medium: "animate-drift-medium",
  fast: "animate-drift-fast",
};

const driftDuration: Record<DriftPreset, number> = {
  slow: 11,
  medium: 8.5,
  fast: 7,
};

export function DriftingIcon({
  label,
  symbol,
  image,
  imageAlt,
  drift = "fast",
  driftDelay = 0,
  labelClassName = "",
  className = "",
}: DriftingIconProps) {
  return (
    <div
      className={`pointer-events-none shrink-0 border border-white/50 bg-black px-3 py-2 text-center shadow-[1px_1px_0_0_rgba(255,255,255,0.1)] ${driftClass[drift]} ${className}`}
      title={label}
      style={{
        animationDelay: `${driftDelay}s`,
        animationDuration: `${driftDuration[drift]}s`,
      }}
    >
      {image ? (
        <img
          src={image}
          alt={imageAlt ?? label}
          className="mx-auto h-20 w-20 object-contain [image-rendering:pixelated]"
          draggable={false}
        />
      ) : (
        <div className="font-display text-2xl leading-none">{symbol}</div>
      )}
      <div className={`mt-1 text-[9px] tracking-widest text-white/40 ${labelClassName}`}>{label}</div>
    </div>
  );
}
