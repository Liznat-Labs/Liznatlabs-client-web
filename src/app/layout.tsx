import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Sora, Space_Grotesk } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["200", "300", "400", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500"],
});

// Fonts of the original homepage hero
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["700"],
  style: ["normal", "italic"],
});

const title = "Liznat Labs — AI, Enterprise Technology & Engineering Talent";
const description =
  "Liznat Labs is a deep tech studio in Bengaluru building production AI applications, enterprise IT solutions and dedicated engineering teams for businesses in India and worldwide.";

export const metadata: Metadata = {
  title: { default: title, template: "%s — Liznat Labs" },
  description,
  keywords: [
    "AI development company India",
    "AI agents",
    "enterprise IT solutions",
    "IT staffing Bengaluru",
    "custom software",
    "RAG",
    "voice AI",
    "Bengaluru",
  ],
  authors: [{ name: "Liznat Labs" }],
  openGraph: {
    title,
    description,
    url: "https://liznatlabs.com",
    siteName: "Liznat Labs",
    locale: "en_IN",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
  metadataBase: new URL("https://liznatlabs.com"),
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FAFAF7",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${spaceGrotesk.variable} ${jakarta.variable} ${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-canvas text-ink antialiased">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-teal px-4 py-2 font-mono text-xs text-white transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
