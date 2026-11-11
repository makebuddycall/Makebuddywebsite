import { Inter, Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import SmoothScroll from "@/components/motion/SmoothScroll";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: "Make Buddy — The social wellness app for chat, voice & video calls",
  description:
    "Make Buddy is a social wellness app. Chat, voice call and video call with friends, make new connections and check in on your mood — for a happier, less lonely you.",
};

export const viewport = { themeColor: "#111114" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${serif.variable}`}>
      <head>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;filter:none!important;clip-path:none!important}.line>span{transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="grain font-sans">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
