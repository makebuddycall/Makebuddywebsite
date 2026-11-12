import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/Icons";
import Reveal from "@/components/motion/Reveal";
import DeleteRequestForm from "@/components/DeleteRequestForm";

export const metadata = {
  title: "Delete Your Account — Account Deletion Policy — Make Buddy",
  description:
    "How to delete your Make Buddy account and data — in the app or on the web — what gets deleted, what we keep and for how long.",
};

const UPDATED = "November 12, 2026";

/* ⚠️ Keep these steps, timeframes and retention periods in sync with the app, the Privacy Policy and Data Safety page. */

const deleted = [
  ["user", "Profile", "Name, username, photo, bio, interests and date of birth"],
  ["chat", "Messages", "One-to-one chats, voice notes and photos you sent"],
  ["video", "Call history", "Records of your voice and video calls (call audio and video are never stored)"],
  ["users", "Connections", "Your buddies, buddy matches and circle memberships"],
  ["heart", "Wellness data", "Mood check-ins, wellness entries, streaks and insights"],
  ["device", "Device data", "Push-notification tokens, device identifiers and app settings"],
];

const retained = [
  {
    data: "Purchase & transaction records",
    why: "Required for tax, accounting and consumer-law obligations",
    how: "As long as the law requires, then deleted",
  },
  {
    data: "Safety & enforcement records",
    why: "To protect the community and prevent banned users from returning",
    how: "Up to 12 months",
  },
  {
    data: "Messages you sent in group circles",
    why: "So conversations still make sense for other members",
    how: "Anonymised — no longer linked to you",
  },
  {
    data: "Encrypted backups",
    why: "Routine disaster-recovery backups",
    how: "Overwritten within 90 days",
  },
];

const partial = [
  ["heart", "Wellness history", "Settings → Privacy → Delete wellness history"],
  ["chat", "A chat", "Swipe left on a chat → Delete"],
  ["camera", "Photos & voice notes", "Long-press a message → Delete for everyone"],
  ["users", "Contacts sync", "Settings → Privacy → Turn off contacts sync (synced contacts are removed)"],
];

const timeline = [
  ["Request", "You delete in the app, or send a web request."],
  ["Verify", "For web requests we confirm by email that it’s really you."],
  ["Deactivate", "Your profile is hidden immediately and you’re signed out everywhere."],
  ["Delete", "Your account and data are permanently erased within 30 days."],
  ["Confirm", "We email you once deletion is complete."],
];

