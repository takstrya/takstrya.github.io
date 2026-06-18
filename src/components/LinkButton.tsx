import type { SocialLink } from "../config/links";

type LinkButtonProps = {
  link: SocialLink;
};

export function LinkButton({ link }: LinkButtonProps) {
  const base =
    "group flex w-full items-center gap-2 border border-white/50 px-2 py-1.5 text-left transition-colors";

  const content = (
    <>
      <span className="font-display text-lg leading-none">{link.icon}</span>
      <span className="flex flex-col">
        <span className="text-xs uppercase tracking-widest">{link.label}</span>
        {link.underConstruction && (
          <span className="text-[10px] text-white/40">[ under construction ]</span>
        )}
      </span>
    </>
  );

  if (link.underConstruction || !link.href) {
    return (
      <div
        className={`${base} cursor-not-allowed opacity-50`}
        aria-disabled="true"
        title="under construction"
      >
        {content}
      </div>
    );
  }

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} hover:bg-white hover:text-black`}
    >
      {content}
    </a>
  );
}
