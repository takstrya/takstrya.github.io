export function HeaderBanner() {
  //i do want to add more stuff here for description but im so indecisive...
  //keepin it simple for now i guess
  return (
    <header className="relative z-10 border-b border-white/50">
      <div className="mx-auto flex max-w-md flex-col items-center justify-center border border-white/30 bg-black px-6 py-5">
        <img
          src="/my-links-sign.png"
          alt="My Links"
          className="mb-0 w-full max-w-[300px] object-contain sm:max-w-[360px]"
        />
        <h1 className="mt-1 font-sans text-2xl tracking-[0.2em] text-white animate-flicker sm:text-3xl">
          {"takumisf"}
        </h1>
        <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-white/35">
          {""}
        </p>
      </div>
    </header>
  );
}
