import type { Segment, Stat } from "@/content/site";
import { ParticleField } from "@/components/ui/ParticleField";
import { Eyebrow, Reveal, Segments, StatsRow, type Accent } from "@/components/ui/primitives";

/** Dark particle hero used at the top of every inner page, with an optional light stats strip below. */
export function PageHero({
  eyebrow,
  title,
  body,
  stats,
  accent = "cyan",
  compact = false,
  children,
}: {
  eyebrow: string;
  title: Segment[];
  body?: string;
  stats?: Stat[];
  accent?: Accent;
  compact?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <>
      <section
        data-nav-dark
        className="relative overflow-hidden text-white"
        style={{ background: "radial-gradient(900px 500px at 75% 20%, rgba(0,96,120,0.35), transparent 65%), #05060A" }}
      >
        <ParticleField />
        <div className={`shell relative flex flex-col gap-7 ${compact ? "pb-16 pt-36 md:pt-40" : "pb-24 pt-40 md:pb-28 md:pt-48"}`}>
          <Reveal><Eyebrow variant="plain" light>{eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-4xl font-light" style={{ fontSize: "clamp(2.8rem, 7vw, 5.8rem)", lineHeight: 1.02, letterSpacing: "-0.035em" }}>
              <Segments segments={title} accent={accent} />
            </h1>
          </Reveal>
          {body && (
            <Reveal delay={0.1}>
              <p className="max-w-2xl text-white/80" style={{ fontSize: "1.08rem", lineHeight: 1.75 }}>{body}</p>
            </Reveal>
          )}
          {children}
        </div>
      </section>
      {stats && (
        <section className="bg-canvas">
          <div className="shell">
            <div className="-mt-px border-y border-teal/30 py-10">
              <StatsRow stats={stats} color="teal" />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
