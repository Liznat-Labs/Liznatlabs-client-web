// Product-style illustrations. All are decorative (aria-hidden) and carry no information.

function WindowChrome({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
      <span className="ml-3 font-mono text-[0.62rem] text-ink-soft">{title}</span>
    </div>
  );
}

/** A knowledge-assistant chat window: question, cited answer, typing cursor. */
export function AssistantVisual({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`overflow-hidden rounded-xl border border-white/35 bg-white text-left shadow-[0_20px_50px_rgba(0,0,0,0.35)] ${className}`}>
      <WindowChrome title="assistant.liznatlabs.app" />
      <div className="flex flex-col gap-3 p-4 text-[0.72rem] leading-relaxed">
        <div className="ml-auto max-w-[75%] rounded-2xl rounded-br-sm bg-ink px-3.5 py-2 text-white">
          Which invoices from March are still unpaid?
        </div>
        <div className="flex max-w-[88%] gap-2.5">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-cyan text-[0.55rem] font-bold text-white">AI</span>
          <div className="flex flex-col gap-2 rounded-2xl rounded-tl-sm bg-lilac px-3.5 py-2.5 text-ink">
            <span>
              3 invoices totalling <b>₹4,82,500</b> are unpaid. The oldest is 26 days overdue — I&apos;ve drafted reminders for all three.
            </span>
            <span className="flex flex-wrap gap-1.5">
              {["ledger.xlsx", "CRM · Accounts", "Policy p.4"].map((s) => (
                <span key={s} className="rounded-md border border-brand-lt bg-white px-1.5 py-0.5 font-mono text-[0.58rem] text-brand">{s}</span>
              ))}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-line px-3 py-2 text-ink-soft">
          Ask about your data
          <span className="h-3.5 w-px animate-blink bg-brand" />
        </div>
      </div>
    </div>
  );
}

/** A live system diagram with data flowing between services. */
export function ArchitectureVisual({ className = "" }: { className?: string }) {
  const box = (x: number, y: number, w: number, label: string, sub: string, accent = false) => (
    <g key={label}>
      <rect x={x} y={y} width={w} height="46" rx="9" fill={accent ? "#6D28D9" : "#FFFFFF"} stroke={accent ? "#6D28D9" : "#E4E4EA"} />
      <text x={x + 12} y={y + 20} fontSize="11" fontWeight="700" fill={accent ? "#FFFFFF" : "#0A0A0A"} fontFamily="var(--font-jakarta), sans-serif">{label}</text>
      <text x={x + 12} y={y + 35} fontSize="8.5" fill={accent ? "#E9DDFF" : "#52525B"} fontFamily="var(--font-geist-mono), monospace">{sub}</text>
    </g>
  );
  const flows = [
    "M110 63 H175", "M110 143 H175", "M285 103 H330", "M285 103 V63 H330", "M285 103 V143 H330",
    "M440 63 H470 V103", "M440 143 H470 V103", "M440 103 H470", "M385 166 V205",
  ];
  return (
    <div aria-hidden="true" className={`grid-lines relative overflow-hidden rounded-xl border border-white/35 bg-white ${className}`}>
      <svg viewBox="0 0 560 260" className="h-full w-full">
        {flows.map((d, i) => (
          <g key={d}>
            <path d={d} stroke="#C4B5FD" strokeWidth="1.5" fill="none" />
            <path d={d} stroke={i % 2 ? "#0891B2" : "#6D28D9"} strokeWidth="2" fill="none" strokeDasharray="4 20" className="animate-flow" style={{ animationDelay: `${i * 0.15}s` }} />
          </g>
        ))}
        {box(10, 40, 100, "Web app", "next.js")}
        {box(10, 120, 100, "Mobile", "android")}
        {box(175, 80, 110, "API gateway", "auth · rate limit", true)}
        {box(330, 40, 110, "Orders", "node service")}
        {box(330, 80, 110, "AI agent", "tools · guardrails")}
        {box(330, 120, 110, "Billing", "node service")}
        {box(470, 80, 80, "Postgres", "primary")}
        {box(330, 205, 110, "Monitoring", "logs · alerts")}
        <g>
          <rect x="175" y="205" width="110" height="46" rx="9" fill="#E8F6FA" stroke="#CDEBF3" />
          <text x="187" y="225" fontSize="11" fontWeight="700" fill="#0E7490" fontFamily="var(--font-jakarta), sans-serif">99.9% uptime</text>
          <text x="187" y="240" fontSize="8.5" fill="#0E7490" fontFamily="var(--font-geist-mono), monospace">last 30 days</text>
        </g>
      </svg>
    </div>
  );
}

/** Engineering pods with roles and the time zones they cover. */
export function TeamVisual({ className = "" }: { className?: string }) {
  const pods = [
    { name: "Pod A · Product", people: ["FE", "BE", "MO", "QA"], roles: ["Full-stack", "Mobile", "QA"] },
    { name: "Pod B · AI & Data", people: ["ML", "DS", "AI"], roles: ["ML", "Data", "LLM ops"] },
  ];
  const colors = ["bg-brand", "bg-cyan", "bg-indigo", "bg-ink"];
  return (
    <div aria-hidden="true" className={`relative flex flex-col gap-3 overflow-hidden rounded-xl border border-line bg-gradient-to-br from-lilac via-white to-ice p-5 ${className}`}>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-soft">Your engineering team</span>
        <span className="flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 font-mono text-[0.6rem] text-cyan-dk shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#28C840]" /> Online now
        </span>
      </div>
      {pods.map((pod) => (
        <div key={pod.name} className="rounded-lg border border-line bg-white p-3.5 shadow-sm">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="font-display text-[0.8rem] font-bold text-ink">{pod.name}</span>
            <span className="flex -space-x-2">
              {pod.people.map((p, i) => (
                <span key={p} className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[0.55rem] font-bold text-white ${colors[i % colors.length]}`}>{p}</span>
              ))}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {pod.roles.map((r) => (
              <span key={r} className="rounded-md bg-surface px-2 py-0.5 font-mono text-[0.6rem] text-ink-soft">{r}</span>
            ))}
          </div>
        </div>
      ))}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {["IST · Bengaluru", "GST · Dubai", "GMT · London", "EST · New York"].map((z, i) => (
          <span key={z} className={`rounded-full px-2.5 py-1 font-mono text-[0.58rem] ${i === 0 ? "bg-ink text-white" : "border border-line bg-white text-ink-soft"}`}>{z}</span>
        ))}
      </div>
    </div>
  );
}
