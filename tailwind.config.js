/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        lime: { DEFAULT: "#C6EC4A", neon: "#D4FF1F", soft: "#EEF8C8", deep: "#8DB80F" },
        ink: { DEFAULT: "#111114", soft: "#1C1C21", line: "#2A2A31" },
        plum: "#1F1A33",
        olive: "#5C7A12",
        petal: "#FF7AB8",
        sun: "#FFC400",
        cream: "#F7F6EE",
        paper: "#F4F3EC",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      backgroundImage: {
        "buddy-gradient": "linear-gradient(160deg, #1F1A33 0%, #3D4A1C 38%, #8DB80F 72%, #D4FF1F 100%)",
        "buddy-radial":
          "radial-gradient(120% 90% at 75% 115%, #D4FF1F 0%, #9BC714 18%, #4A5E14 40%, #22202F 68%, #111114 100%)",
        "buddy-soft": "linear-gradient(180deg, #F3FBD6 0%, #FFFFFF 100%)",
        "lime-gradient": "linear-gradient(135deg, #D4FF1F 0%, #C6EC4A 50%, #8DB80F 100%)",
      },
      boxShadow: {
        card: "0 1px 0 rgba(255,255,255,0.6) inset, 0 20px 50px -24px rgba(17,17,20,0.25)",
        glow: "0 20px 60px -15px rgba(198,236,74,0.55)",
        phone: "0 50px 100px -30px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        "marquee-rev": { from: { transform: "translateX(-50%)" }, to: { transform: "translateX(0)" } },
        scrollcue: { "0%": { transform: "translateY(-100%)" }, "100%": { transform: "translateY(200%)" } },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "marquee-rev": "marquee-rev 45s linear infinite",
        scrollcue: "scrollcue 1.8s cubic-bezier(.6,0,.4,1) infinite",
      },
      transitionTimingFunction: { premium: "cubic-bezier(0.22, 1, 0.36, 1)" },
    },
  },
  plugins: [],
};
