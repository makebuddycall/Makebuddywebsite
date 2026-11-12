"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Icon from "./Icons";

/* Desktop navbar links */
const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/data-safety", label: "Data Safety" },
];

/* Full-screen mobile menu */
const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/#features", label: "Features" },
  { href: "/#wellness", label: "Wellness" },
  { href: "/#how", label: "How it works" },
  { href: "/#faq", label: "FAQ" },
];
const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Details" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/data-safety", label: "Data Safety" },
  { href: "/delete-account", label: "Delete Account" },
];

export default function Navbar({ dark = false }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y < 320 || y < lastY.current - 4) setHidden(false);
      else if (y > lastY.current + 4) setHidden(true);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open; close with Escape.
  useEffect(() => {
    const html = document.documentElement;
    if (open) {
      window.__lenis?.stop();
      html.style.overflow = "hidden";
    } else {
      window.__lenis?.start();
      html.style.overflow = "";
    }
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close the menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  const light = dark && !scrolled;
  const isActive = (href) => !href.includes("#") && href === pathname;

  return (
    <>
      <header
        className={`container-x fixed inset-x-0 top-0 z-50 pt-3 transition-transform duration-500 ease-premium sm:pt-4 ${
          hidden ? "-translate-y-[130%]" : "translate-y-0"
        }`}
      >
        <nav
          aria-label="Main"
          className={`relative flex items-center justify-between gap-4 rounded-full py-2 pl-4 pr-2 transition-all duration-500 ease-premium sm:pl-5 ${
            scrolled
              ? "bg-white/75 shadow-[0_8px_30px_-12px_rgba(17,17,20,0.25)] ring-1 ring-ink/5 backdrop-blur-2xl"
              : "ring-1 ring-transparent"
          }`}
        >
          <Logo dark={light} />

          <ul className="hidden items-center gap-0.5 lg:flex xl:absolute xl:left-1/2 xl:-translate-x-1/2">
            {navLinks.map((l) => {
              const active = isActive(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-medium transition-colors xl:px-3.5 ${
                      light
                        ? active ? "text-white" : "text-white/65 hover:text-white"
                        : active ? "text-ink" : "text-ink/55 hover:text-ink"
                    }`}
                  >
                    {l.label}
                    <span
                      className={`absolute inset-x-2.5 bottom-1 h-px origin-left transition-transform duration-500 ease-premium group-hover:scale-x-100 xl:inset-x-3.5 ${
                        active ? "scale-x-100" : "scale-x-0"
                      } ${light ? "bg-lime-neon" : "bg-ink"}`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/#download"
              className={`group hidden items-center gap-2 rounded-full py-2 pl-4 pr-2 text-[13px] font-semibold transition sm:inline-flex ${
                light ? "bg-white text-ink" : "bg-ink text-white"
              }`}
            >
              Get the app
              <span className={`btn-arrow ${light ? "bg-ink text-lime-neon" : "bg-lime-neon text-ink"}`}>
                <Icon name="arrowUpRight" className="h-3.5 w-3.5" strokeWidth={2.2} />
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className={`grid h-11 w-11 place-items-center rounded-full transition lg:hidden ${
                light ? "bg-white/10 text-white ring-1 ring-white/20" : "bg-ink text-white"
              }`}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Icon name="menu" className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
        </nav>
      </header>

      {/* ---------- Full-screen mobile menu ---------- */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        data-lenis-prevent
        className={`fixed inset-0 z-[65] flex flex-col overflow-hidden bg-ink text-white transition-[clip-path] duration-700 ease-premium lg:hidden ${
          open ? "[clip-path:circle(150%_at_calc(100%_-_3rem)_2.5rem)]" : "pointer-events-none [clip-path:circle(0%_at_calc(100%_-_3rem)_2.5rem)]"
        }`}
      >
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-lime-neon/20 blur-[120px]" />
        <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-petal/10 blur-[100px]" />

        {/* top bar */}
        <div className="container-x relative flex items-center justify-between pt-3 sm:pt-4">
          <div className="flex items-center py-2 pl-4 sm:pl-5" onClick={() => setOpen(false)}>
            <Logo dark />
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mr-2 grid h-11 w-11 place-items-center rounded-full bg-lime-neon text-ink"
            aria-label="Close menu"
            tabIndex={open ? 0 : -1}
          >
            <Icon name="close" className="h-5 w-5" strokeWidth={2.2} />
          </button>
        </div>

        {/* links */}
        <div className="container-x relative flex flex-1 flex-col overflow-y-auto pb-8 pt-8 sm:pt-12">
          <p className="kicker text-white/40">Menu</p>
          <ol className="mt-5">
            {exploreLinks.map((l, i) => (
              <li
                key={l.href}
                className={`border-b border-white/10 transition-all duration-700 ease-premium ${
                  open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${150 + i * 55}ms` : "0ms" }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="group flex items-baseline gap-4 py-3 sm:py-4"
                >
                  <span className="w-6 text-xs text-white/35">0{i + 1}</span>
                  <span className="h-display text-[2.4rem] leading-none transition-colors group-hover:text-lime-neon sm:text-6xl">
                    {l.label}
                  </span>
                </Link>
              </li>
            ))}
          </ol>

          <div
            className={`mt-10 grid gap-8 transition-all duration-700 ease-premium sm:grid-cols-2 ${
              open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: open ? "520ms" : "0ms" }}
          >
            <div>
              <p className="kicker text-white/40">Company</p>
              <ul className="mt-4 space-y-3">
                {companyLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      tabIndex={open ? 0 : -1}
                      aria-current={isActive(l.href) ? "page" : undefined}
                      className={`inline-flex items-center gap-2 text-lg transition hover:text-lime-neon ${
                        isActive(l.href) ? "text-lime-neon" : "text-white/80"
                      }`}
                    >
                      {l.label}
                      <Icon name="arrowUpRight" className="h-4 w-4 text-white/30" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="kicker text-white/40">Say hello</p>
              <a href="mailto:hello@makebuddy.app" tabIndex={open ? 0 : -1} className="mt-4 block text-lg text-white/80 hover:text-lime-neon">
                hello@makebuddy.app
              </a>
              <p className="mt-2 text-sm text-white/45">Chat, voice &amp; video calls — a wellness app for real connection.</p>
            </div>
          </div>

          <div
            className={`mt-auto pt-10 transition-all duration-700 ease-premium ${open ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: open ? "600ms" : "0ms" }}
          >
            <Link href="/#download" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="btn-lime group w-full justify-between">
              Download Make Buddy — free
              <span className="btn-arrow bg-ink text-lime-neon">
                <Icon name="arrowUpRight" className="h-3.5 w-3.5" strokeWidth={2.2} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
