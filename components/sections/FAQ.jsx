"use client";

import { useState } from "react";
import Reveal from "../motion/Reveal";
import Icon from "../Icons";

const faqs = [
  {
    q: "What can I do on Make Buddy?",
    a: "Chat one-to-one or in small groups, make voice calls and video calls, meet new people through buddy matching, and use wellness tools like daily mood check-ins, reach-out reminders and weekly insights — all in one app.",
  },
  {
    q: "Is Make Buddy a wellness app?",
    a: "Yes. Make Buddy is a social wellness app — it's designed to support your emotional wellbeing by helping you stay connected. Strong relationships are one of the biggest drivers of how we feel, so every feature is built to make connecting easier and kinder.",
  },
  {
    q: "Is Make Buddy free to use?",
    a: "Yes — Make Buddy is free to download, and chat, voice calls, video calls, making connections and mood check-ins are all included. Optional in-app purchases unlock extras, and you'll always see the price in the app before you buy.",
  },
  {
    q: "Is Make Buddy a replacement for therapy?",
    a: "No. Make Buddy supports social wellbeing by helping you stay connected, but it is not a medical or mental-health service. If you are in crisis, please contact your local emergency number or a crisis helpline.",
  },
  {
    q: "How do you keep me safe?",
    a: "One-to-one messages are end-to-end encrypted, profiles can be verified, and you can block or report anyone in two taps. Our moderation team reviews reports around the clock.",
  },
  {
    q: "Who can use Make Buddy?",
    a: "Anyone aged 13 and over (or the minimum age in your country). Users under 18 get extra privacy protections by default.",
  },
  {
    q: "Can I delete my account anytime?",
    a: "Yes. You can delete your account and data from Settings at any time. If you have any in-app purchases, you can manage or cancel them from your App Store or Google Play account settings.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative scroll-mt-0 bg-paper py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal variant="fade" className="kicker text-ink/50">(06) FAQ</Reveal>
            <Reveal
              as="h2"
              className="h-display mt-6 text-5xl leading-[0.95] sm:text-6xl"
              lines={[
                "Questions?",
                <>
                  We&apos;ve got <span className="serif-accent text-olive">answers.</span>
                </>,
              ]}
            />
            <Reveal variant="up" delay={0.2}>
              <p className="mt-6 max-w-sm text-ink/55">
                Can&apos;t find what you&apos;re looking for?{" "}
                <a href="mailto:support@makebuddy.app" className="font-semibold text-ink underline decoration-lime-deep decoration-2 underline-offset-4">
                  Talk to our team
                </a>
                .
              </p>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="border-t border-ink/10">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal as="li" key={f.q} variant="up" delay={i * 0.06} className="border-b border-ink/10">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-6 py-7 text-left"
                  >
                    <span className="h-display text-xl sm:text-2xl">{f.q}</span>
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition duration-500 ease-premium ${
                        isOpen ? "rotate-45 bg-ink text-lime-neon" : "bg-white text-ink ring-1 ring-ink/10 group-hover:bg-lime-neon"
                      }`}
                    >
                      <Icon name="plus" className="h-4 w-4" strokeWidth={2} />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-premium ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-8 text-[15px] leading-relaxed text-ink/60">{f.a}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
