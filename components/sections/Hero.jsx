import Link from "next/link";
import PhoneFrame, { Avatar } from "../PhoneFrame";
import { HomeScreen } from "../screens/Screens";
import Reveal from "../motion/Reveal";
import Parallax from "../motion/Parallax";
import Icon, { Star } from "../Icons";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-svh flex-col overflow-hidden bg-buddy-radial text-white">
      {/* subtle grid + glows */}
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,#000_20%,transparent_70%)]" />
      <div className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-[30rem] w-[30rem] rounded-full bg-petal/10 blur-[120px]" />

      <div className="container-x flex flex-1 flex-col pt-28 sm:pt-32">
        <div className="grid flex-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Copy */}
          <div className="lg:col-span-7">
            <Reveal variant="blur" className="kicker text-white/60">
              The social wellness app
            </Reveal>

            <Reveal
              as="h1"
              className="h-display mt-6 text-[13vw] leading-[0.92] sm:text-7xl lg:text-[5.6rem] xl:text-8xl 2xl:text-[8.5rem]"
              lines={[
                "Stay close to",
                <>
                  the people <span className="serif-accent text-lime-neon">who</span>
                </>,
                <span key="m" className="serif-accent text-lime-neon">matter.</span>,
              ]}
            />

            <Reveal variant="up" delay={0.45} className="mt-8 max-w-xl">
              <p className="text-base leading-relaxed text-white/65 sm:text-lg">
                Make Buddy is a wellness app for your social health. Chat, voice call and video call with friends, make new
                connections, and check in on how you feel — all in one calm, safe space.
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.52} className="mt-6 flex flex-wrap gap-2">
              {[
                ["chat", "Chat"],
                ["phone", "Voice calls"],
                ["video", "Video calls"],
                ["users", "Make connections"],
                ["heart", "Mood check-ins"],
              ].map(([icon, label]) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3.5 py-2 text-[13px] font-medium text-white/85 ring-1 ring-inset ring-white/10 backdrop-blur"
                >
                  <Icon name={icon} className="h-3.5 w-3.5 text-lime-neon" strokeWidth={2} />
                  {label}
                </span>
              ))}
            </Reveal>

            <Reveal variant="up" delay={0.6} className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="#download" className="btn-lime group">
                Download free
                <span className="btn-arrow bg-ink text-lime-neon">
                  <Icon name="arrowUpRight" className="h-3.5 w-3.5" strokeWidth={2.2} />
                </span>
              </Link>
              <Link href="#how" className="btn-ghost text-white ring-white/20 hover:bg-white/10">
                How it works
              </Link>
            </Reveal>
          </div>

          {/* Phone + floating cards */}
          <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
            <Reveal variant="scale" delay={0.3} className="relative">
              <Parallax speed={0.08}>
                <PhoneFrame className="w-[240px] sm:w-[280px] lg:w-[min(310px,calc((100svh-190px)*0.47))]">
                  <HomeScreen />
                </PhoneFrame>
              </Parallax>

              <Parallax speed={0.22} className="absolute -left-24 top-[44%] hidden sm:block xl:-left-40">
                <div className="w-48 rounded-2xl bg-ink/70 p-4 ring-1 ring-white/10 backdrop-blur-xl">
                  <p className="text-[11px] text-white/50">Calls this week</p>
                  <div className="mt-1 flex items-end justify-between">
                    <p className="h-display text-3xl">1,235</p>
                    <span className="text-[11px] font-semibold text-lime-neon">+18%</span>
                  </div>
                  <svg viewBox="0 0 100 28" className="mt-2 h-7 w-full">
                    <defs>
                      <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" stopColor="#D4FF1F" stopOpacity=".35" />
                        <stop offset="1" stopColor="#D4FF1F" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0 22 L15 17 L30 19 L45 10 L60 14 L75 5 L100 7 V28 H0Z" fill="url(#spark)" />
                    <path d="M0 22 L15 17 L30 19 L45 10 L60 14 L75 5 L100 7" fill="none" stroke="#D4FF1F" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
              </Parallax>

              <Parallax speed={-0.12} className="absolute -right-6 bottom-24 hidden sm:block xl:-right-14">
                <div className="flex items-center gap-3 rounded-2xl bg-white p-3 pr-4 text-ink shadow-2xl">
                  <span className="relative">
                    <Avatar name="Ava Lee" color="bg-petal" className="h-10 w-10 text-xs" />
                    <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-lime-neon ring-2 ring-white" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-[13px] font-semibold">Ava is calling…</p>
                    <p className="text-[11px] text-ink/50">42-day streak</p>
                  </div>
                  <span className="ml-2 grid h-8 w-8 place-items-center rounded-full bg-lime-neon">
                    <Icon name="phone" className="h-4 w-4" />
                  </span>
                </div>
              </Parallax>
            </Reveal>
          </div>
        </div>

        {/* bottom meta row */}
        <Reveal
          variant="fade"
          delay={0.9}
          className="mt-14 grid grid-cols-2 items-center gap-6 border-t border-white/10 py-6 text-sm text-white/60 sm:grid-cols-3 lg:mt-10"
        >
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5 text-lime-neon">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3.5 w-3.5" />
              ))}
            </div>
            <span>
              <span className="font-semibold text-white">4.2</span> · 42.3k ratings
            </span>
          </div>
          <div className="hidden items-center justify-center gap-2 sm:flex">
            <span className="relative grid h-9 w-5 place-items-start justify-center overflow-hidden rounded-full ring-1 ring-white/30">
              <span className="mt-1.5 h-2 w-[3px] animate-scrollcue rounded-full bg-white/80" />
            </span>
            <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          </div>
          <div className="flex items-center justify-end gap-3">
            <div className="flex -space-x-2">
              {[
                ["Ava Lee", "bg-petal"],
                ["Noah Kim", "bg-sun"],
                ["Mia Ross", "bg-lime"],
              ].map(([n, c]) => (
                <Avatar key={n} name={n} color={c} className="h-8 w-8 text-[10px] ring-2 ring-[#2a2d22]" />
              ))}
            </div>
            <span className="hidden sm:inline">15k+ daily buddies</span>
            <span className="sm:hidden">15k+ daily</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
