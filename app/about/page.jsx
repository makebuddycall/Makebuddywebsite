import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/Icons";
import { BuddyMark } from "@/components/Logo";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import ScrollWords from "@/components/motion/ScrollWords";
import CountUp from "@/components/motion/CountUp";

export const metadata = {
  title: "About Us — Make Buddy",
  description:
    "Make Buddy is a social wellness app on a mission to make meaningful connection easy — through chat, voice calls, video calls and kind communities.",
};

const built = [
  { icon: "chat", title: "Chat", text: "Private one-to-one and small-group chats, with voice notes and photos — designed for real conversation, not endless scrolling." },
  { icon: "phone", title: "Voice calls", text: "Sometimes you just need to hear a friendly voice. Crystal-clear calls with gentle conversation starters." },
  { icon: "video", title: "Video calls", text: "See the faces that make you smile — one-to-one or with your whole circle, wherever they are." },
  { icon: "users", title: "Make connections", text: "Thoughtful buddy matching and wellness circles help you meet kind people who share your interests." },
  { icon: "heart", title: "Wellness tools", text: "Mood check-ins, reach-out reminders and weekly insights that help you notice what — and who — lifts you up." },
];

const values = [
  { icon: "heart", title: "Kindness first", text: "Every feature is designed to encourage warmth, respect and support — and to make unkindness hard." },
  { icon: "lock", title: "Private by design", text: "Your chats, calls and check-ins are personal. We never sell your data, and we never will." },
  { icon: "spark", title: "Wellbeing over screen time", text: "We measure success by how connected you feel — not by how long you stay in the app." },
  { icon: "globe", title: "Made for everyone", text: "Whoever you are and wherever you live, there's a place for you here. Inclusive, accessible, welcoming." },
];

