"use client";

import { useEffect, useRef, useState } from "react";
import PhoneFrame from "../PhoneFrame";
import { SignupScreen, ChatScreen, CircleScreen, UnwindScreen } from "../screens/Screens";
import Reveal from "../motion/Reveal";

const steps = [
  {
    title: "Sign up & meet your buddies",
    text: "Create your free account in under a minute and pick what you're into. Make Buddy introduces you to kind people who share your interests — tap connect, and you've made your first buddies.",
    screen: <SignupScreen />,
  },
  {
    title: "Reach out, effortlessly",
    text: "Friendly nudges remind you when it's been a while. One tap to chat, voice call or video call — with conversation starters so there's never awkward small talk.",
    screen: <ChatScreen />,
  },
  {
    title: "Find your circle",
    text: "Join small, moderated groups around the things you love — from Sunday hikes to late-night book clubs.",
    screen: <CircleScreen />,
  },
  {
    title: "Unwind & have fun together",
    text: "Play games, listen to music, host watch parties and join calming breathing sessions with your buddies — because laughter and calm moments with friends are good for your mind.",
    screen: <UnwindScreen />,
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.index));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="how" className="relative scroll-mt-0 bg-paper py-24 sm:py-32">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal variant="fade" className="lg:col-span-3">
            <p className="kicker text-ink/50">(04) How it works</p>
          </Reveal>
          <Reveal
            as="h2"
            className="h-display text-5xl leading-[0.95] sm:text-6xl lg:col-span-9 lg:text-7xl"
            lines={[
              <>
                Wellbeing, <span className="serif-accent text-olive">made simple</span>
              </>,
              "for everyone.",
            ]}
          />
        </div>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-8">
          {/* Sticky phone (desktop) */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-0 flex h-svh items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-16 -z-10 rounded-full bg-lime-neon/40 blur-[90px]" />
                <PhoneFrame className="w-[min(300px,calc((100svh-160px)*0.47))]">
                  <div className="relative h-full">
                    {steps.map((s, i) => (
                      <div
                        key={s.title}
                        className={`absolute inset-0 transition-all duration-700 ease-premium ${
                          i === active ? "translate-y-0 opacity-100" : i < active ? "-translate-y-6 opacity-0" : "translate-y-6 opacity-0"
                        }`}
                        aria-hidden={i !== active}
                      >
                        {s.screen}
                      </div>
                    ))}
                  </div>
                </PhoneFrame>
                {/* progress dots */}
                <div className="absolute -right-10 top-1/2 flex -translate-y-1/2 flex-col gap-2">
                  {steps.map((s, i) => (
                    <span
                      key={s.title}
                      className={`w-1.5 rounded-full transition-all duration-500 ${i === active ? "h-8 bg-ink" : "h-1.5 bg-ink/20"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <ol className="lg:col-span-6 lg:col-start-7">
            {steps.map((s, i) => (
              <li
                key={s.title}
                ref={(el) => (refs.current[i] = el)}
                data-index={i}
                className="flex flex-col justify-center border-t border-ink/10 py-10 lg:min-h-[80svh] lg:border-0 lg:py-0"
              >
                <div className={`transition-all duration-700 ease-premium ${i === active ? "lg:opacity-100" : "lg:opacity-25"}`}>
                  <span className="h-display text-sm text-olive">0{i + 1} / 0{steps.length}</span>
                  <h3 className="h-display mt-4 text-3xl sm:text-4xl lg:text-5xl">{s.title}</h3>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-ink/60 sm:text-lg">{s.text}</p>
                </div>
                {/* phone inline on mobile/tablet */}
                <Reveal variant="up" className="mt-10 flex justify-center lg:hidden">
                  <PhoneFrame className="w-[230px] sm:w-[260px]">{s.screen}</PhoneFrame>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
