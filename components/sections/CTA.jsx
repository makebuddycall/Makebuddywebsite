import PhoneFrame from "../PhoneFrame";
import { ChatScreen } from "../screens/Screens";
import StoreButtons from "../StoreButtons";
import Reveal from "../motion/Reveal";
import Parallax from "../motion/Parallax";

export default function CTA() {
  return (
    <section id="download" className="relative isolate scroll-mt-0 overflow-hidden bg-buddy-radial text-white">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,#000_10%,transparent_70%)]" />

      <div className="container-x grid min-h-svh items-center gap-12 pt-24 lg:grid-cols-12 lg:pt-0">
        <div className="lg:col-span-7">
          <Reveal variant="fade" className="kicker text-white/60">Free on iOS &amp; Android</Reveal>
          <Reveal
            as="h2"
            className="h-display mt-6 text-[14vw] leading-[0.9] sm:text-7xl lg:text-8xl 2xl:text-[9rem]"
            lines={[
              "Your people",
              <>
                are <span className="serif-accent text-lime-neon">waiting.</span>
              </>,
            ]}
          />
          <Reveal variant="up" delay={0.3}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
              Chat, voice call, video call and make meaningful connections — the wellness app that helps you feel closer to the people who matter. Free to download.
            </p>
            <StoreButtons dark={false} className="mt-10" />
          </Reveal>
        </div>

        <div className="flex justify-center self-end lg:col-span-5">
          <Parallax speed={0.18}>
            <div className="translate-y-16 lg:translate-y-24">
              <PhoneFrame className="w-[240px] sm:w-[280px] lg:w-[310px]">
                <ChatScreen />
              </PhoneFrame>
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
}
