export function HeaderBanner() {
  //i do want to add more stuff here for description but im so indecisive...
  //keepin it simple for now i guess
  return (
    <header className="relative z-10 border-b border-white/50">
      <div className="mx-auto flex max-w-md flex-col items-center justify-center border border-white/30 bg-black px-6 py-5">
        <img
          src="/my-links-sign.png"
          alt="My Links"
          className="mb-2 w-full max-w-[240px] object-contain sm:max-w-[280px]"
        />
        <h1 className="font-display text-4xl tracking-[0.2em] text-white animate-flicker">
          {"takumisf"}
        </h1>
        <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-white/35">
          {""}
        </p>
      </div>
    </header>
  );
}
