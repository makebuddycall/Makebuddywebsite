"use client";

/** Card with a soft lime spotlight that follows the cursor. */
export default function Spotlight({ as: Tag = "div", className = "", children, ...rest }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <Tag onMouseMove={onMove} className={`group/spot relative isolate overflow-hidden ${className}`} {...rest}>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{
          background: "radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgba(212,255,31,0.12), transparent 60%)",
        }}
      />
      {children}
    </Tag>
  );
}
