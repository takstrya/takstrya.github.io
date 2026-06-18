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

          <div className="relative flex flex-col gap-8">
            <div className="flex items-start justify-between gap-6">
              <RetroWindow
                title={spotify!.title}
                drift="slow"
                driftDelay={0.6}
                width="sm"
              >
                <LinkButton link={spotify!} />
              </RetroWindow>

              <DriftingIcon
                label="takumi"
                symbol="匠"
                drift="fast"
                driftDelay={0}
              />
            </div>

            <div className="flex items-start justify-between gap-6 pl-2 pt-3">
              <DriftingIcon
                label="me, kinda"
                image="/profile.png"
                imageAlt="takumi"
                drift="slow"
                driftDelay={4.8}
              />
              <RetroWindow
                title="channels"
                drift="medium"
                driftDelay={2.1}
                width="lg"
              >
                <div className="flex flex-col gap-2">
                  <LinkButton link={youtube!} />
                  <LinkButton link={bandcamp!} />
                </div>
              </RetroWindow>
            </div>

            <div className="flex items-start justify-between gap-6">
              <RetroWindow
                title="coming soon"
                drift="slow"
                driftDelay={3.5}
                width="md"
              >
                <div className="flex flex-col gap-2">
                  <LinkButton link={discord!} />
                  <LinkButton link={website!} />
                </div>
              </RetroWindow>

              <DriftingIcon
                label="maybe..."
                symbol="缘分"
                drift="medium"
                driftDelay={2.4}
                className="mr-4"
              />
            </div>
          </div>

          <footer className="relative z-20 mt-12 border-t border-dashed border-white/20 pt-4 text-center text-[10px] text-white/20">
            <p>last updated: 6/18/26</p>
            <p className="mt-1">ig: takumisf</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
