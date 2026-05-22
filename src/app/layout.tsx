import type { Metadata } from "next";
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
      "Bengaluru-based dev studio. Modern websites, Android apps, and custom software for ambitious teams. Solo-founder care. Fixed pricing. Real results.",
    url: "https://liznatlabs.com",
    siteName: "Liznat Labs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Liznat Labs — Modern Software, Shipped with Intent",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liznat Labs — Modern Software, Shipped with Intent",
    description:
      "Bengaluru-based dev studio building modern websites, Android apps, and custom software.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://liznatlabs.com"),
  themeColor: "#0A0908",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
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
