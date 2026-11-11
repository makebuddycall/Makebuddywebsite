import Reveal from "../motion/Reveal";
import Icon from "../Icons";
import { BuddyMark } from "../Logo";

const pillars = [
  {
    icon: "users",
    title: "Feel less alone",
    text: "Regular chats and calls with people who get you help ease loneliness and isolation — one conversation at a time.",
  },
  {
    icon: "heart",
    title: "Lift your mood",
    text: "Mood check-ins show how connection affects how you feel, and gently nudge you to reach out on harder days.",
  },
  {
    icon: "shield",
    title: "Build your support circle",
    text: "Grow a small, trusted network of buddies and wellness circles you can lean on — and be there for in return.",
  },
];

const toolkit = [
  "Daily mood check-ins",
  "Reach-out reminders",
  "Gratitude prompts",
  "Weekly wellbeing insights",
  "Quiet hours & calm mode",
  "Supportive wellness circles",
  "Games & calm sessions with buddies",
];

export default function Wellness() {
  return (
    <section id="wellness" className="relative scroll-mt-0 overflow-hidden bg-buddy-soft py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-40 top-20 h-[30rem] w-[30rem] rounded-full bg-lime-neon/30 blur-[120px]" />
      <div className="container-x relative">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal variant="fade" className="kicker text-ink/50">(03) A wellness app</Reveal>
            <Reveal
              as="h2"
              className="h-display mt-6 text-5xl leading-[0.95] sm:text-6xl lg:text-7xl"
              lines={[
                "Connection is",
                <span key="s" className="serif-accent text-olive">self-care.</span>,
              ]}
            />
          </div>
          <Reveal variant="up" delay={0.2} className="lg:col-span-5 lg:pb-3">
            <p className="max-w-md text-base leading-relaxed text-ink/60 lg:ml-auto">
              Feeling connected is one of the strongest foundations of wellbeing. Make Buddy is built around that idea —
              every chat, voice call and video call is a small act of care for your mind.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3 lg:mt-20">
          {pillars.map((p, i) => (
            <Reveal key={p.title} variant="up" delay={i * 0.1}>
              <article className="group flex h-full flex-col rounded-[2rem] bg-white/80 p-8 ring-1 ring-inset ring-ink/5 backdrop-blur transition duration-500 ease-premium hover:-translate-y-1 hover:bg-white sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-lime-neon transition duration-500 group-hover:bg-lime-neon group-hover:text-ink">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <span className="h-display text-5xl text-ink/10">0{i + 1}</span>
                </div>
                <h3 className="h-display mt-10 text-2xl sm:text-3xl">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/60">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" className="mt-4">
          <div className="relative grid gap-8 overflow-hidden rounded-[2rem] bg-ink p-8 text-white sm:p-10 lg:grid-cols-12 lg:items-center">
            <div className="pointer-events-none absolute -bottom-24 -left-10 h-60 w-60 rounded-full bg-lime-neon/20 blur-3xl" />
            <div className="relative flex items-center gap-5 lg:col-span-4">
              <BuddyMark className="h-14 w-14 shrink-0" />
              <div>
                <h3 className="h-display text-2xl">Your wellness toolkit</h3>
                <p className="mt-1 text-sm text-white/55">Built into every conversation.</p>
              </div>
            </div>
            <ul className="relative flex flex-wrap gap-2 lg:col-span-8 lg:justify-end">
              {toolkit.map((t) => (
                <li key={t} className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-4 py-2.5 text-sm text-white/85 ring-1 ring-white/10">
                  <Icon name="check" className="h-3.5 w-3.5 text-lime-neon" strokeWidth={2.4} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink/50">
          Make Buddy supports your social and emotional wellbeing. It is not a medical service and does not replace
          professional care. If you are in crisis, please contact your local emergency number or a crisis helpline.
        </p>
      </div>
    </section>
  );
}
