import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/Icons";
import Reveal from "@/components/motion/Reveal";

export const metadata = {
  title: "Privacy Policy — Make Buddy",
  description:
    "How Make Buddy, the social wellness app for chat, voice and video calls, collects, uses and protects your personal information.",
};

const UPDATED = "November 11, 2026";

const sections = [
  {
    id: "overview",
    title: "Overview",
    body: (
      <>
        <p>
          Make Buddy is a social wellness app that helps you chat, voice call, video call and build meaningful connections.
          Because the Service is built around personal conversations and how you feel, we hold ourselves to a high standard of
          privacy.
        </p>
        <p>
          This Privacy Policy explains what information Make Buddy (&quot;we&quot;, &quot;us&quot;) collects, how we use it and
          the choices you have. Please read it together with our <Link href="/terms-of-service">Terms of Service</Link>.
        </p>
      </>
    ),
  },
  {
    id: "collect",
    title: "Information We Collect",
    body: (
      <>
        <p><strong>Information you give us</strong></p>
        <ul>
          <li>Account details: name, username, email or phone number, date of birth and profile photo.</li>
          <li>Profile details: interests, bio, pronouns (optional) and preferred times to talk — used for buddy matching.</li>
          <li>Content you share: chat messages, photos, voice notes and group-circle posts.</li>
          <li>Wellness entries you choose to log, such as mood check-ins and notes.</li>
          <li>Support requests, reports and feedback.</li>
        </ul>
        <p><strong>Information collected automatically</strong></p>
        <ul>
          <li>Device information: model, operating system, app version and language.</li>
          <li>Usage information: features used, connection requests, call metadata (see below) and crash logs.</li>
          <li>Approximate location from your IP address, used to suggest nearby circles. Precise location only with your permission.</li>
        </ul>
      </>
    ),
  },
  {
    id: "calls",
    title: "Chat, Voice & Video Call Data",
    body: (
      <>
        <ul>
          <li>
            <strong>One-to-one chats</strong> are end-to-end encrypted, which means only you and the person you&apos;re talking
            to can read them.
          </li>
          <li>
            <strong>Voice and video calls</strong> are sent in real time over encrypted connections.{" "}
            <strong>We do not record or store the audio or video of your calls.</strong>
          </li>
          <li>
            We keep limited <strong>call metadata</strong> — who took part, when, and how long the call lasted — to run the
            Service, show your call history, measure call quality and investigate safety reports.
          </li>
          <li>
            When you report a message, we receive a copy of the reported messages so our moderators can review them.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "wellness-data",
    title: "Wellness & Mood Data",
    body: (
      <p>
        Mood check-ins and wellness entries are private to you by default and are only used to show you insights inside the
        app. We treat them as sensitive data: we <strong>never sell</strong> them, never use them for advertising and never
        share them with other users unless you choose to. You can delete your wellness history at any time in{" "}
        <em>Settings → Privacy</em>.
      </p>
    ),
  },
  {
    id: "permissions",
    title: "App Permissions",
    body: (
      <>
        <p>Make Buddy only asks for device permissions when you use a feature that needs them:</p>
        <ul>
          <li><strong>Microphone</strong> — for voice calls, video calls and voice notes.</li>
          <li><strong>Camera</strong> — for video calls and taking profile or chat photos.</li>
          <li><strong>Contacts</strong> (optional) — to help you find friends who already use Make Buddy. We never message your contacts.</li>
          <li><strong>Notifications</strong> — for messages, incoming calls and gentle reach-out reminders.</li>
          <li><strong>Photos</strong> — to share images in chats.</li>
        </ul>
        <p>You can change these at any time in your device settings.</p>
      </>
    ),
  },
  {
    id: "use",
    title: "How We Use Your Information",
    body: (
      <ul>
        <li>To provide chat, voice calls, video calls, buddy matching and wellness features.</li>
        <li>To suggest new connections and send reach-out reminders you have turned on.</li>
        <li>To create your private wellness insights and weekly reports.</li>
        <li>To keep the community safe — preventing spam, fraud and abuse and enforcing our guidelines.</li>
        <li>To process subscriptions and contact you about your account.</li>
        <li>To meet our legal obligations.</li>
      </ul>
    ),
  },
  {
    id: "share",
    title: "How We Share Information",
    body: (
      <>
        <p>We do not sell your personal information. We share it only:</p>
        <ul>
          <li><strong>With other users</strong> — your profile, and the messages and calls you choose to have with them.</li>
          <li><strong>With service providers</strong> that help us run Make Buddy (cloud hosting, calling infrastructure, analytics, support), under strict contracts.</li>
          <li><strong>For legal and safety reasons</strong> — when the law requires it, or to protect someone from serious harm.</li>
          <li><strong>In a business transfer</strong> — if Make Buddy is involved in a merger or acquisition, with notice to you.</li>
        </ul>
      </>
    ),
  },
  {
    id: "security",
    title: "Data Security",
    body: (
      <p>
        We use industry-standard safeguards including encryption in transit and at rest, end-to-end encryption for one-to-one
        chats, strict access controls and regular security reviews. No system is completely secure, so please use a strong,
        unique password and tell us if you notice anything unusual.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Data Retention",
    body: (
      <p>
        We keep your information for as long as your account is active or as needed to provide the Service. Call metadata is
        kept for up to 12 months. When you delete your account we delete or anonymise your personal data within 30 days,
        except where we must keep it longer for legal, safety or billing reasons.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Your Rights & Choices",
    body: (
      <>
        <p>Depending on where you live (for example under GDPR or CCPA), you may have the right to:</p>
        <ul>
          <li>Access and get a copy of your personal data.</li>
          <li>Correct information that is wrong.</li>
          <li>Delete your account and personal data.</li>
          <li>Object to or restrict certain processing.</li>
          <li>Withdraw consent at any time — for example for notifications, contacts or location.</li>
        </ul>
        <p>
          You can do most of this in the app settings, or contact us through our <Link href="/contact">Contact Details</Link>{" "}
          page or at <a href="mailto:privacy@makebuddy.app">privacy@makebuddy.app</a>.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    body: (
      <p>
        Make Buddy is not intended for children under 13. Users aged 13–17 get stricter default settings, such as private
        profiles, limited discoverability and restricted video calling with people they haven&apos;t connected with. If you
        believe a child under 13 has given us personal data, please contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "international",
    title: "International Transfers",
    body: (
      <p>
        Your information may be processed in countries other than your own. When we transfer data internationally we use
        appropriate safeguards, such as Standard Contractual Clauses, to protect it.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    body: (
      <p>
        This website uses a small number of essential cookies and privacy-friendly analytics to understand how visitors use
        it. You can control cookies in your browser settings.
      </p>
    ),
  },
  {
    id: "updates",
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. We will post the new version here, update the &quot;Last
        updated&quot; date and, for significant changes, notify you in the app.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <p>
        For privacy questions or requests, visit our <Link href="/contact">Contact Details</Link> page or email{" "}
        <a href="mailto:privacy@makebuddy.app">privacy@makebuddy.app</a>.
      </p>
    ),
  },
];

const promises = [
  { icon: "lock", value: "0", label: "Personal or wellness data sold — ever" },
  { icon: "chat", value: "E2E", label: "Encrypted one-to-one chats" },
  { icon: "video", value: "Never", label: "Recorded — your voice & video calls" },
  { icon: "shield", value: "30d", label: "To erase your data after deletion" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar dark />
      <main>
        {/* Full-screen header */}
        <header className="relative isolate flex min-h-svh flex-col overflow-hidden bg-buddy-radial text-white">
          <div className="bg-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,#000_20%,transparent_70%)]" />
          <div className="pointer-events-none absolute -left-24 top-20 -z-10 h-80 w-80 rounded-full bg-petal/15 blur-3xl" />

          <div className="container-x relative flex flex-1 flex-col justify-center pb-12 pt-28 sm:pt-32">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Reveal variant="fade">
                  <nav className="text-xs text-white/55" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-white">Home</Link>
                    <span className="mx-1.5">/</span>Privacy Policy
                  </nav>
                </Reveal>
                <Reveal variant="fade" delay={0.1} className="kicker mt-8 text-white/60">Your privacy</Reveal>
                <Reveal
                  as="h1"
                  className="h-display mt-5 text-[15vw] leading-[0.92] sm:text-7xl xl:text-8xl 2xl:text-[8.5rem]"
                  lines={[
                    "Privacy",
                    <span key="p" className="serif-accent text-lime-neon">Policy.</span>,
                  ]}
                />
                <Reveal variant="up" delay={0.3}>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                    Your chats, calls and check-ins are personal. Here&apos;s exactly how Make Buddy collects, uses and
                    protects your information.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a href="#overview" className="btn-lime">
                      Read the policy <Icon name="arrowDown" className="h-4 w-4" />
                    </a>
                    <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white/80 ring-1 ring-white/15">
                      Last updated: {UPDATED}
                    </span>
                  </div>
                </Reveal>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
                {promises.map((p, i) => (
                  <Reveal key={p.label} variant="up" delay={0.2 + i * 0.08}>
                    <div className="flex h-full items-center gap-5 rounded-3xl bg-white/[0.06] p-5 ring-1 ring-white/10 backdrop-blur-xl">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-lime-neon text-ink">
                        <Icon name={p.icon} className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="h-display text-2xl text-lime-neon">{p.value}</p>
                        <p className="text-sm text-white/70">{p.label}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="container-x grid gap-10 py-16 sm:py-24 lg:grid-cols-12 lg:gap-12">
          <article className="order-2 min-w-0 lg:order-1 lg:col-span-8">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28 mb-4 rounded-[2rem] bg-white p-7 ring-1 ring-ink/5 sm:p-10">
                <h2 className="h-display text-2xl sm:text-3xl">{s.title}</h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-ink/70 [&_a]:font-semibold [&_a]:text-ink [&_a]:underline [&_a]:decoration-lime-deep [&_a]:decoration-2 [&_a]:underline-offset-4 [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 marker:text-olive">
                  {s.body}
                </div>
              </section>
            ))}

            <div className="mt-6 flex flex-col gap-6 rounded-[2rem] bg-ink p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div>
                <h3 className="h-display text-2xl">Privacy questions or requests?</h3>
                <p className="mt-2 text-sm text-white/60">We respond to privacy requests within 30 days.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-lime">Contact us</Link>
                <Link href="/terms-of-service" className="btn-ghost text-white ring-white/20 hover:bg-white/10">Terms of Service</Link>
              </div>
            </div>
          </article>

          <aside className="order-1 lg:order-2 lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <details className="group rounded-3xl bg-ink p-5 text-white lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold [&::-webkit-details-marker]:hidden">
                  Jump to section
                  <Icon name="plus" className="h-4 w-4 transition group-open:rotate-45" />
                </summary>
                <Toc />
              </details>
              <div className="hidden rounded-[2rem] bg-ink p-6 text-white lg:block">
                <p className="px-3 text-xs font-semibold uppercase tracking-[0.2em] text-lime-neon">Jump to section</p>
                <Toc />
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Toc() {
  return (
    <ul className="mt-3 space-y-0.5">
      {sections.map((s) => (
        <li key={s.id}>
          <a href={`#${s.id}`} className="block rounded-xl px-3 py-2 text-sm text-white/65 transition hover:bg-white/10 hover:text-lime-neon">
            {s.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
