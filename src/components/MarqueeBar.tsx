import { MARQUEE_TEXT } from "../config/links";

export function MarqueeBar() {
  const text = `${MARQUEE_TEXT}${MARQUEE_TEXT}`;

  return (
    <div className="relative z-10 overflow-hidden border-y border-white/50 bg-black py-1">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        <span className="px-4 font-display text-lg tracking-widest text-white/70">
          {text}
        </span>
        <span className="px-4 font-display text-lg tracking-widest text-white/70">
          {text}
        </span>
      </div>
    </div>
  );
}
