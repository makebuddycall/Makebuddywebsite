"use client";

import { useEffect, useRef } from "react";

/**
 * Reveals its children when scrolled into view.
 * variant: up | fade | blur | scale | left | right | clip | lines
 * For "lines", pass `lines={["First line", "Second line"]}` (or nodes) instead of children.
 */
export default function Reveal({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  once = true,
  threshold = 0.18,
  lines,
  className = "",
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          if (once) io.disconnect();
        } else if (!once) {
          el.classList.remove("is-in");
        }
      },
      { threshold, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold]);

  return (
    <Tag
      ref={ref}
      data-reveal={lines ? "lines" : variant}
      className={`reveal ${className}`}
      style={{ "--d": `${delay}s`, ...style }}
      {...rest}
    >
      {lines
        ? lines.map((line, i) => (
            <span key={i} className="line" style={{ "--i": i }}>
              <span>{line}</span>
            </span>
          ))
        : children}
    </Tag>
  );
}
