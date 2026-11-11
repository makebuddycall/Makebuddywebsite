export default function StoreButtons({ dark = true, className = "" }) {
  const base = dark
    ? "bg-ink text-white hover:bg-ink-soft"
    : "bg-white text-ink hover:bg-cream ring-1 ring-ink/10";
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a href="#" className={`inline-flex items-center gap-3 rounded-2xl px-4 py-2.5 transition hover:-translate-y-0.5 ${base}`}>
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
          <path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.87-.76-1.47.02-2.83.86-3.59 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.06 1.6 2.24 2.73 2.2 1.1-.04 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.41 1.2-2.47-.03-.01-2.3-.88-2.32-3.5zM14.2 6.13c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.54 1.31-.56.64-1.05 1.68-.92 2.67.97.08 1.96-.49 2.56-1.22z" />
        </svg>
        <span className="text-left leading-tight">
          <span className="block text-[10px] opacity-70">Download on the</span>
          <span className="block text-sm font-semibold">App Store</span>
        </span>
      </a>
      <a href="#" className={`inline-flex items-center gap-3 rounded-2xl px-4 py-2.5 transition hover:-translate-y-0.5 ${base}`}>
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
          <path fill="#D4FF1F" d="M3.6 2.3 13.5 12l-9.9 9.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1z" />
          <path fill="#FF7AB8" d="m16.8 8.7-3.3 3.3-9.9-9.7c.2-.1.6-.1 1 .1l12.2 6.3z" />
          <path fill="#FFC400" d="m20.4 10.6c.8.5.8 1.7 0 2.2l-3.6 1.9-3.3-2.7 3.3-3.3 3.6 1.9z" />
          <path fill="#8DB80F" d="M13.5 12l3.3 2.7-12.2 7.1c-.4.2-.8.2-1 0L13.5 12z" />
        </svg>
        <span className="text-left leading-tight">
          <span className="block text-[10px] opacity-70">Get it on</span>
          <span className="block text-sm font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}
