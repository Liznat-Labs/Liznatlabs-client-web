import type { Segment, Stat } from "@/content/site";
import { SectionHeading, StatsRow } from "@/components/ui/primitives";

export function PageHero({ eyebrow, title, body, stats }: { eyebrow: string; title: Segment[]; body: string; stats?: Stat[] }) {
  return (
    <section className="relative">
      <div className="shell flex flex-col gap-20 pb-20 pt-40 md:pt-48">
        <SectionHeading as="h1" size="xl" eyebrow={eyebrow} title={title} body={body} />
        {stats && <StatsRow stats={stats} />}
      </div>
    </section>
  );
}
