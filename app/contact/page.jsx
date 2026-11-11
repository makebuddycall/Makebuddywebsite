import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icons";
import Reveal from "@/components/motion/Reveal";
import { BuddyMark } from "@/components/Logo";

export const metadata = {
  title: "Contact Details — Make Buddy",
  description: "Get in touch with the Make Buddy team for app support, safety, privacy requests, partnerships and press.",
};

/* ⚠️ Replace these placeholders with your real company details before launch. */
const company = {
  legalName: "Make Buddy",
  address: ["[Registered company address]", "[City, Postcode]", "[Country]"],
  hours: "Monday – Friday, 9:00 – 18:00",
  generalEmail: "hello@makebuddy.app",
};

const channels = [
  {
    icon: "chat",
    title: "App support",
    text: "Help with chat, voice calls, video calls, your account or subscription.",
    email: "support@makebuddy.app",
    meta: "Replies in 1–2 business days",
  },
  {
    icon: "shield",
    title: "Trust & safety",
    text: "Report a user, a message or a call. Urgent safety reports are prioritised.",
    email: "safety@makebuddy.app",
    meta: "Reviewed 24/7",
  },
  {
    icon: "lock",
    title: "Privacy requests",
    text: "Access, correct or delete your data, or ask about our Privacy Policy.",
    email: "privacy@makebuddy.app",
    meta: "Answered within 30 days",
  },
  {
    icon: "users",
    title: "Partnerships & press",
    text: "Wellness partners, schools, workplaces, media and brand enquiries.",
    email: "hello@makebuddy.app",
    meta: "Replies in 3–5 business days",
  },
];

const socials = [
  { label: "Instagram", handle: "@makebuddyapp" },
  { label: "TikTok", handle: "@makebuddyapp" },
  { label: "X", handle: "@makebuddy" },
  { label: "LinkedIn", handle: "Make Buddy" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Full-screen header with form */}
        <header className="relative flex min-h-svh flex-col overflow-hidden bg-paper">
          <div className="pointer-events-none absolute -right-40 -top-20 h-[34rem] w-[34rem] rounded-full bg-lime-neon/40 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-petal/20 blur-[100px]" />

          <div className="container-x relative flex flex-1 flex-col justify-center pb-16 pt-28 sm:pt-32">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-5">
                <Reveal variant="fade">
                  <nav className="text-xs text-ink/50" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-ink">Home</Link>
                    <span className="mx-1.5">/</span>Contact Details
                  </nav>
                </Reveal>
                <Reveal variant="fade" delay={0.1} className="kicker mt-8 text-olive">Contact details</Reveal>
                <Reveal
                  as="h1"
                  className="h-display mt-5 text-[17vw] leading-[0.92] sm:text-7xl xl:text-8xl 2xl:text-[8.5rem]"
                  lines={[
                    "Let's",
                    <span key="t" className="serif-accent text-olive">talk.</span>,
                  ]}
                />
                <Reveal variant="up" delay={0.3}>
                  <p className="mt-6 max-w-md text-base leading-relaxed text-ink/65 sm:text-lg">
                    Whether you need help with a chat, a voice or video call, your account — or just want to say hello —
                    the Make Buddy team is here for you.
                  </p>
                  <dl className="mt-10 grid gap-6 border-t border-ink/10 pt-8 sm:grid-cols-2">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/40">Email</dt>
                      <dd className="mt-2">
                        <a href={`mailto:${company.generalEmail}`} className="text-lg font-medium underline decoration-lime-deep decoration-2 underline-offset-4">
                          {company.generalEmail}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/40">Support hours</dt>
                      <dd className="mt-2 text-lg font-medium">{company.hours}</dd>
                    </div>
                  </dl>
                </Reveal>
              </div>

              <Reveal variant="up" delay={0.25} className="lg:col-span-7">
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </header>

        {/* Channels */}
        <section className="bg-white py-20 sm:py-28">
          <div className="container-x">
            <div className="grid items-end gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Reveal variant="fade" className="kicker text-ink/50">Reach the right team</Reveal>
                <Reveal
                  as="h2"
                  className="h-display mt-5 text-4xl leading-[0.95] sm:text-5xl lg:text-6xl"
                  lines={[
                    "Every question has",
                    <>
                      a <span className="serif-accent text-olive">home.</span>
                    </>,
                  ]}
                />
              </div>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {channels.map((c, i) => (
                <Reveal key={c.title} variant="up" delay={i * 0.08}>
                  <a
                    href={`mailto:${c.email}`}
                    className="group flex h-full flex-col rounded-[2rem] bg-paper p-7 ring-1 ring-inset ring-ink/5 transition duration-500 ease-premium hover:-translate-y-1 hover:bg-ink hover:text-white"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-lime-neon transition group-hover:bg-lime-neon group-hover:text-ink">
                        <Icon name={c.icon} className="h-5 w-5" />
                      </span>
                      <Icon name="arrowUpRight" className="h-5 w-5 opacity-30 transition group-hover:opacity-100" />
                    </div>
                    <h3 className="h-display mt-8 text-2xl">{c.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60 transition group-hover:text-white/60">{c.text}</p>
                    <p className="mt-6 break-all text-[15px] font-semibold">{c.email}</p>
                    <p className="mt-1 text-xs text-ink/45 transition group-hover:text-white/45">{c.meta}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Company details + wellbeing notice */}
        <section className="bg-paper py-20 sm:py-28">
          <div className="container-x grid gap-4 lg:grid-cols-12">
            <Reveal variant="up" className="lg:col-span-7">
              <div className="grid h-full gap-10 rounded-[2rem] bg-white p-8 ring-1 ring-ink/5 sm:grid-cols-2 sm:p-10">
                <div>
                  <p className="kicker text-ink/50">Company</p>
                  <p className="h-display mt-5 text-2xl">{company.legalName}</p>
                  <address className="mt-3 not-italic leading-relaxed text-ink/60">
                    {company.address.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </address>
                </div>
                <div>
                  <p className="kicker text-ink/50">Follow us</p>
                  <ul className="mt-5 space-y-3">
                    {socials.map((s) => (
                      <li key={s.label}>
                        <a href="#" className="group flex items-center justify-between border-b border-ink/10 pb-3 text-[15px]">
                          <span className="text-ink/50">{s.label}</span>
                          <span className="flex items-center gap-1 font-medium">
                            {s.handle}
                            <Icon name="arrowUpRight" className="h-3.5 w-3.5 opacity-40 transition group-hover:opacity-100" />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal variant="up" delay={0.1} className="lg:col-span-5">
              <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-ink p-8 text-white sm:p-10">
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-petal/25 blur-3xl" />
                <BuddyMark className="relative h-12 w-12" />
                <h3 className="h-display relative mt-6 text-2xl sm:text-3xl">Need urgent support?</h3>
                <p className="relative mt-3 leading-relaxed text-white/65">
                  Make Buddy is a wellness app, not an emergency or crisis service, and our inbox isn&apos;t monitored in real
                  time. If you or someone else is in danger, please call your local emergency number or reach out to a crisis
                  helpline in your country right away.
                </p>
                <p className="relative mt-auto pt-8 text-sm text-white/45">
                  You matter — and asking for help is a strong thing to do.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="container-x mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ink/55">
            <Link href="/#faq" className="underline-offset-4 hover:text-ink hover:underline">Read the FAQ</Link>
            <Link href="/privacy-policy" className="underline-offset-4 hover:text-ink hover:underline">Privacy Policy</Link>
            <Link href="/terms-of-service" className="underline-offset-4 hover:text-ink hover:underline">Terms of Service</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
