/*
 * Make Buddy app screens.
 * All screens are designed on a 300px-wide canvas; PhoneFrame scales them to fit.
 */
import { Avatar } from "../PhoneFrame";
import { BuddyIcon } from "../Logo";
import Icon, { Face } from "../Icons";

/* ---------------------------------------------------------------- shell */

function StatusBar({ dark = false }) {
  const c = dark ? "bg-white" : "bg-ink";
  return (
    <div className={`flex h-[46px] shrink-0 items-center justify-between px-[26px] pt-1 text-[13px] font-semibold ${dark ? "text-white" : "text-ink"}`}>
      <span>9:41</span>
      <span className="flex items-center gap-1.5">
        <span className="flex items-end gap-[2px]">
          {[4, 6, 8, 10].map((h) => (
            <span key={h} className={`w-[3px] rounded-sm ${c}`} style={{ height: h }} />
          ))}
        </span>
        <svg viewBox="0 0 16 12" className="h-[11px] w-[15px]" fill="currentColor" aria-hidden="true">
          <path d="M8 2.5c2.3 0 4.4.9 6 2.4l1.2-1.3A10.4 10.4 0 0 0 8 .7 10.4 10.4 0 0 0 .8 3.6L2 4.9a8.6 8.6 0 0 1 6-2.4zm0 3.6c1.3 0 2.5.5 3.4 1.3l1.3-1.3A6.6 6.6 0 0 0 8 4.3a6.6 6.6 0 0 0-4.7 1.8l1.3 1.3c.9-.8 2.1-1.3 3.4-1.3zM8 9.6 6 7.8c.6-.5 1.3-.8 2-.8s1.4.3 2 .8z" />
        </svg>
        <span className={`relative flex h-[12px] w-[24px] items-center rounded-[4px] border p-[1.5px] ${dark ? "border-white/50" : "border-ink/40"}`}>
          <span className={`h-full w-[75%] rounded-[2px] ${c}`} />
        </span>
      </span>
    </div>
  );
}

const tabs = [
  ["home", "Home"],
  ["chat", "Chats"],
  ["spark", "Unwind"],
  ["users", "Circles"],
  ["user", "Me"],
];

