import { useMemo } from "react";

type Flake = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
};

const FLAKE_COUNT = 50;

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function createFlakes(): Flake[] {
  return Array.from({ length: FLAKE_COUNT }, (_, id) => ({
    id,
    left: randomBetween(0, 100),
    size: randomBetween(2, 5),
    duration: randomBetween(9, 20),
    delay: randomBetween(0, 20),
    drift: randomBetween(-36, 36),
    opacity: randomBetween(0.2, 0.6),
  }));
}

export function Snowfall() {
  const flakes = useMemo(() => createFlakes(), []);

  return (
    <>
      <div className="snow-ground" aria-hidden="true" />
      <div className="snowfall-layer pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {flakes.map((flake) => (
        <span
          key={flake.id}
          className="animate-snowfall absolute rounded-full bg-white"
          style={{
            left: `${flake.left}%`,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            ["--snow-drift" as string]: `${flake.drift}px`,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
          }}
        />
      ))}
      </div>
    </>
  );
}
