export function SceneBackdrop() {
  return (
    <div className="scene-backdrop pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <img
        src="/ascii-scene.png"
        alt=""
        className="scene-backdrop-sharp"
        draggable={false}
      />
      <img
        src="/ascii-scene.png"
        alt=""
        className="scene-backdrop-blur"
        draggable={false}
      />
    </div>
  );
}
