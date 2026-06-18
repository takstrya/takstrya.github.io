import { HeaderBanner } from "./components/HeaderBanner";
import { MarqueeBar } from "./components/MarqueeBar";
import { Snowfall } from "./components/Snowfall";
import { RetroWindow } from "./components/RetroWindow";
import { DriftingIcon } from "./components/DriftingIcon";
import { LinkButton } from "./components/LinkButton";
import { SOCIAL_LINKS } from "./config/links";

const [spotify, youtube, bandcamp, discord, website] = SOCIAL_LINKS;

export default function App() {
  return (
    <div className="relative min-h-dvh bg-black">
      <Snowfall />

      <div className="relative z-10 mx-auto min-h-dvh max-w-md">
        <HeaderBanner />
        <MarqueeBar />

        <main className="relative px-4 py-8 pb-16">
          <p className="mb-8 text-center text-[10px] tracking-[0.4em] text-white/25">
            — explore —
          </p>

          <div className="flex flex-col gap-8">
            <div className="flex items-start justify-between gap-6">
              <RetroWindow title={spotify!.title} drift="slow" width="sm">
                <LinkButton link={spotify!} />
              </RetroWindow>

              <DriftingIcon label="takumi" symbol="匠" />
            </div>

            <div className="flex items-start justify-between gap-6 pl-2 pt-3">
              <DriftingIcon label="maybe..." symbol="缘分" />
              <RetroWindow title="channels" drift="medium" width="lg">
                <div className="flex flex-col gap-2">
                  <LinkButton link={youtube!} />
                  <LinkButton link={bandcamp!} />
                </div>
              </RetroWindow>
            </div>

            <div className="flex justify-start">
              <RetroWindow title="coming soon" drift="slow" width="md">
                <div className="flex flex-col gap-2">
                  <LinkButton link={discord!} />
                  <LinkButton link={website!} />
                </div>
              </RetroWindow>
            </div>
          </div>

          <footer className="mt-12 border-t border-dashed border-white/20 pt-4 text-center text-[10px] text-white/20">
            <p>last updated: 6/18/26</p>
            <p className="mt-1">ig: takumisf</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
