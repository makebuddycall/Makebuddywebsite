"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

/** Every app screen is designed at this width and scaled to fit the frame, so it looks identical at any size. */
export const SCREEN_W = 300;

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function PhoneFrame({ children, className = "w-[240px] sm:w-[270px]" }) {
  const screen = useRef(null);
  const [box, setBox] = useState(null);

  useIsoLayoutEffect(() => {
    const el = screen.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (!w || !h) return;
      const s = w / SCREEN_W;
      setBox({ s, h: h / s });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      className={`relative aspect-[9/19] rounded-[2.8rem] bg-gradient-to-b from-[#2b2b31] to-[#0b0b0d] p-[7px] shadow-phone ${className}`}
    >
      {/* side buttons */}
      <span className="absolute -left-[2px] top-[22%] h-10 w-[3px] rounded-l bg-[#2b2b31]" />
      <span className="absolute -left-[2px] top-[32%] h-14 w-[3px] rounded-l bg-[#2b2b31]" />
      <span className="absolute -right-[2px] top-[28%] h-16 w-[3px] rounded-r bg-[#2b2b31]" />

      <div ref={screen} className="relative h-full w-full overflow-hidden rounded-[2.35rem] bg-cream ring-1 ring-black">
        <div
          className="absolute left-0 top-0 origin-top-left transition-opacity duration-300"
          style={{
            width: SCREEN_W,
            height: box ? box.h : 640,
            transform: `scale(${box ? box.s : 1})`,
            opacity: box ? 1 : 0,
          }}
        >
          {/* dynamic island (scaled with the screen) */}
          <div className="absolute left-1/2 top-[11px] z-30 h-[28px] w-[94px] -translate-x-1/2 rounded-full bg-black" />
          {children}
        </div>
      </div>
    </div>
  );
}

export function Avatar({ name, color = "bg-petal", className = "h-9 w-9 text-xs" }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
  return (
    <span className={`inline-grid shrink-0 place-items-center rounded-full font-semibold text-ink ${color} ${className}`}>
      {initials}
    </span>
  );
}
