import PhoneFrame, { Avatar } from "../PhoneFrame";
import { CallScreen } from "../screens/Screens";
import Reveal from "../motion/Reveal";
import Parallax from "../motion/Parallax";
import Spotlight from "../motion/Spotlight";
import Icon, { Face } from "../Icons";

const card = "rounded-[2rem] bg-white/[0.03] ring-1 ring-inset ring-white/10 transition duration-500 hover:ring-white/20";

export default function Features() {
  return (
    <section id="features" className="relative scroll-mt-0 overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[60rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-neon/10 blur-[140px]" />

      <div className="container-x relative">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal variant="fade" className="kicker text-white/50">(02) Features</Reveal>
            <Reveal
              as="h2"
              className="h-display mt-6 text-5xl leading-[0.95] sm:text-6xl lg:text-7xl"
              lines={[
                "Built for friendship.",
                <>
                  Designed for <span className="serif-accent text-lime-neon">wellbeing.</span>
                </>,
              ]}
            />
          </div>
          <Reveal variant="up" delay={0.2} className="lg:col-span-5 lg:pb-3">
            <p className="max-w-md text-base leading-relaxed text-white/55 lg:ml-auto">
              Chat, voice calls, video calls and new connections — wrapped in wellness tools that help you feel good. No
              endless feeds, no noise.
            </p>
          </Reveal>
        </div>

        {/* Bento grid */}
        <div className="mt-16 grid gap-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[auto_auto]">
          {/* Calls — large */}
          <Reveal variant="up" className="md:col-span-2 lg:row-span-2">
            <Spotlight className={`${card} flex h-full min-h-[34rem] flex-col p-7 sm:p-9`}>
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="h-display text-2xl sm:text-3xl">Voice &amp; video calls</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">
                    Hear a friendly voice or see a familiar face. Crystal-clear one-to-one and group calls, with gentle
                    conversation starters when you need them.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      ["phone", "Voice call"],
                      ["video", "Video call"],
                      ["users", "Group calls"],
                    ].map(([icon, label]) => (
                      <span key={label} className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-white/75 ring-1 ring-white/10">
                        <Icon name={icon} className="h-3.5 w-3.5 text-lime-neon" /> {label}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-lime-neon text-ink">
                  <Icon name="video" className="h-5 w-5" />
                </span>
              </div>
              <div className="relative -mb-9 mt-10 flex flex-1 items-end justify-center overflow-hidden sm:-mb-9">
                <Parallax speed={0.1}>
                  <div className="translate-y-24">
                    <PhoneFrame className="w-[230px] sm:w-[260px]">
                      <CallScreen />
                    </PhoneFrame>
                  </div>
                </Parallax>
              </div>
            </Spotlight>
          </Reveal>

          {/* Matching */}
          <Reveal variant="up" delay={0.1} className="md:col-span-2">
            <Spotlight className={`${card} flex h-full flex-col justify-between gap-8 p-7 sm:flex-row sm:items-center sm:p-9`}>
              <div className="max-w-xs">
                <h3 className="h-display text-2xl">Make new connections</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  Smart buddy matching introduces you to kind people who share your interests, values and favourite time to
                  talk.
                </p>
              </div>
              <div className="relative flex flex-wrap gap-2 sm:max-w-[15rem] sm:justify-end">
                {["Hiking", "Books", "Indie music", "Cooking", "Night owl", "Yoga"].map((t, i) => (
                  <span
                    key={t}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                      i === 0 || i === 3 ? "bg-lime-neon text-ink" : "bg-white/[0.06] text-white/70 ring-1 ring-white/10"
                    }`}
                  >
                    {t}
                  </span>
                ))}
                <div className="mt-3 flex w-full items-center gap-2 sm:justify-end">
                  <Avatar name="Jamie Bell" color="bg-sun" className="h-9 w-9 text-[10px]" />
                  <span className="h-px w-8 bg-gradient-to-r from-sun to-petal" />
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-lime-neon">94% match</span>
                  <span className="h-px w-8 bg-gradient-to-r from-petal to-petal" />
                  <Avatar name="Ava Lee" color="bg-petal" className="h-9 w-9 text-[10px]" />
                </div>
              </div>
            </Spotlight>
          </Reveal>

          {/* Mood */}
          <Reveal variant="up" delay={0.15}>
            <Spotlight className={`${card} flex h-full flex-col p-7`}>
              <h3 className="h-display text-xl">Mood check-ins</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">Two taps a day to track your emotional wellbeing.</p>
              <div className="mt-auto flex justify-between gap-1 pt-8">
                {[0, 1, 2, 3, 4].map((l) => (
                  <span
                    key={l}
                    className={`grid h-11 w-11 place-items-center rounded-full transition ${
                      l === 3 ? "scale-110 bg-lime-neon" : "bg-white/[0.06]"
                    }`}
                  >
                    <Face level={l} className="h-6 w-6" fill={l === 3 ? "#ffffff" : "#F7F6EE"} />
                  </span>
                ))}
              </div>
            </Spotlight>
          </Reveal>

          {/* Chat */}
          <Reveal variant="up" delay={0.2}>
            <Spotlight className={`${card} flex h-full flex-col p-7`}>
              <div className="flex items-start justify-between">
                <h3 className="h-display text-xl">Private chat</h3>
                <Icon name="chat" className="h-5 w-5 text-lime-neon" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/55">1:1 and group chats, voice notes and photos — encrypted.</p>
              <div className="mt-auto space-y-2 pt-6 text-[13px]">
                <p className="w-fit max-w-[85%] rounded-2xl rounded-bl-md bg-white/10 px-3.5 py-2 text-white/85">How are you feeling today?</p>
                <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-lime-neon px-3.5 py-2 text-ink">Better after our call</p>
              </div>
            </Spotlight>
          </Reveal>

          {/* Safety — wide */}
          <Reveal variant="up" delay={0.1} className="md:col-span-2 lg:col-span-4">
            <Spotlight className={`${card} grid gap-8 p-7 sm:p-9 lg:grid-cols-12 lg:items-center`}>
              <div className="flex items-center gap-5 lg:col-span-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white text-ink">
                  <Icon name="shield" className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="h-display text-2xl">Private &amp; safe by design</h3>
                  <p className="mt-1 text-sm text-white/55">Your conversations stay yours. Always.</p>
                </div>
              </div>
              <ul className="grid gap-3 sm:grid-cols-3 lg:col-span-7">
                {[
                  ["lock", "End-to-end encrypted chats"],
                  ["users", "Verified profiles"],
                  ["shield", "24/7 human moderation"],
                ].map(([icon, label]) => (
                  <li key={label} className="flex items-center gap-3 rounded-2xl bg-white/[0.04] px-4 py-3.5 text-sm text-white/80 ring-1 ring-white/5">
                    <Icon name={icon} className="h-4 w-4 shrink-0 text-lime-neon" />
                    {label}
                  </li>
                ))}
              </ul>
            </Spotlight>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
