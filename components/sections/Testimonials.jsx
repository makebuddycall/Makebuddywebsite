import { Avatar } from "../PhoneFrame";
import Reveal from "../motion/Reveal";
import Icon, { Star } from "../Icons";

/* ⚠️ Sample reviews — replace with real user reviews (with permission) before launch. */
const reviews = [
  {
    quote: "After moving for work I barely knew anyone. Make Buddy matched me with people who love Malayalam films — now we do watch parties every Friday.",
    name: "Anjali Menon",
    place: "Kochi, Kerala",
    color: "bg-petal",
  },
  {
    quote: "I video call my parents back home every evening. The check-ins remind me to slow down and actually talk, not just scroll.",
    name: "Karthik Subramanian",
    place: "Chennai, Tamil Nadu",
    color: "bg-sun",
  },
  {
    quote: "Bengaluru traffic leaves me drained. A 5-minute breathing session with my buddy after work has honestly become the best part of my day.",
    name: "Sneha Rao",
    place: "Bengaluru, Karnataka",
    color: "bg-lime",
  },
  {
    quote: "I joined the trivia circle on a whim and ended up with four close friends in Delhi. Voice calls with them feel like chai at a dhaba.",
    name: "Aisha Khan",
    place: "New Delhi",
    color: "bg-sky-300",
  },
  {
    quote: "Clean, calm and it feels safe. The reach-out reminders nudged me to call an old college friend — we talk every week now.",
    name: "Arjun Nair",
    place: "Thiruvananthapuram, Kerala",
    color: "bg-lime",
  },
  {
    quote: "My mood check-ins showed I feel best after talking to my sister. Such a simple thing, but it changed my weekends.",
    name: "Divya Lakshmi",
    place: "Coimbatore, Tamil Nadu",
    color: "bg-petal",
  },
  {
    quote: "The conversation starters saved me from so many awkward first calls. I've made three genuine friends through the hiking circle.",
    name: "Rahul Hegde",
    place: "Mysuru, Karnataka",
    color: "bg-sun",
  },
  {
    quote: "It's the only app on my phone that makes me feel better after using it. Chat, calls, games — all with people I actually care about.",
    name: "Rohan Malhotra",
    place: "Delhi",
    color: "bg-sky-300",
  },
];

const regions = ["Kerala", "Tamil Nadu", "Karnataka", "Delhi"];

function Card({ r }) {
  return (
    <figure className="flex w-[19rem] shrink-0 flex-col rounded-[1.75rem] bg-white/[0.04] p-7 ring-1 ring-inset ring-white/10 sm:w-[24rem]">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5 text-lime-neon" aria-label="5 out of 5 stars">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="h-3.5 w-3.5" />
          ))}
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] text-white/60 ring-1 ring-white/10">
          <Icon name="pin" className="h-3 w-3 text-lime-neon" />
          {r.place.split(", ").pop()}
        </span>
      </div>
      <blockquote className="mt-5 flex-1 font-serif text-xl leading-snug text-white/90 sm:text-[1.4rem]">“{r.quote}”</blockquote>
      <figcaption className="mt-8 flex items-center gap-3">
        <Avatar name={r.name} color={r.color} className="h-10 w-10 text-xs" />
        <div className="leading-tight">
          <p className="text-sm font-semibold text-white">{r.name}</p>
          <p className="text-xs text-white/45">{r.place}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const rowA = [...reviews.slice(0, 4), ...reviews.slice(0, 4)];
  const rowB = [...reviews.slice(4), ...reviews.slice(4)];
  return (
    <section id="reviews" className="relative scroll-mt-0 overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="container-x">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal variant="fade" className="kicker text-white/50">(05) Stories</Reveal>
            <Reveal
              as="h2"
              className="h-display mt-6 text-5xl leading-[0.95] sm:text-6xl lg:text-7xl"
              lines={[
                "Loved by friends",
                <>
                  across <span className="serif-accent text-lime-neon">India.</span>
                </>,
              ]}
            />
            <Reveal variant="up" delay={0.2} className="mt-8 flex flex-wrap gap-2">
              {regions.map((r) => (
                <span
                  key={r}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-3.5 py-2 text-sm text-white/80 ring-1 ring-inset ring-white/10"
                >
                  <Icon name="pin" className="h-3.5 w-3.5 text-lime-neon" />
                  {r}
                </span>
              ))}
            </Reveal>
          </div>
          <Reveal variant="up" delay={0.2} className="lg:col-span-4 lg:text-right">
            <p className="h-display text-6xl">4.2<span className="text-2xl text-white/40">/5</span></p>
            <p className="mt-1 text-sm text-white/50">from 42,300+ ratings</p>
          </Reveal>
        </div>
      </div>

      <div className="mask-fade-x mt-16 space-y-4 sm:mt-20">
        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {rowA.map((r, i) => (
            <Card key={i} r={r} />
          ))}
        </div>
        <div className="flex w-max animate-marquee-rev gap-4 hover:[animation-play-state:paused]">
          {rowB.map((r, i) => (
            <Card key={i} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
