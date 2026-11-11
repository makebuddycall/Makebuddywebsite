"use client";

import { useEffect, useRef } from "react";

/**
 * Paragraph whose words light up one by one as it scrolls through the viewport.
 * Wrap words in *asterisks* to render them as serif-italic lime accents.
 */
export default function ScrollWords({ text, className = "" }) {
  const ref = useRef(null);
  const words = text.split(" ").map((w) => {
    const accent = w.startsWith("*");
    return { accent, text: w.replace(/\*/g, "") };
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll("[data-w]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      spans.forEach((s) => (s.style.opacity = 1));
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.8 - r.top) / (r.height + vh * 0.3)));
      const lit = p * spans.length;
      spans.forEach((s, i) => {
        const o = Math.min(1, Math.max(0.14, lit - i + 0.14));
        s.style.opacity = o.toFixed(2);
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [text]);

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i}>
          <span
            data-w
            className={`transition-opacity duration-300 ${w.accent ? "serif-accent text-olive" : ""}`}
            style={{ opacity: 0.14 }}
          >
            {w.text}
          </span>{" "}
        </span>
      ))}
    </p>
  );
}
