import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, organizationLd, websiteLd } from "@/lib/seo";
import "./globals.css";

// Liznat Labs typography: Plus Jakarta Sans for headings, Geist for text, Geist Mono for labels
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const title = "Liznat Labs — AI Development & IT Solutions in Bengaluru";
const description =
  "Bengaluru deep tech studio building AI agents, custom software, websites, Android apps and enterprise IT, plus dedicated engineering teams and Zynk Works.";

export const metadata: Metadata = {
  title: { default: title, template: "%s — Liznat Labs" },
  description,
  keywords: [
    "AI development company in Bengaluru",
    "AI agents development India",
    "custom software development Bengaluru",
    "IT staffing Bengaluru",
    "enterprise IT solutions India",
    "voice AI agents",
    "RAG knowledge assistant",
    "web development Bengaluru",
    "Android app development India",
    "Zynk Works",
    "HR and payroll software for small businesses",
  ],
  authors: [{ name: "Liznat Labs" }],
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "Liznat Labs",
    locale: "en_IN",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  applicationName: "Liznat Labs",
  category: "technology",
  creator: "Liznat Labs",
  publisher: "Liznat Labs",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-canvas text-ink antialiased">
        <JsonLd data={[organizationLd, websiteLd]} />
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-brand px-4 py-2 font-mono text-xs text-white transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <ScrollProgress />
        <Nav />
        <main id="main" className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
