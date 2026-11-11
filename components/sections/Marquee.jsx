import { BuddyMark } from "../Logo";

const items = ["Chat", "Voice calls", "Video calls", "Make connections", "Mood check-ins", "Wellness circles"];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <section aria-label="Make Buddy highlights" className="relative overflow-hidden bg-lime-neon py-5 text-ink sm:py-7">
      <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
        {row.map((t, i) => (
          <span key={i} className="flex items-center">
            <span className={`h-display whitespace-nowrap px-6 text-3xl sm:px-10 sm:text-5xl ${i % 2 ? "serif-accent" : ""}`}>
              {t}
            </span>
            <BuddyMark className="h-8 w-8 shrink-0 sm:h-11 sm:w-11" smile="#D4FF1F" />
          </span>
        ))}
      </div>
    </section>
  );
}