const stats = [
  { to: 1, suffix: "M+", label: "Calls connected" },
  { to: 15, suffix: "k+", label: "Daily buddies" },
  { to: 120, suffix: "+", label: "Countries" },
  { to: 4.2, decimals: 1, suffix: "★", label: "Average rating" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar dark />
      <main className="overflow-x-clip">
        {/* ---------- Full-screen hero ---------- */}
        <header className="relative isolate flex min-h-svh flex-col overflow-hidden bg-buddy-radial text-white">
          <div className="bg-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,#000_20%,transparent_70%)]" />
          <div className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-[30rem] w-[30rem] rounded-full bg-petal/10 blur-[120px]" />

          <div className="container-x flex flex-1 flex-col justify-center pb-16 pt-28 sm:pt-32">
            <div className="grid items-center gap-14 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Reveal variant="fade">
                  <nav className="text-xs text-white/55" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-white">Home</Link>
                    <span className="mx-1.5">/</span>About Us
                  </nav>
                </Reveal>
                <Reveal variant="fade" delay={0.1} className="kicker mt-8 text-white/60">About Make Buddy</Reveal>
                <Reveal
                  as="h1"
                  className="h-display mt-5 text-[13vw] leading-[0.92] sm:text-7xl xl:text-8xl 2xl:text-[8.5rem]"
                  lines={[
                    "No one should",
                    <>
                      feel <span className="serif-accent text-lime-neon">alone.</span>
                    </>,
                  ]}
                />
                <Reveal variant="up" delay={0.35}>
                  <p className="mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                    Make Buddy is a social wellness app on a mission to make meaningful connection easy. We bring together chat,
                    voice calls, video calls and kind communities — so staying close to people feels natural, safe and good
                    for you.
                  </p>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <a href="#story" className="btn-lime">
                      Our story <Icon name="arrowDown" className="h-4 w-4" />
                    </a>
                    <Link href="/contact" className="btn-ghost text-white ring-white/20 hover:bg-white/10">
                      Get in touch
                    </Link>
                  </div>
                </Reveal>
              </div>

              {/* Mascot composition */}
              <div className="relative mx-auto w-full max-w-md lg:col-span-5">
                <Reveal variant="scale" delay={0.3} className="relative aspect-square">
                  <div className="absolute inset-[12%] rounded-full bg-lime-neon/25 blur-3xl" />
                  <div className="absolute inset-[18%] grid place-items-center rounded-[3rem] bg-lime-gradient shadow-glow">
                    <BuddyMark className="h-[62%] w-[62%] animate-float" />
                  </div>
                  {[
                    ["chat", "Chat", "left-0 top-[12%]", 0.18],
                    ["phone", "Voice calls", "right-0 top-[22%]", -0.12],
                    ["video", "Video calls", "left-[2%] bottom-[18%]", -0.2],
                    ["users", "Connections", "right-[4%] bottom-[8%]", 0.14],
                  ].map(([icon, label, pos, speed]) => (
                    <Parallax key={label} speed={speed} className={`absolute ${pos}`}>
                      <span className="inline-flex items-center gap-2 rounded-full bg-ink/80 px-4 py-2.5 text-sm font-medium text-white shadow-2xl ring-1 ring-white/10 backdrop-blur-xl">
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-lime-neon text-ink">
                          <Icon name={icon} className="h-3.5 w-3.5" strokeWidth={2} />
                        </span>
                        {label}
                      </span>
                    </Parallax>
                  ))}
                </Reveal>
              </div>
            </div>
          </div>
        </header>

        {/* ---------- Story ---------- */}
        <section id="story" className="scroll-mt-0 bg-paper py-24 sm:py-32 lg:py-40">
          <div className="container-x">
            <div className="grid gap-10 lg:grid-cols-12">
              <Reveal variant="fade" className="lg:col-span-3">
                <p className="kicker text-ink/50">(01) Our story</p>
              </Reveal>
              <div className="lg:col-span-9">
                <ScrollWords
                  className="h-display text-[2rem] leading-[1.08] sm:text-5xl lg:text-6xl"
                  text="We're more connected than ever — yet so many of us feel *lonely.* Make Buddy began with a simple belief: technology should bring people *closer,* not keep them scrolling."
                />
                <div className="mt-16 grid gap-8 text-base leading-relaxed text-ink/65 sm:text-lg md:grid-cols-2 md:gap-12">
                  <Reveal variant="up">
                    <p>
                      Most social apps are built to capture attention. Feeds, likes and endless content keep us busy — but rarely
                      leave us feeling understood. We wanted something different: a calm place built around the conversations
                      that actually matter.
                    </p>
                  </Reveal>
                  <Reveal variant="up" delay={0.1}>
                    <p>
                      So we built Make Buddy — a wellness app where you can chat, voice call and video call the people you care
                      about, meet new friends who get you, and check in on how you&apos;re feeling along the way. Small moments
                      of connection, every day, add up to a happier, healthier you.
                    </p>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Mission & vision ---------- */}
        <section className="bg-paper pb-24 sm:pb-32">
          <div className="container-x grid gap-4 lg:grid-cols-2">
            <Reveal variant="up">
              <article className="relative flex h-full min-h-[22rem] flex-col overflow-hidden rounded-[2rem] bg-ink p-8 text-white sm:p-12">
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-lime-neon/20 blur-3xl" />
                <p className="kicker relative text-white/50">Our mission</p>
                <h2 className="h-display relative mt-auto pt-16 text-3xl leading-tight sm:text-4xl xl:text-5xl">
                  To make meaningful connection <span className="serif-accent text-lime-neon">effortless</span> — for everyone,
                  everywhere.
                </h2>
              </article>
            </Reveal>
            <Reveal variant="up" delay={0.1}>
              <article className="relative flex h-full min-h-[22rem] flex-col overflow-hidden rounded-[2rem] bg-lime-gradient p-8 text-ink sm:p-12">
                <BuddyMark className="absolute right-6 top-6 h-20 w-20 rotate-[8deg] sm:right-10 sm:top-10 sm:h-28 sm:w-28" />
                <p className="kicker relative text-ink/60">Our vision</p>
                <h2 className="h-display relative mt-auto max-w-lg pt-16 text-3xl leading-tight sm:text-4xl xl:text-5xl">
                  A world where nobody has to feel <span className="serif-accent">alone.</span>
                </h2>
              </article>
            </Reveal>
          </div>
        </section>

        {/* ---------- What we've built ---------- */}
        <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[56rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-neon/10 blur-[140px]" />
          <div className="container-x relative">
            <div className="grid items-end gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Reveal variant="fade" className="kicker text-white/50">(02) What we&apos;ve built</Reveal>
                <Reveal
                  as="h2"
                  className="h-display mt-6 text-5xl leading-[0.95] sm:text-6xl lg:text-7xl"
                  lines={[
                    "One app for",
                    <>
                      <span className="serif-accent text-lime-neon">real</span> connection.
                    </>,
                  ]}
                />
              </div>
              <Reveal variant="up" delay={0.2} className="lg:col-span-5 lg:pb-3">
                <p className="max-w-md text-white/55 lg:ml-auto">
                  Everything you need to stay close to the people who matter — wrapped in wellness tools that help you feel
                  your best.
                </p>
              </Reveal>
            </div>

            <ul className="mt-16 border-t border-white/10">
              {built.map((b, i) => (
                <Reveal as="li" key={b.title} variant="up" delay={i * 0.05} className="border-b border-white/10">
                  <div className="group grid items-center gap-4 py-8 sm:grid-cols-12 sm:gap-8 sm:py-10">
                    <span className="h-display text-sm text-white/35 sm:col-span-1">0{i + 1}</span>
                    <div className="flex items-center gap-4 sm:col-span-5">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/[0.06] text-lime-neon ring-1 ring-white/10 transition duration-500 group-hover:bg-lime-neon group-hover:text-ink">
                        <Icon name={b.icon} className="h-5 w-5" />
                      </span>
                      <h3 className="h-display text-3xl transition-transform duration-500 ease-premium group-hover:translate-x-2 sm:text-4xl lg:text-5xl">
                        {b.title}
                      </h3>
                    </div>
                    <p className="max-w-lg text-white/55 sm:col-span-6 sm:justify-self-end">{b.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- Values ---------- */}
        <section className="bg-white py-24 sm:py-32">
          <div className="container-x">
            <div className="grid gap-8 lg:grid-cols-12">
              <Reveal variant="fade" className="lg:col-span-3">
                <p className="kicker text-ink/50">(03) What we value</p>
              </Reveal>
              <Reveal
                as="h2"
                className="h-display text-5xl leading-[0.95] sm:text-6xl lg:col-span-9 lg:text-7xl"
                lines={[
                  "The principles",
                  <>
                    we <span className="serif-accent text-olive">live by.</span>
                  </>,
                ]}
              />
            </div>

            <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-ink/10 ring-1 ring-ink/10 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => (
                <Reveal key={v.title} variant="up" delay={i * 0.08} className="bg-white">
                  <article className="group flex h-full flex-col p-8 transition-colors duration-500 hover:bg-paper sm:p-10">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-lime-soft text-olive transition duration-500 group-hover:bg-lime-neon group-hover:text-ink">
                      <Icon name={v.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="h-display mt-12 text-2xl">{v.title}</h3>
                    <p className="mt-3 leading-relaxed text-ink/60">{v.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Impact ---------- */}
        <section className="bg-paper py-24 sm:py-32">
          <div className="container-x">
            <Reveal variant="fade" className="kicker text-ink/50">(04) Our impact so far</Reveal>
            <dl className="mt-12 grid grid-cols-2 gap-px border-y border-ink/10 bg-ink/10 lg:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} variant="up" delay={i * 0.08} className="flex flex-col-reverse justify-end bg-paper px-4 py-10 sm:px-6 lg:py-14 lg:first:pl-0">
                  <dt className="mt-3 text-sm text-ink/55">{s.label}</dt>
                  <dd className="h-display text-5xl sm:text-6xl xl:text-7xl">
                    <CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} />
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        {/* ---------- CTA ---------- */}
        <section className="relative isolate overflow-hidden bg-buddy-radial text-white">
          <div className="bg-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,#000_10%,transparent_70%)]" />
          <div className="container-x flex min-h-[80svh] flex-col items-center justify-center py-24 text-center">
            <Reveal variant="scale">
              <BuddyMark className="mx-auto h-16 w-16" />
            </Reveal>
            <Reveal
              as="h2"
              className="h-display mt-8 text-5xl leading-[0.95] sm:text-7xl lg:text-8xl"
              lines={[
                "Let's build",
                <>
                  something <span className="serif-accent text-lime-neon">kind.</span>
                </>,
              ]}
            />
            <Reveal variant="up" delay={0.25}>
              <p className="mx-auto mt-7 max-w-lg text-white/70">
                Whether you&apos;re a future buddy, a wellness partner or just curious — we&apos;d love to hear from you.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link href="/#download" className="btn-lime group">
                  Download Make Buddy
                  <span className="btn-arrow bg-ink text-lime-neon">
                    <Icon name="arrowUpRight" className="h-3.5 w-3.5" strokeWidth={2.2} />
                  </span>
                </Link>
                <Link href="/contact" className="btn-ghost text-white ring-white/20 hover:bg-white/10">
                  Contact us
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