function TabBar({ active }) {
  return (
    <div className="shrink-0 border-t border-ink/[0.06] bg-white/90 px-3 pb-[22px] pt-2 backdrop-blur">
      <div className="flex items-center justify-between">
        {tabs.map(([icon, label]) => {
          const on = label === active;
          return (
            <span key={label} className={`flex w-12 flex-col items-center gap-1 ${on ? "text-ink" : "text-ink/35"}`}>
              <span className={`grid h-8 w-12 place-items-center rounded-full ${on ? "bg-lime-neon" : ""}`}>
                <Icon name={icon} className="h-[18px] w-[18px]" strokeWidth={on ? 2.1 : 1.8} />
              </span>
              <span className={`text-[10px] ${on ? "font-semibold" : ""}`}>{label}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

function HomeIndicator({ dark = false }) {
  return (
    <span className={`absolute bottom-[7px] left-1/2 z-30 h-[5px] w-[110px] -translate-x-1/2 rounded-full ${dark ? "bg-white/80" : "bg-ink/85"}`} />
  );
}

function Screen({ tab, dark = false, flexBody = false, className = "bg-cream text-ink", children }) {
  return (
    <div className={`relative flex h-full flex-col overflow-hidden ${className}`}>
      <StatusBar dark={dark} />
      <div className={`relative min-h-0 flex-1 overflow-hidden ${flexBody ? "flex flex-col" : ""}`}>{children}</div>
      {tab && <TabBar active={tab} />}
      <HomeIndicator dark={dark} />
    </div>
  );
}

function IconBtn({ name, className = "bg-white text-ink shadow-sm ring-1 ring-ink/5" }) {
  return (
    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${className}`}>
      <Icon name={name} className="h-[17px] w-[17px]" />
    </span>
  );
}

/* ---------------------------------------------------------------- Home */

export function HomeScreen() {
  const buddies = [
    { name: "Ava Lee", color: "bg-petal", note: "Available to talk", online: true },
    { name: "Noah Kim", color: "bg-sun", note: "Free after 6pm", online: true },
    { name: "Mia Ross", color: "bg-lime", note: "Last seen 1h ago", online: false },
  ];
  return (
    <Screen tab="Home">
      <div className="flex items-center justify-between px-5 pt-1">
        <div className="flex items-center gap-2.5">
          <Avatar name="Jamie Bell" color="bg-sun" className="h-10 w-10 text-[13px]" />
          <div className="leading-tight">
            <p className="text-[11px] text-ink/50">Good morning</p>
            <p className="text-[16px] font-semibold tracking-tight">Jamie Bell</p>
          </div>
        </div>
        <span className="relative">
          <IconBtn name="bell" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-petal ring-2 ring-white" />
        </span>
      </div>

      <div className="mx-5 mt-4 rounded-[22px] bg-ink p-4 text-white">
        <div className="flex items-center justify-between">
          <p className="text-[11px] text-white/55">Connection score</p>
          <span className="rounded-full bg-lime-neon/15 px-2 py-0.5 text-[10px] font-semibold text-lime-neon">+12 this week</span>
        </div>
        <p className="mt-1 font-display text-[34px] font-semibold leading-none tracking-tight">
          87<span className="text-[18px] text-lime-neon">%</span>
        </p>
        <div className="mt-3 flex h-12 items-end gap-1.5">
          {[38, 62, 44, 80, 56, 96, 70].map((h, i) => (
            <span key={i} className="flex h-full flex-1 flex-col justify-end gap-1">
              <span className={`w-full rounded-[4px] ${i === 5 ? "bg-lime-neon" : "bg-white/20"}`} style={{ height: `${h}%` }} />
            </span>
          ))}
        </div>
        <div className="mt-1.5 flex justify-between px-1 text-[9px] text-white/40">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2 px-5">
        {[
          ["chat", "Chat", "bg-white"],
          ["phone", "Voice", "bg-lime-neon"],
          ["video", "Video", "bg-white"],
          ["heart", "Check-in", "bg-white"],
        ].map(([icon, label, bg]) => (
          <div key={label} className="flex flex-col items-center gap-1.5">
            <span className={`grid h-[52px] w-full place-items-center rounded-2xl ${bg} shadow-sm ring-1 ring-ink/5`}>
              <Icon name={icon} className="h-5 w-5" />
            </span>
            <span className="text-[11px] text-ink/65">{label}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between px-5">
        <p className="text-[14px] font-semibold">Buddies online</p>
        <span className="text-[11px] font-medium text-olive">See all</span>
      </div>
      <div className="mt-2 space-y-2 px-5">
        {buddies.map((b) => (
          <div key={b.name} className="flex items-center gap-3 rounded-2xl bg-white p-2.5 shadow-sm ring-1 ring-ink/5">
            <span className="relative">
              <Avatar name={b.name} color={b.color} className="h-9 w-9 text-[11px]" />
              <span className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full ring-2 ring-white ${b.online ? "bg-lime-deep" : "bg-ink/20"}`} />
            </span>
            <div className="min-w-0 flex-1 leading-tight">
              <p className="text-[13px] font-semibold">{b.name}</p>
              <p className="truncate text-[11px] text-ink/50">{b.note}</p>
            </div>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-paper">
              <Icon name="phone" className="h-4 w-4" />
            </span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-lime-neon">
              <Icon name="video" className="h-4 w-4" />
            </span>
          </div>
        ))}
      </div>
    </Screen>
  );
}

/* ---------------------------------------------------------------- Sign up: connect with buddies */

export function SignupScreen() {
  const buddies = [
    { name: "Ava Lee", color: "bg-petal", match: 94, tags: "Hiking · Books", added: true },
    { name: "Noah Kim", color: "bg-sun", match: 89, tags: "Indie music · Cooking", added: true },
    { name: "Mia Ross", color: "bg-lime", match: 86, tags: "Yoga · Books" },
    { name: "Leo Park", color: "bg-sky-300", match: 81, tags: "Hiking · Film nights" },
  ];
  return (
    <Screen flexBody>
      {/* progress */}
      <div className="flex shrink-0 items-center gap-3 px-5 pt-2">
        <Icon name="back" className="h-5 w-5 text-ink/60" strokeWidth={2} />
        <div className="flex flex-1 gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className={`h-1.5 flex-1 rounded-full ${i < 2 ? "bg-ink" : "bg-lime-deep"}`} />
          ))}
        </div>
        <span className="text-[11px] font-semibold text-ink/50">3 / 3</span>
      </div>

      <div className="shrink-0 px-5 pt-5">
        <p className="font-display text-[24px] font-semibold leading-[1.1] tracking-tight">Meet your first buddies</p>
        <p className="mt-1.5 text-[12px] leading-snug text-ink/55">Kind people who share what you love. Connect to start chatting.</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["Hiking", "Books", "Indie music"].map((t) => (
            <span key={t} className="flex items-center gap-1 rounded-full bg-ink px-2.5 py-1 text-[10px] font-semibold text-white">
              <Icon name="check" className="h-3 w-3 text-lime-neon" strokeWidth={2.6} />
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 min-h-0 flex-1 space-y-2 overflow-hidden px-5">
        {buddies.map((b) => (
          <div key={b.name} className="flex items-center gap-3 rounded-2xl bg-white p-2.5 shadow-sm ring-1 ring-ink/5">
            <Avatar name={b.name} color={b.color} className="h-10 w-10 text-[12px]" />
            <div className="min-w-0 flex-1 leading-tight">
              <p className="flex items-center gap-1.5 whitespace-nowrap text-[13px] font-semibold">
                <span className="truncate">{b.name}</span>
                <span className="rounded-full bg-lime-soft px-1.5 py-0.5 text-[9px] font-bold text-olive">{b.match}%</span>
              </p>
              <p className="mt-0.5 truncate text-[11px] text-ink/50">{b.tags}</p>
            </div>
            {b.added ? (
              <span className="flex items-center gap-1 rounded-full bg-lime-neon px-2.5 py-1.5 text-[11px] font-semibold">
                <Icon name="check" className="h-3 w-3" strokeWidth={2.6} /> Added
              </span>
            ) : (
              <span className="flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[11px] font-semibold ring-1 ring-ink/15">
                <Icon name="plus" className="h-3 w-3" strokeWidth={2.6} /> Add
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="shrink-0 px-5 pb-[30px] pt-3">
        <span className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink text-[14px] font-semibold text-white">
          Start chatting with 2 buddies
          <span className="grid h-6 w-6 place-items-center rounded-full bg-lime-neon text-ink">
            <Icon name="arrowRight" className="h-3.5 w-3.5" strokeWidth={2.2} />
          </span>
        </span>
        <p className="mt-2 text-center text-[10px] text-ink/45">You can find more buddies anytime</p>
      </div>
    </Screen>
  );
}

/* ---------------------------------------------------------------- Chat */

export function ChatScreen() {
  const wave = [6, 12, 18, 10, 16, 22, 14, 8, 18, 12, 20, 9, 15, 7, 12, 17, 9, 6];
  return (
    <Screen flexBody className="bg-cream text-ink">
      {/* header */}
      <div className="flex shrink-0 items-center gap-2.5 border-b border-ink/[0.06] px-4 pb-3 pt-1">
        <Icon name="back" className="h-5 w-5 text-ink/70" strokeWidth={2} />
        <span className="relative">
          <Avatar name="Noah Kim" color="bg-sun" className="h-9 w-9 text-[11px]" />
          <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-lime-deep ring-2 ring-cream" />
        </span>
        <div className="flex-1 leading-tight">
          <p className="text-[14px] font-semibold">Noah Kim</p>
          <p className="text-[11px] text-olive">online</p>
        </div>
        <IconBtn name="phone" />
        <IconBtn name="video" className="bg-lime-neon text-ink" />
      </div>

      {/* messages */}
      <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden px-4 py-3 text-[12.5px] leading-snug">
        <span className="self-center rounded-full bg-ink/5 px-2.5 py-1 text-[10px] font-medium text-ink/50">Today</span>

        <div className="flex items-center gap-2.5 rounded-2xl bg-lime-soft p-2.5">
          <BuddyIcon className="h-7 w-7" />
          <p className="text-[11px] leading-snug text-olive">It&apos;s been 5 days since you and Noah talked. Say hi?</p>
        </div>

        <p className="max-w-[78%] self-start rounded-[18px] rounded-bl-md bg-white px-3.5 py-2 shadow-sm">
          Hey! How did the interview go?
        </p>
        <p className="max-w-[78%] self-end rounded-[18px] rounded-br-md bg-ink px-3.5 py-2 text-white">
          Nailed it I think! Thanks for the pep talk yesterday
        </p>

        {/* voice note */}
        <div className="flex w-[78%] items-center gap-2.5 self-start rounded-[18px] rounded-bl-md bg-white px-3 py-2 shadow-sm">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink text-lime-neon">
            <Icon name="play" className="h-3 w-3" strokeWidth={0} />
          </span>
          <span className="flex flex-1 items-center gap-[2px]">
            {wave.map((h, i) => (
              <span key={i} className={`w-[3px] rounded-full ${i < 7 ? "bg-ink" : "bg-ink/25"}`} style={{ height: h }} />
            ))}
          </span>
          <span className="text-[10px] text-ink/50">0:14</span>
        </div>

        <p className="max-w-[78%] self-start rounded-[18px] rounded-bl-md bg-white px-3.5 py-2 shadow-sm">
          Celebration video call tonight?
        </p>
        <div className="flex flex-col items-end gap-0.5 self-end">
          <p className="rounded-[18px] rounded-br-md bg-ink px-3.5 py-2 text-white">Yes! 8pm works</p>
          <span className="flex items-center gap-1 text-[9px] text-ink/40">
            Read 9:41 <Icon name="checks" className="h-3 w-3 text-lime-deep" strokeWidth={2} />
          </span>
        </div>

        <span className="flex w-fit items-center gap-1 self-start rounded-[18px] rounded-bl-md bg-white px-3.5 py-3 shadow-sm">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink/40" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink/40 [animation-delay:.15s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink/40 [animation-delay:.3s]" />
        </span>
      </div>

      {/* composer */}
      <div className="flex shrink-0 items-center gap-2 px-3 pb-[26px] pt-2">
        <IconBtn name="plus" />
        <span className="flex h-9 flex-1 items-center rounded-full bg-white px-3.5 text-[12px] text-ink/40 shadow-sm ring-1 ring-ink/5">
          Message…
        </span>
        <IconBtn name="mic" className="bg-ink text-lime-neon" />
      </div>
    </Screen>
  );
}

/* ---------------------------------------------------------------- Circles */

export function CircleScreen() {
  const circles = [
    { name: "Book Nook", meta: "8 members · 3 new messages", color: "bg-petal", badge: "3" },
    { name: "New in Town", meta: "24 members · active now", color: "bg-sun", badge: "12" },
    { name: "Mindful Mornings", meta: "16 members · 2h ago", color: "bg-sky-300" },
  ];
  return (
    <Screen tab="Circles">
      <div className="flex items-center justify-between px-5 pt-1">
        <p className="font-display text-[22px] font-semibold tracking-tight">Circles</p>
        <div className="flex gap-2">
          <IconBtn name="search" />
          <IconBtn name="plus" className="bg-ink text-lime-neon" />
        </div>
      </div>

      <div className="mx-5 mt-3 grid grid-cols-2 rounded-full bg-white p-1 text-[12px] font-semibold shadow-sm ring-1 ring-ink/5">
        <span className="rounded-full bg-ink py-1.5 text-center text-white">My circles</span>
        <span className="py-1.5 text-center text-ink/50">Discover</span>
      </div>

      {/* live group call */}
      <div className="relative mx-5 mt-4 overflow-hidden rounded-[22px] bg-ink p-4 text-white">
        <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-lime-neon/25 blur-2xl" />
        <p className="relative flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-lime-neon">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime-neon" /> Live now
        </p>
        <p className="relative mt-1.5 text-[15px] font-semibold">Sunday Hikers</p>
        <p className="relative text-[11px] text-white/55">Group video call · 12 members</p>
        <div className="relative mt-3 flex items-center justify-between">
          <div className="flex -space-x-2">
            {[
              ["Ava Lee", "bg-petal"],
              ["Noah Kim", "bg-sun"],
              ["Mia Ross", "bg-lime"],
              ["Leo Park", "bg-sky-300"],
            ].map(([n, c]) => (
              <Avatar key={n} name={n} color={c} className="h-8 w-8 text-[10px] ring-2 ring-ink" />
            ))}
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-[10px] font-semibold ring-2 ring-ink">+8</span>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-lime-neon px-3.5 py-2 text-[12px] font-semibold text-ink">
            <Icon name="video" className="h-3.5 w-3.5" /> Join
          </span>
        </div>
      </div>

      <p className="mt-4 px-5 text-[14px] font-semibold">Your circles</p>
      <div className="mt-2 space-y-2 px-5">
        {circles.map((c) => (
          <div key={c.name} className="flex items-center gap-3 rounded-2xl bg-white p-2.5 shadow-sm ring-1 ring-ink/5">
            <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${c.color}`}>
              <Icon name="users" className="h-[18px] w-[18px]" />
            </span>
            <div className="min-w-0 flex-1 leading-tight">
              <p className="text-[13px] font-semibold">{c.name}</p>
              <p className="truncate text-[11px] text-ink/50">{c.meta}</p>
            </div>
            {c.badge ? (
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-lime-neon px-1.5 text-[10px] font-bold">{c.badge}</span>
            ) : (
              <Icon name="arrowRight" className="h-4 w-4 text-ink/30" />
            )}
          </div>
        ))}
      </div>
    </Screen>
  );
}

/* ---------------------------------------------------------------- Unwind: fun & calm with buddies */

export function UnwindScreen() {
  const activities = [
    { icon: "game", title: "Trivia night", meta: "3 buddies playing", bg: "bg-sun" },
    { icon: "music", title: "Listen together", meta: "Lo-fi with Noah", bg: "bg-petal" },
    { icon: "play", title: "Watch party", meta: "Starts 8:00 pm", bg: "bg-sky-300" },
    { icon: "moon", title: "Sleep stories", meta: "12 min · calm", bg: "bg-lime" },
  ];
  return (
    <Screen tab="Unwind">
      <div className="flex items-center justify-between px-5 pt-1">
        <div className="leading-tight">
          <p className="font-display text-[22px] font-semibold tracking-tight">Unwind</p>
          <p className="text-[11px] text-ink/50">Fun, calm &amp; happy moments with buddies</p>
        </div>
        <IconBtn name="search" />
      </div>

      {/* calm your mind */}
      <div className="relative mx-5 mt-4 overflow-hidden rounded-[24px] bg-ink p-4 text-white">
        <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-lime-neon/20 blur-2xl" />
        <div className="relative flex items-center gap-4">
          {/* breathing rings */}
          <div className="relative grid h-[92px] w-[92px] shrink-0 place-items-center">
            <span className="absolute inset-0 animate-ping rounded-full bg-lime-neon/10 [animation-duration:3s]" />
            <span className="absolute inset-[6px] rounded-full bg-lime-neon/15" />
            <span className="absolute inset-[16px] rounded-full bg-lime-neon/30" />
            <span className="relative grid h-[44px] w-[44px] place-items-center rounded-full bg-lime-neon text-[9px] font-bold uppercase leading-tight tracking-wide text-ink">
              Breathe
            </span>
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-lime-neon">Calm your mind</p>
            <p className="mt-1 text-[15px] font-semibold leading-snug">5-min breathing together</p>
            <div className="mt-2 flex items-center gap-1.5">
              <Avatar name="Ava Lee" color="bg-petal" className="h-6 w-6 text-[9px] ring-2 ring-ink" />
              <span className="text-[11px] text-white/60">Ava is joining</span>
            </div>
          </div>
        </div>
        <span className="relative mt-3 flex h-10 w-full items-center justify-center gap-1.5 rounded-full bg-lime-neon text-[13px] font-semibold text-ink">
          <Icon name="play" className="h-3.5 w-3.5" strokeWidth={0} /> Start together
        </span>
      </div>

      {/* activities */}
      <div className="mt-4 flex items-center justify-between px-5">
        <p className="text-[14px] font-semibold">Play &amp; chill together</p>
        <span className="text-[11px] font-medium text-olive">See all</span>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2 px-5">
        {activities.map((a) => (
          <div key={a.title} className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-ink/5">
            <span className={`grid h-9 w-9 place-items-center rounded-xl ${a.bg}`}>
              <Icon name={a.icon} className="h-[18px] w-[18px]" strokeWidth={a.icon === "play" ? 0 : 1.8} />
            </span>
            <p className="mt-2.5 text-[13px] font-semibold leading-tight">{a.title}</p>
            <p className="mt-0.5 text-[10px] text-ink/50">{a.meta}</p>
          </div>
        ))}
      </div>

    </Screen>
  );
}

/* ---------------------------------------------------------------- Video call */

export function CallScreen() {
  return (
    <Screen dark flexBody className="bg-buddy-radial text-white">
      {/* top bar */}
      <div className="flex shrink-0 items-center justify-between px-4 pt-1">
        <IconBtn name="back" className="bg-white/10 text-white ring-1 ring-white/10 backdrop-blur" />
        <div className="text-center leading-tight">
          <p className="text-[14px] font-semibold">Ava Lee</p>
          <p className="flex items-center justify-center gap-1 text-[11px] text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-neon" /> 12:48 · HD
          </p>
        </div>
        <IconBtn name="userPlus" className="bg-white/10 text-white ring-1 ring-white/10 backdrop-blur" />
      </div>

      {/* self view */}
      <div className="absolute right-4 top-[62px] z-10 grid h-[96px] w-[68px] place-items-center rounded-2xl bg-sun shadow-xl ring-2 ring-white/20">
        <Avatar name="Jamie Bell" color="bg-sun" className="h-10 w-10 text-[13px] ring-2 ring-ink/10" />
        <span className="absolute bottom-1.5 left-1.5 rounded-full bg-ink/60 px-1.5 py-0.5 text-[8px] font-semibold">You</span>
      </div>

      {/* remote */}
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center pb-4">
        <div className="relative">
          <span className="absolute -inset-5 animate-ping rounded-full bg-lime-neon/10" />
          <span className="absolute -inset-2.5 rounded-full ring-1 ring-lime-neon/40" />
          <Avatar name="Ava Lee" color="bg-petal" className="relative h-[112px] w-[112px] text-[34px]" />
        </div>
        <p className="mt-6 font-display text-[22px] font-semibold tracking-tight">Ava Lee</p>
        <p className="mt-1 flex items-center gap-1 text-[12px] text-white/60">
          <Icon name="flame" className="h-3.5 w-3.5 text-sun" /> 42-day friendship streak
        </p>
      </div>

      {/* starter */}
      <div className="mx-4 shrink-0 rounded-[20px] bg-white/[0.08] p-3.5 ring-1 ring-white/10 backdrop-blur">
        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">Conversation starter</p>
        <p className="mt-1 font-serif text-[16px] italic leading-snug">“What&apos;s one small thing that made you smile today?”</p>
      </div>

      {/* controls */}
      <div className="flex shrink-0 items-start justify-between px-6 pb-[30px] pt-5">
        {[
          ["mic", "Mute", "bg-white/10"],
          ["video", "Camera", "bg-white/10"],
          ["speaker", "Speaker", "bg-white/10"],
          ["close", "End", "bg-petal text-ink"],
        ].map(([icon, label, bg]) => (
          <span key={label} className="flex flex-col items-center gap-1.5">
            <span className={`grid h-[50px] w-[50px] place-items-center rounded-full ring-1 ring-white/10 ${bg}`}>
              <Icon name={icon} className="h-5 w-5" strokeWidth={icon === "close" ? 2.4 : 1.8} />
            </span>
            <span className="text-[10px] text-white/60">{label}</span>
          </span>
        ))}
      </div>
    </Screen>
  );
}
