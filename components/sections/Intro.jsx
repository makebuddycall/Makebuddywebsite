import ScrollWords from "../motion/ScrollWords";
import CountUp from "../motion/CountUp";
import Reveal from "../motion/Reveal";

const stats = [
  { to: 1, suffix: "M+", label: "Calls connected" },
  { to: 42.3, decimals: 1, suffix: "k", label: "App Store ratings" },
  { to: 120, suffix: "+", label: "Countries" },
  { to: 87, suffix: "%", label: "Feel less lonely in 30 days" },
];

export default function Intro() {
  return (
    <section className="relative bg-paper py-24 sm:py-32 lg:py-44">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal variant="fade" className="lg:col-span-3">
            <p className="kicker text-ink/50">(01) Why Make Buddy</p>
          </Reveal>
          <div className="lg:col-span-9">
            <ScrollWords
              className="h-display text-[2rem] leading-[1.08] sm:text-5xl lg:text-6xl 2xl:text-7xl"
              text="Loneliness quietly affects your health. Connection helps heal it. Make Buddy is a wellness app that turns small moments — a chat, a voice call, a video call — into *friendships* that help you feel *better.*"
            />
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-px border-y border-ink/10 bg-ink/10 sm:mt-28 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} variant="up" delay={i * 0.08} className="flex flex-col-reverse justify-end bg-paper px-4 py-8 sm:px-6 lg:py-12 lg:first:pl-0">
              <dt className="mt-3 text-sm text-ink/55">{s.label}</dt>
              <dd className="h-display text-5xl sm:text-6xl xl:text-7xl">
                <CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
