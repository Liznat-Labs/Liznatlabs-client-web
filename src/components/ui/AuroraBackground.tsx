export function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">

      {/* Light base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 140% 80% at 50% -10%, #EEF2FF 0%, #F8F7F5 60%)",
        }}
      />

      {/* Soft peach orb — top-left */}
      <div
        style={{
          position: "absolute",
          width: "60vw", height: "60vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(233,110,51,0.09) 0%, transparent 65%)",
          filter: "blur(60px)",
          top: "-20%", left: "-15%",
        }}
      />

      {/* Soft indigo orb — top-right */}
      <div
        style={{
          position: "absolute",
          width: "55vw", height: "55vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 65%)",
          filter: "blur(70px)",
          top: "-10%", right: "-20%",
        }}
      />

      {/* Soft teal orb — bottom-center */}
      <div
        style={{
          position: "absolute",
          width: "50vw", height: "50vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 65%)",
          filter: "blur(60px)",
          bottom: "-20%", right: "15%",
        }}
      />

      {/* Noise grain */}
      <div className="noise-overlay" />
    </div>
  );
}
