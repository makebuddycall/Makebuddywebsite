import Link from "next/link";

/** The Make Buddy mascot, recreated as an inline SVG so it stays crisp at any size. */
export function BuddyMark({ className = "h-9 w-9", smile = "#C6EC4A" }) {
  return (
    <svg viewBox="-10 -30 364 360" className={className} aria-hidden="true">
      <circle cx="88" cy="87" r="88" fill="#18181C" />
      <circle cx="258" cy="87" r="86" fill="#18181C" />
      <rect x="0" y="87" width="344" height="233" fill="#18181C" />
      <circle cx="122" cy="160" r="44" fill="#F7F3E8" />
      <circle cx="129" cy="158" r="19" fill="#18181C" />
      <circle cx="207" cy="135" r="37" fill="#F7F3E8" />
      <circle cx="213" cy="132" r="17" fill="#18181C" />
      <path
        d="M78 230 C140 280 230 280 262 225 C278 195 282 160 280 117"
        fill="none"
        stroke={smile}
        strokeWidth="13"
        strokeLinecap="round"
      />
      <g transform="translate(74 20) rotate(20)" fill="#FF7AB8">
        <circle cx="0" cy="-22" r="23" />
        <circle cx="22" cy="0" r="23" />
        <circle cx="0" cy="22" r="23" />
        <circle cx="-22" cy="0" r="23" />
      </g>
      <rect x="66" y="12" width="16" height="16" rx="3" transform="rotate(20 74 20)" fill="#FFC400" />
    </svg>
  );
}

/** App-icon version: mascot on a lime rounded tile. */
export function BuddyIcon({ className = "h-10 w-10" }) {
  return (
    <span className={`inline-grid shrink-0 place-items-center rounded-[28%] bg-lime-gradient ${className}`}>
      <BuddyMark className="h-[72%] w-[72%]" />
    </span>
  );
}

export default function Logo({ dark = false }) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Make Buddy home">
      <BuddyIcon className="h-9 w-9" />
      <span className={`font-display text-lg font-bold tracking-tight ${dark ? "text-white" : "text-ink"}`}>
        Make Buddy
      </span>
    </Link>
  );
}
