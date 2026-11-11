import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icons";

const cols = [
  {
    title: "Product",
    links: [
      { href: "/#features", label: "Features" },
      { href: "/#wellness", label: "Wellness" },
      { href: "/#how", label: "How it works" },
      { href: "/#download", label: "Download" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/#reviews", label: "Stories" },
      { href: "/#faq", label: "FAQ" },
      { href: "/contact", label: "Contact Details" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/terms-of-service", label: "Terms of Service" },
      { href: "/privacy-policy", label: "Privacy Policy" },
    ],
  },
];

const socials = [
  { label: "Instagram", short: "IG" },
  { label: "TikTok", short: "TT" },
  { label: "X", short: "X" },
  { label: "LinkedIn", short: "in" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="container-x relative pt-16 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo dark />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/55">
              Make Buddy is a social wellness app. Chat, voice call and video call with friends, make new connections and check in on how you feel — all in one calm, safe place.
            </p>
            <form className="mt-8 flex max-w-sm items-center gap-2 rounded-full bg-white/5 p-1.5 pl-5 ring-1 ring-white/10 focus-within:ring-lime-neon/50">
              <label htmlFor="news" className="sr-only">Email address</label>
              <input
                id="news"
                type="email"
                placeholder="Get product updates"
                className="min-w-0 flex-1 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button type="button" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-lime-neon text-ink" aria-label="Subscribe">
                <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7 lg:justify-items-end">
            {cols.map((c) => (
              <div key={c.title} className="min-w-[9rem]">
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">{c.title}</h4>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="group inline-flex items-center gap-1 text-[15px] text-white/75 transition hover:text-white">
                        {l.label}
                        <Icon name="arrowUpRight" className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t border-white/10 py-6 text-xs text-white/45 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Make Buddy. Made with care.</p>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full text-[11px] font-semibold text-white/60 ring-1 ring-white/10 transition hover:bg-lime-neon hover:text-ink hover:ring-lime-neon"
              >
                {s.short}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
        <p className="h-display translate-y-[18%] whitespace-nowrap text-center bg-gradient-to-b from-lime-neon/80 via-lime-neon/25 to-transparent bg-clip-text text-[16.5vw] leading-[0.8] text-transparent">
          Make Buddy
        </p>
      </div>
    </footer>
  );
}
