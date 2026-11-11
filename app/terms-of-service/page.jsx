import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BuddyMark } from "@/components/Logo";
import Icon from "@/components/Icons";
import Reveal from "@/components/motion/Reveal";

export const metadata = {
  title: "Terms of Service — Make Buddy",
  description:
    "The terms that govern your use of Make Buddy, the social wellness app for chat, voice calls, video calls and meaningful connections.",
};

const UPDATED = "November 11, 2026";

const sections = [
  {
    id: "agreement",
    title: "Agreement to These Terms",
    body: (
      <>
        <p>
          These Terms of Service (&quot;Terms&quot;) form a binding agreement between you and Make Buddy (&quot;Make
          Buddy&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;). They govern your access to and use of the Make Buddy
          mobile application, website and related services (together, the &quot;Service&quot;).
        </p>
        <p>
          By creating an account or using the Service you confirm that you have read, understood and agree to these Terms and
          to our <Link href="/privacy-policy">Privacy Policy</Link>. If you do not agree, please do not use the Service.
        </p>
      </>
    ),
  },
  {
    id: "about",
    title: "About Make Buddy",
    body: (
      <>
        <p>
          Make Buddy is a <strong>social wellness application</strong>. It is designed to support your emotional wellbeing by
          helping you build and maintain meaningful relationships. Through the Service you can:
        </p>
        <ul>
          <li><strong>Chat</strong> one-to-one or in small groups (&quot;circles&quot;).</li>
          <li>Make <strong>voice calls</strong> and <strong>video calls</strong> with friends and buddies.</li>
          <li><strong>Make new connections</strong> through interest-based buddy matching.</li>
          <li>Use <strong>wellness tools</strong> such as mood check-ins, reach-out reminders, streaks and weekly insights.</li>
        </ul>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "Eligibility",
    body: (
      <>
        <p>
          You must be at least 13 years old (or the minimum digital-consent age in your country, if higher) to use Make Buddy.
          If you are under 18, you confirm that a parent or legal guardian has reviewed and agreed to these Terms on your
          behalf. Users under 18 receive additional safety and privacy protections by default.
        </p>
        <p>You may not use the Service if you have previously been removed from it or if doing so would break applicable law.</p>
      </>
    ),
  },
  {
    id: "account",
    title: "Your Account",
    body: (
      <ul>
        <li>Keep your login details secure — you are responsible for all activity under your account.</li>
        <li>Provide accurate information and keep it up to date.</li>
        <li>Do not create an account for someone else, impersonate anyone, or create multiple accounts to avoid restrictions.</li>
        <li>
          Tell us straight away through our <Link href="/contact">contact page</Link> if you suspect unauthorised access.
        </li>
      </ul>
    ),
  },
  {
    id: "calls",
    title: "Chat, Voice & Video Calls",
    body: (
      <>
        <p>When you use messaging and calling features you agree that:</p>
        <ul>
          <li>
            You will only <strong>record, screenshot or share</strong> a chat, voice call or video call with the consent of
            everyone involved, and in line with the law where you and they live.
          </li>
          <li>
            Calls and messages are sent over the internet. Your mobile network or internet provider may charge you for data
            usage, and call quality depends on your connection.
          </li>
          <li>
            <strong>Make Buddy cannot be used to contact emergency services.</strong> Always use your phone&apos;s regular
            dialler to reach emergency numbers.
          </li>
          <li>
            We may limit call length, group size or message volume (for example to keep the Service fair, or to prevent spam and
            abuse).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "connections",
    title: "Making Connections & Meeting People",
    body: (
      <>
        <p>
          Buddy matching suggests people you may get along with based on interests and preferences you choose to share. We do
          not conduct criminal background checks on users and cannot guarantee anyone&apos;s identity or behaviour.
        </p>
        <ul>
          <li>Take your time getting to know new connections and never share financial information.</li>
          <li>If you decide to meet someone in person, meet in a public place and tell a friend where you will be.</li>
          <li>You are responsible for your interactions with other users, online and offline.</li>
        </ul>
      </>
    ),
  },
  {
    id: "community",
    title: "Community Guidelines",
    body: (
      <>
        <p>Make Buddy is built for kind, supportive connection. You agree <strong>not</strong> to:</p>
        <ul>
          <li>Harass, bully, threaten, stalk or intimidate anyone.</li>
          <li>Share hateful, violent, sexually explicit or otherwise harmful content, including during video calls.</li>
          <li>Ask for money, run scams, send spam or advertise without our permission.</li>
          <li>Share another person&apos;s private information without their consent.</li>
          <li>Encourage self-harm, or present yourself as a medical or mental-health professional when you are not.</li>
          <li>Reverse-engineer, scrape or interfere with the security or operation of the Service.</li>
        </ul>
      </>
    ),
  },
  {
    id: "wellness",
    title: "Wellness Disclaimer",
    body: (
      <>
        <p>
          Mood check-ins, insights and other wellness features are designed to support your general wellbeing.{" "}
          <strong>Make Buddy is not a medical, psychological, counselling or emergency service</strong>, and nothing in the
          Service is a diagnosis, treatment or professional advice.
        </p>
        <p>
          Other users are not trained professionals. If you are in crisis or think you may be in danger, contact your local
          emergency number or a crisis helpline immediately, and speak to a qualified health professional about any health
          concerns.
        </p>
      </>
    ),
  },
  {
    id: "content",
    title: "Your Content",
    body: (
      <>
        <p>
          You own the messages, photos, voice notes and other content you share (&quot;User Content&quot;). You give Make
          Buddy a worldwide, non-exclusive, royalty-free licence to host, store, transmit and display User Content only as
          needed to run, secure and improve the Service.
        </p>
        <p>You are responsible for your User Content and confirm you have the rights needed to share it.</p>
      </>
    ),
  },
  {
    id: "safety",
    title: "Reporting, Blocking & Moderation",
    body: (
      <p>
        You can block or report any user, message or call from inside the app. Our moderation team reviews reports and may
        remove content, restrict features or suspend accounts that break these Terms. Reports made in good faith are
        confidential — the person you report is not told who reported them.
      </p>
    ),
  },
  {
    id: "subscriptions",
    title: "In-App Purchases",
    body: (
      <ul>
        <li>Make Buddy is free to download. Some optional features may be offered as in-app purchases or subscriptions; prices are always shown in the app before you buy.</li>
        <li>Subscriptions are billed through the Apple App Store or Google Play and renew automatically unless cancelled at least 24 hours before the current period ends.</li>
        <li>Manage or cancel any time in your app-store account settings. Cancellation takes effect at the end of the billing period.</li>
        <li>Refunds are handled by the relevant app store under its policies, except where the law says otherwise.</li>
        <li>Free trials turn into paid subscriptions unless cancelled before the trial ends.</li>
      </ul>
    ),
  },
  {
    id: "ip",
    title: "Intellectual Property",
    body: (
      <p>
        The Service — including the Make Buddy name, logo, mascot, design and software — belongs to Make Buddy and is protected
        by intellectual-property laws. We give you a personal, limited, non-transferable licence to use the app for its
        intended purpose. You may not copy, modify or distribute any part of it without our written permission.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    body: (
      <p>
        You can delete your account at any time in the app settings. We may suspend or end your access if you break these
        Terms, if the law requires it, or to protect other users. Sections that by their nature should continue (such as
        ownership, disclaimers and limits of liability) survive termination.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Disclaimers & Limitation of Liability",
    body: (
      <>
        <p>
          The Service is provided &quot;as is&quot; and &quot;as available&quot;. We do not promise it will be uninterrupted or
          error-free, and we are not responsible for the conduct of other users, online or offline.
        </p>
        <p>
          To the fullest extent the law allows, Make Buddy is not liable for indirect, incidental, special or consequential
          damages, and our total liability for any claim is limited to the amount you paid us in the 12 months before the claim.
          Nothing in these Terms limits liability that cannot legally be limited.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    body: (
      <p>
        We may update these Terms from time to time. For material changes we will let you know in the app or by email before
        they take effect. Continuing to use Make Buddy after that means you accept the updated Terms.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing Law",
    body: (
      <p>
        These Terms are governed by the laws of the country in which Make Buddy is registered, without regard to conflict-of-law
        rules. Disputes will be handled by the courts of that country unless your local consumer-protection laws give you the
        right to bring a claim where you live.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <p>
        Questions about these Terms? Visit our <Link href="/contact">Contact Details</Link> page or email{" "}
        <a href="mailto:legal@makebuddy.app">legal@makebuddy.app</a>.
      </p>
    ),
  },
];

const highlights = [
  { icon: "heart", title: "Be kind", text: "Respect every buddy — no harassment, hate or scams." },
  { icon: "video", title: "Consent first", text: "Never record a chat or call without everyone’s okay." },
  { icon: "shield", title: "Wellness, not medical care", text: "Our tools support you — they don’t replace professionals." },
  { icon: "check", title: "Cancel anytime", text: "Manage subscriptions in your app-store settings." },
];

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Full-screen header */}
        <header className="relative flex min-h-svh flex-col overflow-hidden bg-buddy-soft">
          <div className="pointer-events-none absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full bg-lime-neon/50 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-petal/25 blur-3xl" />

          <div className="container-x relative flex flex-1 flex-col justify-center pb-12 pt-28 sm:pt-32">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Reveal variant="fade">
                  <nav className="text-xs text-ink/50" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-ink">Home</Link>
                    <span className="mx-1.5">/</span>Terms of Service
                  </nav>
                </Reveal>
                <Reveal variant="fade" delay={0.1} className="kicker mt-8 text-olive">Legal</Reveal>
                <Reveal
                  as="h1"
                  className="h-display mt-5 text-[15vw] leading-[0.92] sm:text-7xl xl:text-8xl 2xl:text-[8.5rem]"
                  lines={[
                    "Terms of",
                    <span key="s" className="serif-accent text-olive">Service.</span>,
                  ]}
                />
                <Reveal variant="up" delay={0.3}>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg">
                    The rules for using Make Buddy — the wellness app where you chat, voice call, video call and make
                    meaningful connections. Please read them carefully.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a href="#agreement" className="btn-primary">
                      Read the terms <Icon name="arrowDown" className="h-4 w-4" />
                    </a>
                    <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-olive ring-1 ring-ink/5">
                      Last updated: {UPDATED}
                    </span>
                  </div>
                </Reveal>
              </div>

              <div className="relative lg:col-span-5">
                <BuddyMark className="absolute -top-16 right-4 hidden h-20 w-20 animate-float lg:block" />
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink/40">The short version</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {highlights.map((h, i) => (
                    <Reveal key={h.title} variant="up" delay={0.2 + i * 0.08}>
                      <div className="h-full rounded-3xl bg-white/80 p-5 shadow-card ring-1 ring-ink/5 backdrop-blur">
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-lime-neon">
                          <Icon name={h.icon} className="h-[18px] w-[18px]" />
                        </span>
                        <h3 className="mt-3 font-semibold">{h.title}</h3>
                        <p className="mt-1 text-sm text-ink/60">{h.text}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="container-x grid gap-10 py-16 sm:py-24 lg:grid-cols-12 lg:gap-12">
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="lg:sticky lg:top-28">
              <details className="group rounded-3xl bg-white p-5 ring-1 ring-ink/5 lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold [&::-webkit-details-marker]:hidden">
                  Contents
                  <Icon name="plus" className="h-4 w-4 transition group-open:rotate-45" />
                </summary>
                <Toc />
              </details>
              <div className="hidden lg:block">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/40">Contents</p>
                <Toc />
              </div>
            </div>
          </aside>

          <article className="min-w-0 lg:col-span-8 xl:col-span-7">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-28 border-b border-ink/10 py-10 first:pt-0 last:border-0">
                <h2 className="h-display flex items-baseline gap-4 text-2xl sm:text-3xl">
                  <span className="font-sans text-sm font-semibold text-olive">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-ink/70 [&_a]:font-semibold [&_a]:text-ink [&_a]:underline [&_a]:decoration-lime-deep [&_a]:decoration-2 [&_a]:underline-offset-4 [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 marker:text-olive">
                  {s.body}
                </div>
              </section>
            ))}

            <div className="mt-10 flex flex-col gap-6 rounded-[2rem] bg-ink p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div>
                <h3 className="h-display text-2xl">Questions about these terms?</h3>
                <p className="mt-2 text-sm text-white/60">Our team usually replies within 2 business days.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-lime">Contact us</Link>
                <Link href="/privacy-policy" className="btn-ghost text-white ring-white/20 hover:bg-white/10">Privacy Policy</Link>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Toc() {
  return (
    <ol className="mt-4 space-y-0.5">
      {sections.map((s, i) => (
        <li key={s.id}>
          <a href={`#${s.id}`} className="flex gap-3 rounded-xl px-3 py-2 text-sm text-ink/60 transition hover:bg-lime-soft hover:text-ink">
            <span className="w-5 text-olive">{String(i + 1).padStart(2, "0")}</span>
            {s.title}
          </a>
        </li>
      ))}
    </ol>
  );
}
