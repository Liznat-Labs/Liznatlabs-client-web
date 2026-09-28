import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const fraunces = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Liznat Labs — Modern Software, Shipped with Intent",
  description:
    "Bengaluru-based dev studio building modern websites, Android apps, and custom software for ambitious teams. Fixed pricing. Real results.",
  keywords: [
    "web development",
    "android apps",
    "custom software",
    "bengaluru",
    "india",
    "dev studio",
    "startup",
    "MVP",
  ],
  authors: [{ name: "Liznat Labs" }],
  openGraph: {
    title: "Liznat Labs — Modern Software, Shipped with Intent",
    description:
      "Bengaluru-based dev studio. Modern websites, Android apps, and custom software for ambitious teams. Co-founder care. Fixed pricing. Real results.",
    url: "https://liznatlabs.com",
    siteName: "Liznat Labs",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liznat Labs — Modern Software, Shipped with Intent",
    description:
      "Bengaluru-based dev studio building modern websites, Android apps, and custom software.",
  },
  metadataBase: new URL("https://liznatlabs.com"),
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jetbrainsMono.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="antialiased bg-bg text-cream">{children}</body>
    </html>
  );
}