const toc = [
  ["in-app", "Delete in the app"],
  ["web", "Request on the web"],
  ["deleted", "What gets deleted"],
  ["retained", "What we keep & for how long"],
  ["timeline", "Deletion timeline"],
  ["partial", "Delete some data only"],
  ["before", "Before you delete"],
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

export default function DeleteAccountPage() {
  return (
    <>
      <Navbar dark />
      <main>
        {/* ---------- Full-screen header ---------- */}
        <header className="relative isolate flex min-h-svh flex-col overflow-hidden bg-buddy-radial text-white">
          <div className="bg-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,#000_20%,transparent_70%)]" />
          <div className="pointer-events-none absolute -left-24 top-24 -z-10 h-80 w-80 rounded-full bg-petal/15 blur-3xl" />

          <div className="container-x relative flex flex-1 flex-col justify-center pb-14 pt-28 sm:pt-32">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Reveal variant="fade">
                  <nav className="text-xs text-white/55" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-white">Home</Link>
                    <span className="mx-1.5">/</span>Delete Account
                  </nav>
                </Reveal>
                <Reveal variant="fade" delay={0.1} className="kicker mt-8 text-white/60">Account deletion policy</Reveal>
                <Reveal
                  as="h1"
                  className="h-display mt-5 text-[14vw] leading-[0.92] sm:text-7xl xl:text-8xl 2xl:text-[8.5rem]"
                  lines={[
                    "Delete your",
                    <span key="a" className="serif-accent text-lime-neon">account.</span>,
                  ]}
                />
                <Reveal variant="up" delay={0.3}>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                    You&apos;re always in control. Here&apos;s how to permanently delete your Make Buddy account and data — in the
                    app or on the web — and exactly what happens next.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a href="#in-app" className="btn-lime">
                      Delete in the app <Icon name="arrowDown" className="h-4 w-4" />
                    </a>
                    <a href="#web" className="btn-ghost text-white ring-white/20 hover:bg-white/10">Request on the web</a>
                  </div>
                  <p className="mt-6 text-xs font-semibold text-white/60">Last updated: {UPDATED}</p>
                </Reveal>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
                {[
                  ["device", "In the app", "Me → Settings → Account → Delete account"],
                  ["globe", "On the web", "Can’t log in? Send a request from this page"],
                  ["check", "Within 30 days", "Your account and data are permanently erased"],
                ].map(([icon, title, text], i) => (
                  <Reveal key={title} variant="up" delay={0.2 + i * 0.08}>
                    <div className="flex h-full items-center gap-4 rounded-3xl bg-white/[0.06] p-5 ring-1 ring-white/10 backdrop-blur-xl">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-lime-neon text-ink">
                        <Icon name={icon} className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="h-display text-xl">{title}</p>
                        <p className="text-sm text-white/65">{text}</p>
                      </div>
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
            {/* In app */}
            <section id="in-app" className="scroll-mt-28">
              <H2 n="01">Delete in the app</H2>
              <p className="mt-4 max-w-3xl leading-relaxed text-ink/60">The quickest way — the same steps on Android and iPhone.</p>
              <ol className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  ["Open Make Buddy", "Sign in to the account you want to delete."],
                  ["Tap Me", "Open your profile from the bottom tab bar."],
                  ["Settings → Account", "Tap the settings icon, then Account."],
                  ["Delete account", "Tap Delete account, enter your password or code, and confirm."],
                ].map(([title, text], i) => (
                  <li key={title} className="rounded-[1.75rem] bg-white p-6 ring-1 ring-ink/5">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-sm font-bold text-lime-neon">{i + 1}</span>
                    <p className="h-display mt-5 text-xl">{title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{text}</p>
                  </li>
                ))}
              </ol>
            </section>

            {/* Web */}
            <section id="web" className="scroll-mt-28">
              <H2 n="02">Request deletion on the web</H2>
              <p className="mt-4 max-w-3xl leading-relaxed text-ink/60">
                Lost your phone, uninstalled the app or can&apos;t sign in? Send us a request below. To protect your account,
                send it from the email address linked to your Make Buddy account — we&apos;ll reply to confirm before deleting
                anything.
              </p>
              <div className="mt-6">
                <DeleteRequestForm />
              </div>
            </section>

            {/* Deleted */}
            <section id="deleted" className="scroll-mt-28">
              <H2 n="03">What gets deleted</H2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {deleted.map(([icon, title, text]) => (
                  <div key={title} className="rounded-[1.75rem] bg-white p-6 ring-1 ring-ink/5">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-lime-soft text-olive">
                      <Icon name={icon} className="h-5 w-5" />
                    </span>
                    <p className="h-display mt-5 text-xl">{title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Retained */}
            <section id="retained" className="scroll-mt-28">
              <H2 n="04">What we keep &amp; for how long</H2>
              <p className="mt-4 max-w-3xl leading-relaxed text-ink/60">
                A small amount of information may be kept after deletion, only where we have to or where it protects others:
              </p>
              <div className="mt-6 overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-ink/5">
                <div className="hidden grid-cols-12 gap-6 border-b border-ink/5 bg-paper/60 px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink/45 md:grid">
                  <span className="col-span-4">Data</span>
                  <span className="col-span-5">Why</span>
                  <span className="col-span-3">How long</span>
                </div>
                <ul className="divide-y divide-ink/5">
                  {retained.map((r) => (
                    <li key={r.data} className="grid gap-1.5 px-6 py-5 md:grid-cols-12 md:items-center md:gap-6 md:px-7">
                      <p className="font-semibold md:col-span-4">{r.data}</p>
                      <p className="text-sm text-ink/60 md:col-span-5">{r.why}</p>
                      <p className="md:col-span-3">
                        <span className="inline-flex rounded-full bg-lime-soft px-3 py-1 text-xs font-semibold text-olive">{r.how}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Timeline */}
            <section id="timeline" className="scroll-mt-28">
              <H2 n="05">Deletion timeline</H2>
              <ol className="relative mt-8 grid gap-6 md:grid-cols-5 md:gap-4">
                <span className="absolute left-5 top-5 h-[calc(100%-2.5rem)] w-px bg-ink/10 md:left-5 md:right-5 md:top-5 md:h-px md:w-auto" aria-hidden="true" />
                {timeline.map(([title, text], i) => (
                  <li key={title} className="relative flex gap-4 md:block">
                    <span className={`relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold ${i === timeline.length - 1 ? "bg-lime-neon text-ink" : "bg-ink text-lime-neon"}`}>
                      {i + 1}
                    </span>
                    <div className="md:mt-5">
                      <p className="h-display text-xl">{title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink/60">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* Partial */}
            <section id="partial" className="scroll-mt-28">
              <H2 n="06">Delete some data, keep your account</H2>
              <p className="mt-4 max-w-3xl leading-relaxed text-ink/60">
                Not ready to leave? You can delete specific data at any time without deleting your account:
              </p>
              <ul className="mt-6 overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-ink/5">
                {partial.map(([icon, title, how]) => (
                  <li key={title} className="flex items-center gap-4 border-b border-ink/5 px-6 py-5 last:border-0 sm:px-7">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink text-lime-neon">
                      <Icon name={icon} className="h-[18px] w-[18px]" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold">{title}</p>
                      <p className="text-sm text-ink/60">{how}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Before */}
            <section id="before" className="scroll-mt-28">
              <H2 n="07">Before you delete</H2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  ["card", "Cancel any subscription", "Deleting your account does not cancel in-app purchases or subscriptions. Cancel them in Google Play or the App Store first to avoid future charges."],
                  ["lock", "Deletion is permanent", "Once your account is deleted it can’t be restored, and your messages, connections and wellness history can’t be recovered."],
                  ["arrowDown", "Want a copy of your data?", "Email privacy@makebuddy.app before deleting and we’ll send you a copy of your personal data."],
                  ["users", "Let your buddies know", "Your buddies won’t be notified. You may want to say goodbye or share another way to stay in touch."],
                ].map(([icon, title, text]) => (
                  <div key={title} className="flex gap-4 rounded-[1.75rem] bg-white p-6 ring-1 ring-ink/5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-petal/20 text-ink">
                      <Icon name={icon} className="h-[18px] w-[18px]" />
                    </span>
                    <div>
                      <p className="font-semibold">{title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink/60">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="scroll-mt-28">
              <div className="flex flex-col gap-6 rounded-[2rem] bg-ink p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
                <div>
                  <h2 className="h-display text-2xl sm:text-3xl">Need help deleting your account?</h2>
                  <p className="mt-2 text-sm text-white/60">
                    Email{" "}
                    <a href="mailto:privacy@makebuddy.app?subject=Account%20deletion%20help" className="font-semibold text-lime-neon underline underline-offset-4">
                      privacy@makebuddy.app
                    </a>{" "}
                    — we respond within 30 days.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/data-safety" className="btn-lime">Data Safety</Link>
                  <Link href="/privacy-policy" className="btn-ghost text-white ring-white/20 hover:bg-white/10">Privacy Policy</Link>
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
            <span className="w-5 text-olive">{String(i + 1).padStart(2, "0")}</span>
            {label}
          </a>
        </li>
      ))}
    </ol>
  );
}
