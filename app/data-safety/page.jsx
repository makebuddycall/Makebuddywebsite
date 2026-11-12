import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/Icons";
import Reveal from "@/components/motion/Reveal";

export const metadata = {
  title: "Data Safety Declaration — Make Buddy",
  description:
    "What data Make Buddy collects, why, whether it is shared, how it is protected, and how to delete your account and data.",
};

const UPDATED = "November 12, 2026";

/*
 * ⚠️ Keep this declaration in sync with the Google Play "Data safety" form,
 * the App Store "App Privacy" details and the Privacy Policy.
 */

const promises = [
  { icon: "shield", title: "No data shared", text: "We don’t share your data with third parties for their own use." },
  { icon: "lock", title: "Encrypted in transit", text: "All data is encrypted between your device and our servers." },
  { icon: "video", title: "Calls never recorded", text: "Voice and video call audio and video are never stored." },
  { icon: "check", title: "Delete anytime", text: "Delete your account and data in the app or on the web." },
];

const collected = [
  {
    icon: "user",
    category: "Personal info",
    items: [
      { type: "Name", note: "Shown on your profile", req: true, purposes: ["App functionality", "Account management"] },
      { type: "Email address", note: "Sign-in and account notices", req: true, purposes: ["Account management", "Developer communications", "Fraud prevention & security"] },
      { type: "User IDs", note: "Your Make Buddy username", req: true, purposes: ["App functionality", "Account management"] },
      { type: "Phone number", note: "Optional sign-in method", req: false, purposes: ["Account management", "Fraud prevention & security"] },
      { type: "Other info", note: "Date of birth, interests, bio", req: true, purposes: ["App functionality", "Personalisation", "Fraud prevention & security"] },
    ],
  },
  {
    icon: "pin",
    category: "Location",
    items: [
      { type: "Approximate location", note: "From IP address, to suggest nearby circles", req: true, purposes: ["App functionality", "Personalisation"] },
      { type: "Precise location", note: "Only if you allow it", req: false, purposes: ["App functionality", "Personalisation"] },
    ],
  },
  {
    icon: "heart",
    category: "Health and fitness",
    items: [
      { type: "Health info", note: "Mood check-ins and wellness entries — private to you", req: false, purposes: ["App functionality", "Personalisation"] },
    ],
  },
  {
    icon: "chat",
    category: "Messages",
    items: [
      { type: "Other in-app messages", note: "Group circle chats and reported messages. One-to-one chats are end-to-end encrypted and cannot be read by us.", req: false, purposes: ["App functionality", "Fraud prevention & security"] },
    ],
  },
  {
    icon: "camera",
    category: "Photos and videos",
    items: [{ type: "Photos", note: "Profile photo and photos you send", req: false, purposes: ["App functionality"] }],
  },
  {
    icon: "mic",
    category: "Audio",
    items: [{ type: "Voice or sound recordings", note: "Voice notes you choose to send", req: false, purposes: ["App functionality"] }],
  },
  {
    icon: "users",
    category: "Contacts",
    items: [{ type: "Contacts", note: "Only if you allow it, to find friends already on Make Buddy", req: false, purposes: ["App functionality"] }],
  },
  {
    icon: "card",
    category: "Financial info",
    items: [
      { type: "Purchase history", note: "In-app purchases. Payments are handled by Google Play / App Store — we never see card details.", req: false, purposes: ["App functionality", "Account management"] },
    ],
  },
  {
    icon: "spark",
    category: "App activity",
    items: [
      { type: "App interactions", note: "Features used, call metadata (who, when, duration)", req: true, purposes: ["App functionality", "Analytics", "Fraud prevention & security"] },
      { type: "Other user-generated content", note: "Circle posts, reports and feedback", req: false, purposes: ["App functionality", "Fraud prevention & security"] },
    ],
  },
  {
    icon: "chart",
    category: "App info and performance",
    items: [
      { type: "Crash logs", note: "To fix bugs", req: true, purposes: ["Analytics"] },
      { type: "Diagnostics", note: "Call quality and app performance", req: true, purposes: ["App functionality", "Analytics"] },
    ],
  },
  {
    icon: "device",
    category: "Device or other IDs",
    items: [
      { type: "Device or other IDs", note: "Push-notification token and device identifier", req: true, purposes: ["App functionality", "Fraud prevention & security"] },
    ],
  },
];

