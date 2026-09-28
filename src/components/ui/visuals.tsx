// Decorative SVG illustrations in the dark-teal style of the hero art.
// All are aria-hidden; they carry no information.

const panel = "relative overflow-hidden rounded-2xl border border-white/10";
const panelBg = { background: "radial-gradient(120% 90% at 50% 40%, #0B3A4A 0%, #062530 55%, #031419 100%)" };

/** Streams of data converging on a central "AI" chip. */
export function AINetworkVisual({ className = "" }: { className?: string }) {
  const nodes = [
    [70, 60], [150, 40], [250, 70], [330, 45], [410, 80], [60, 170], [120, 230], [380, 200], [430, 250], [200, 250], [300, 260], [90, 110], [440, 140],
  ];
  return (
    <div aria-hidden="true" className={`${panel} ${className}`} style={panelBg}>
      <svg viewBox="0 0 500 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="ai-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7CCBDA" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#7CCBDA" stopOpacity="0" />
          </radialGradient>
        </defs>
        {Array.from({ length: 16 }, (_, i) => {
          const a = (i / 16) * Math.PI * 2;
          const x = 250 + Math.cos(a) * 320;
          const y = 150 + Math.sin(a) * 220;
          return (
            <path
              key={i}
              d={`M${x} ${y} Q ${250 + Math.cos(a + 0.6) * 120} ${150 + Math.sin(a + 0.6) * 80} 250 150`}
              stroke="#7CCBDA"
              strokeOpacity={0.18 + (i % 4) * 0.08}
              strokeWidth="0.8"
              fill="none"
            >
              <animate attributeName="stroke-dasharray" values="0 600;600 0" dur={`${5 + (i % 5)}s`} repeatCount="indefinite" />
            </path>
          );
        })}
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 2.6 : 1.6} fill="#BFE6EE" opacity="0.8">
            <animate attributeName="opacity" values="0.3;1;0.3" dur={`${3 + (i % 4)}s`} repeatCount="indefinite" />
          </circle>
        ))}
        {[[120, 90], [360, 110], [150, 200], [340, 215]].map(([x, y], i) => (
          <g key={i} opacity="0.55">
            <rect x={x - 18} y={y - 12} width="36" height="24" rx="3" fill="#0E4A5C" stroke="#7CCBDA" strokeOpacity="0.5" />
            <path d={`M${x - 11} ${y + 5} l6 -6 l6 4 l8 -9`} stroke="#E37C78" strokeWidth="1.4" fill="none" />
          </g>
        ))}
        <circle cx="250" cy="150" r="70" fill="url(#ai-glow)" />
        <rect x="226" y="126" width="48" height="48" rx="10" fill="#0E4A5C" stroke="#BFE6EE" strokeWidth="1.2" />
        <text x="250" y="157" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="700" fontFamily="var(--font-sora), sans-serif">AI</text>
      </svg>
    </div>
  );
}

/** A wireframe skyline rising out of a data grid. */
export function CityVisual({ className = "" }: { className?: string }) {
  const towers = [
    [40, 70], [80, 110], [120, 60], [150, 150], [195, 95], [230, 190], [270, 120], [305, 160], [345, 80], [380, 130], [420, 60], [455, 100],
  ];
  return (
    <div aria-hidden="true" className={`${panel} ${className}`} style={panelBg}>
      <svg viewBox="0 0 500 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 9 }, (_, i) => (
          <path key={`g${i}`} d={`M${-100 + i * 90} 300 L ${250 + (i - 4) * 18} 230`} stroke="#7CCBDA" strokeOpacity="0.18" strokeWidth="0.8" />
        ))}
        {Array.from({ length: 4 }, (_, i) => (
          <path key={`h${i}`} d={`M0 ${240 + i * 16} H500`} stroke="#7CCBDA" strokeOpacity={0.1 + i * 0.04} strokeWidth="0.8" />
        ))}
        {towers.map(([x, h], i) => (
          <g key={i}>
            <rect x={x} y={232 - h} width={i % 3 === 0 ? 22 : 16} height={h} fill="#0A3645" fillOpacity="0.7" stroke="#7CCBDA" strokeOpacity="0.55" strokeWidth="0.8" />
            {Array.from({ length: Math.floor(h / 14) }, (_, k) => (
              <rect key={k} x={x + 4} y={236 - h + k * 14} width="3" height="3" fill="#BFE6EE" opacity={(k + i) % 3 === 0 ? 0.9 : 0.25} />
            ))}
            <circle cx={x + 8} cy={228 - h} r="1.8" fill="#BFE6EE">
              <animate attributeName="opacity" values="0.2;1;0.2" dur={`${2.5 + (i % 4)}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
        {Array.from({ length: 30 }, (_, i) => (
          <circle key={`s${i}`} cx={(i * 97) % 500} cy={(i * 53) % 120} r="0.9" fill="#BFE6EE" opacity="0.5" />
        ))}
      </svg>
    </div>
  );
}

/** Glowing hub with arcs out to delivery locations. */
export function GlobeVisual({ className = "" }: { className?: string }) {
  const spots = [
    [70, 70], [120, 200], [200, 40], [330, 50], [420, 90], [440, 210], [300, 250], [80, 250],
  ];
  return (
    <div aria-hidden="true" className={`${panel} ${className}`} style={{ background: "radial-gradient(120% 90% at 50% 45%, #2A1A1A 0%, #120B10 50%, #06070B 100%)" }}>
      <svg viewBox="0 0 500 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFB38A" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#E37C78" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g stroke="#E37C78" strokeOpacity="0.14" fill="none">
          <ellipse cx="250" cy="150" rx="210" ry="110" />
          <ellipse cx="250" cy="150" rx="140" ry="110" />
          <ellipse cx="250" cy="150" rx="70" ry="110" />
          <path d="M40 150 H460 M60 95 H440 M60 205 H440" />
        </g>
        {spots.map(([x, y], i) => (
          <g key={i}>
            <path d={`M250 150 Q ${(250 + x) / 2} ${Math.min(y, 150) - 60} ${x} ${y}`} stroke="#FFB38A" strokeOpacity="0.55" strokeWidth="1" fill="none" strokeDasharray="2 4">
              <animate attributeName="stroke-dashoffset" values="60;0" dur={`${2 + (i % 3)}s`} repeatCount="indefinite" />
            </path>
            <circle cx={x} cy={y} r="3" fill="#FFD9C2" />
            <circle cx={x} cy={y} r="8" fill="none" stroke="#FFB38A" strokeOpacity="0.5">
              <animate attributeName="r" values="3;12;3" dur={`${3 + (i % 3)}s`} repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" values="0.6;0;0.6" dur={`${3 + (i % 3)}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
        <circle cx="250" cy="150" r="46" fill="url(#hub-glow)" />
        <circle cx="250" cy="150" r="6" fill="#FFF1E6" />
      </svg>
    </div>
  );
}

/** Concentric target rings used as a card watermark. */
export function Rings({ className = "", color = "rgba(255,255,255,0.18)" }: { className?: string; color?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 200 200" className={`pointer-events-none absolute ${className}`}>
      {[96, 72, 48].map((r) => (
        <circle key={r} cx="100" cy="100" r={r} fill="none" stroke={color} strokeWidth="10" />
      ))}
      <circle cx="100" cy="100" r="22" fill={color} />
    </svg>
  );
}
