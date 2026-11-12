const paths = {
  arrowUpRight: "M7 17 17 7M8 7h9v9",
  arrowRight: "M5 12h14M13 6l6 6-6 6",
  arrowDown: "M12 5v14M6 13l6 6 6-6",
  phone: "M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z",
  video: "M3 7a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM16 10l5-3v10l-5-3",
  mic: "M12 3a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3zM5 11a7 7 0 0 0 14 0M12 18v3",
  chat: "M4 5h16v11H8l-4 4z",
  heart: "M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z",
  shield: "M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z",
  lock: "M6 11h12v9H6zM8 11V8a4 4 0 0 1 8 0v3",
  users: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20c0-3 2.7-5 6-5s6 2 6 5M16 5.5a3 3 0 0 1 0 5.5M18 15c2 .5 3 2.2 3 5",
  flame: "M12 3c1 3 5 5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-4 2.5-5 .3 1.5 1 2.5 2 3 0-3-1-5.5.5-8z",
  check: "M5 12l5 5L20 7",
  plus: "M12 5v14M5 12h14",
  close: "M6 6l12 12M18 6 6 18",
  camera: "M4 8h3l2-3h6l2 3h3v11H4zM12 17a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z",
  send: "M4 12 20 4l-6 16-2-6z",
  bell: "M6 16v-5a6 6 0 0 1 12 0v5l2 2H4zM10 20a2 2 0 0 0 4 0",
  spark: "M12 3v5M12 16v5M3 12h5M16 12h5",
  chart: "M4 20V10M10 20V4M16 20v-7M22 20H2",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z",
  menu: "M4 8h16M4 16h10",
  home: "M4 11 12 4l8 7v9h-5v-6H9v6H4z",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4 3.6-6 8-6s8 2 8 6",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-4-4",
  back: "M15 5l-7 7 7 7",
  speaker: "M4 10v4h4l5 4V6L8 10zM17 9a4 4 0 0 1 0 6M19.5 6.5a8 8 0 0 1 0 11",
  play: "M8 5v14l11-7z",
  more: "M5 12h.01M12 12h.01M19 12h.01",
  checks: "M2 12l5 5L17 7M12 16l1 1L23 7",
  music: "M9 18V5l11-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM20 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
  moon: "M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z",
  game: "M7 9v4M5 11h4M15 10h.01M18 12h.01M6 6h12a4 4 0 0 1 4 4v3a4 4 0 0 1-7 2.6L14 15h-4l-1 .6A4 4 0 0 1 2 13v-3a4 4 0 0 1 4-4z",
  card: "M3 6h18v12H3zM3 10h18M7 15h3",
  device: "M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM11 18h2",
  pin:"M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  userPlus: "M10 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM3 21c0-4 3.1-6 7-6 1.2 0 2.3.2 3.3.5M19 14v6M16 17h6",
};

export default function Icon({ name, className = "h-5 w-5", strokeWidth = 1.7 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={name === "play" ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={name === "play" ? 0 : strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}

export function Star({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />
    </svg>
  );
}

/** Hand-drawn style mood face. level: 0 (low) … 4 (great) */
export function Face({ level = 2, className = "h-6 w-6", fill = "#F7F6EE" }) {
  const curve = [-4, -2, 0, 3, 5][level];
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill={fill} stroke="#111114" strokeWidth="1.5" />
      <circle cx="8.7" cy="10" r="1.3" fill="#111114" />
      <circle cx="15.3" cy="10" r="1.3" fill="#111114" />
      <path d={`M8 15.2 Q12 ${15.2 + curve} 16 15.2`} fill="none" stroke="#111114" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