const notCollected = ["Financial account / card details", "Web browsing history", "Calendar events", "Files and documents", "Advertising ID", "Call audio & video recordings"];

const security = [
  { title: "Data is encrypted in transit", text: "All connections between the app and our servers use TLS encryption." },
  { title: "Data is encrypted at rest", text: "Stored data is encrypted on our servers." },
  { title: "End-to-end encrypted one-to-one chats", text: "Only you and the person you're talking to can read them." },
  { title: "You can request that data be deleted", text: "Delete your account in the app, or request deletion on the web — see below." },
  { title: "No advertising use", text: "Your data — including wellness data — is never used for advertising or sold." },
];

const toc = [
  ["overview", "At a glance"],
  ["shared", "Data shared"],
  ["collected", "Data collected"],
  ["ephemeral", "Calls & real-time processing"],
  ["security", "Security practices"],
  ["controls", "Your choices"],
  ["delete", "Delete your account & data"],
  ["contact", "Contact"],
];

function H2({ n, children }) {
  return (
    <h2 className="h-display flex items-baseline gap-4 text-3xl sm:text-4xl">
      <span className="font-sans text-sm font-semibold text-olive">{n}</span>
      {children}
    </h2>
  );
}

export default function DataSafetyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ---------- Full-screen header ---------- */}
        <header className="relative flex min-h-svh flex-col overflow-hidden bg-paper">
          <div className="pointer-events-none absolute -right-40 -top-24 h-[34rem] w-[34rem] rounded-full bg-lime-neon/40 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-petal/20 blur-[100px]" />

          <div className="container-x relative flex flex-1 flex-col justify-center pb-14 pt-28 sm:pt-32">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <Reveal variant="fade">
                  <nav className="text-xs text-ink/50" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-ink">Home</Link>
                    <span className="mx-1.5">/</span>Data Safety
                  </nav>
                </Reveal>
                <Reveal variant="fade" delay={0.1} className="kicker mt-8 text-olive">Data safety declaration</Reveal>
                <Reveal
                  as="h1"
                  className="h-display mt-5 text-[16vw] leading-[0.92] sm:text-7xl xl:text-8xl 2xl:text-[8.5rem]"
                  lines={[
                    "Your data,",
                    <span key="s" className="serif-accent text-olive">kept safe.</span>,
                  ]}
                />
                <Reveal variant="up" delay={0.3}>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg">
                    A clear, plain-language summary of what Make Buddy collects when you chat, voice call, video call and check
                    in — why we collect it, how we protect it, and how you can delete it.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a href="#collected" className="btn-primary">
                      See data collected <Icon name="arrowDown" className="h-4 w-4" />
                    </a>
                    <a href="#delete" className="btn-ghost hover:bg-white">Delete my data</a>
                  </div>
                  <p className="mt-6 text-xs font-semibold text-olive">Last updated: {UPDATED}</p>
                </Reveal>
              </div>

              <div id="overview" className="grid scroll-mt-28 gap-3 sm:grid-cols-2 lg:col-span-6">
                {promises.map((p, i) => (
                  <Reveal key={p.title} variant="up" delay={0.2 + i * 0.08}>
                    <div className="h-full rounded-[1.75rem] bg-white/85 p-6 shadow-card ring-1 ring-ink/5 backdrop-blur">
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-lime-neon">
                        <Icon name={p.icon} className="h-5 w-5" />
                      </span>
                      <h3 className="h-display mt-5 text-xl">{p.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{p.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* ---------- Body ---------- */}
        <div className="container-x grid gap-10 py-16 sm:py-24 lg:grid-cols-12 lg:gap-12">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <details className="group rounded-3xl bg-white p-5 ring-1 ring-ink/5 lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold [&::-webkit-details-marker]:hidden">
                  On this page
                  <Icon name="plus" className="h-4 w-4 transition group-open:rotate-45" />
                </summary>
                <TocList />
              </details>
              <div className="hidden lg:block">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/40">On this page</p>
                <TocList />
              </div>
            </div>
          </aside>

          <div className="min-w-0 space-y-20 lg:col-span-9">
            {/* Data shared */}
            <section id="shared" className="scroll-mt-28">
              <H2 n="01">Data shared</H2>
              <div className="mt-6 flex flex-col gap-5 rounded-[2rem] bg-ink p-7 text-white sm:flex-row sm:items-center sm:p-9">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-lime-neon text-ink">
                  <Icon name="shield" className="h-6 w-6" />
                </span>
                <div>
                  <p className="h-display text-2xl">No user data is shared with third parties</p>
                  <p className="mt-2 leading-relaxed text-white/65">
                    We don&apos;t sell your data or share it with other companies for their own purposes. Trusted service
                    providers that help us run Make Buddy (cloud hosting, calling infrastructure, crash reporting) process data
                    only on our behalf, under strict contracts. We may disclose data only when required by law or to protect
                    someone from serious harm.
                  </p>
                </div>
              </div>
            </section>

            {/* Data collected */}
            <section id="collected" className="scroll-mt-28">
              <H2 n="02">Data collected</H2>
              <p className="mt-4 max-w-3xl leading-relaxed text-ink/60">
                Data Make Buddy collects to provide the app. <strong className="font-semibold text-ink">Required</strong> data is
                needed to use Make Buddy; <strong className="font-semibold text-ink">Optional</strong> data is only collected if
                you choose to use that feature.
              </p>

              <div className="mt-8 space-y-4">
                {collected.map((c, ci) => (
                  <Reveal key={c.category} variant="up" delay={Math.min(ci, 3) * 0.04}>
                    <div className="overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-ink/5">
                      <div className="flex items-center gap-3 border-b border-ink/5 bg-paper/60 px-5 py-4 sm:px-7">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-lime-neon">
                          <Icon name={c.icon} className="h-[18px] w-[18px]" />
                        </span>
                        <h3 className="h-display text-xl">{c.category}</h3>
                      </div>
                      <ul className="divide-y divide-ink/5">
                        {c.items.map((it) => (
                          <li key={it.type} className="grid gap-3 px-5 py-4 sm:px-7 md:grid-cols-12 md:items-center md:gap-6">
                            <div className="md:col-span-5">
                              <p className="font-semibold">{it.type}</p>
                              <p className="mt-0.5 text-sm leading-snug text-ink/55">{it.note}</p>
                            </div>
                            <div className="md:col-span-2">
                              <span
                                className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                                  it.req ? "bg-ink text-white" : "bg-lime-soft text-olive"
                                }`}
                              >
                                {it.req ? "Required" : "Optional"}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1.5 md:col-span-5">
                              {it.purposes.map((p) => (
                                <span key={p} className="rounded-full bg-paper px-2.5 py-1 text-xs text-ink/70 ring-1 ring-inset ring-ink/5">
                                  {p}
                                </span>
                              ))}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-6 rounded-[1.75rem] bg-paper p-6 ring-1 ring-inset ring-ink/5 sm:p-7">
                <p className="text-sm font-semibold">Not collected</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {notCollected.map((n) => (
                    <span key={n} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm text-ink/70 ring-1 ring-ink/5">
                      <Icon name="close" className="h-3 w-3 text-ink/40" strokeWidth={2.4} />
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Ephemeral */}
            <section id="ephemeral" className="scroll-mt-28">
              <H2 n="03">Calls &amp; real-time processing</H2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  ["phone", "Voice calls", "Call audio is streamed in real time over encrypted connections and processed only to deliver the call. It is never recorded or stored."],
                  ["video", "Video calls", "Camera video is streamed in real time over encrypted connections and processed only to deliver the call. It is never recorded or stored."],
                ].map(([icon, title, text]) => (
                  <div key={title} className="rounded-[1.75rem] bg-white p-7 ring-1 ring-ink/5">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-lime-neon">
                      <Icon name={icon} className="h-5 w-5" />
                    </span>
                    <h3 className="h-display mt-5 text-xl">{title}</h3>
                    <p className="mt-2 leading-relaxed text-ink/60">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Security */}
            <section id="security" className="scroll-mt-28">
              <H2 n="04">Security practices</H2>
              <ul className="mt-6 overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-ink/5">
                {security.map((s) => (
                  <li key={s.title} className="flex gap-4 border-b border-ink/5 px-6 py-5 last:border-0 sm:px-7">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-lime-neon">
                      <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.6} />
                    </span>
                    <div>
                      <p className="font-semibold">{s.title}</p>
                      <p className="mt-0.5 text-sm text-ink/60">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Controls */}
            <section id="controls" className="scroll-mt-28">
              <H2 n="05">Your choices</H2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {[
                  ["mic", "Permissions are optional", "Microphone, camera, contacts, photos and location are only requested when you use a feature that needs them. Change them anytime in your device settings."],
                  ["heart", "Wellness data stays private", "Mood check-ins are visible only to you. Delete your wellness history anytime in Settings → Privacy."],
                  ["users", "Control who reaches you", "Choose who can find you, message you and call you. Block or report anyone in two taps."],
                ].map(([icon, title, text]) => (
                  <div key={title} className="rounded-[1.75rem] bg-white p-7 ring-1 ring-ink/5">
                    <Icon name={icon} className="h-6 w-6 text-olive" />
                    <h3 className="h-display mt-5 text-xl">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Delete */}
            <section id="delete" className="scroll-mt-28">
              <H2 n="06">Delete your account &amp; data</H2>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <div className="rounded-[2rem] bg-ink p-7 text-white sm:p-9">
                  <p className="kicker text-white/50">In the app</p>
                  <ol className="mt-6 space-y-4">
                    {["Open Make Buddy and tap Me", "Go to Settings → Account", "Tap Delete account and confirm"].map((step, i) => (
                      <li key={step} className="flex items-center gap-4">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-lime-neon text-sm font-bold text-ink">{i + 1}</span>
                        <span className="text-white/85">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="flex flex-col rounded-[2rem] bg-lime-gradient p-7 text-ink sm:p-9">
                  <p className="kicker text-ink/60 before:bg-ink before:ring-ink/10">On the web</p>
                  <p className="mt-6 leading-relaxed">
                    Can&apos;t access the app? Email us from the address linked to your account and we&apos;ll delete your
                    account and data for you.
                  </p>
                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    <a
                      href="mailto:privacy@makebuddy.app?subject=Account%20deletion%20request"
                      className="btn-primary"
                    >
                      Request deletion
                    </a>
                    <Link href="/contact" className="btn-ghost ring-ink/20 hover:bg-white/40">Contact us</Link>
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-[1.75rem] bg-white p-6 ring-1 ring-ink/5 sm:p-7">
                <p className="font-semibold">What happens to your data</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/65 marker:text-olive">
                  <li>Your profile, messages, photos, voice notes, mood check-ins and connections are deleted within 30 days.</li>
                  <li>Messages you sent in group circles may be anonymised rather than deleted, so conversations still make sense for others.</li>
                  <li>
                    Some limited records (for example purchase records or safety reports) may be kept longer where the law
                    requires it, then deleted.
                  </li>
                </ul>
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="scroll-mt-28">
              <div className="flex flex-col gap-6 rounded-[2rem] bg-ink p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
                <div>
                  <h2 className="h-display text-2xl sm:text-3xl">Questions about your data?</h2>
                  <p className="mt-2 text-sm text-white/60">
                    Email <a href="mailto:privacy@makebuddy.app" className="font-semibold text-lime-neon underline underline-offset-4">privacy@makebuddy.app</a> — we respond within 30 days.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/privacy-policy" className="btn-lime">Privacy Policy</Link>
                  <Link href="/terms-of-service" className="btn-ghost text-white ring-white/20 hover:bg-white/10">Terms of Service</Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function TocList() {
  return (
    <ol className="mt-4 space-y-0.5">
      {toc.map(([id, label], i) => (
        <li key={id}>
          <a href={`#${id}`} className="flex gap-3 rounded-xl px-3 py-2 text-sm text-ink/60 transition hover:bg-lime-soft hover:text-ink">
            <span className="w-5 text-olive">{String(i).padStart(2, "0")}</span>
            {label}
          </a>
        </li>
      ))}
    </ol>
  );
}
