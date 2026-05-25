import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { BookCallModal } from "@/components/ui/BookCallModal";

export default function Home() {
  return (
    <>
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="fixed left-0 top-0 z-[9999] -translate-y-full rounded-br-sm bg-accent px-4 py-2 font-mono text-xs text-bg transition-transform focus:translate-y-0"
        style={{ letterSpacing: "0.04em" }}
      >
        Skip to content
      </a>

      {/* Full-screen animated aurora background */}
      <AuroraBackground />

      {/* Global contact modal */}
      <BookCallModal />

      {/* Page structure */}
      <Nav />

      <main id="main-content">
        <Hero />
        <MarqueeStrip />
        <Services />
        <Work />
        <Process />
        <About />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
