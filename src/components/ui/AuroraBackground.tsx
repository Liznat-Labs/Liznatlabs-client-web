export function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">

      {/* Deep dark base */}
      <div
        className="absolute inset-0"
        style={{ background: "#05050A" }}
      />

      {/* Violet orb — top-left, primary */}
      <div
        style={{
          position: "absolute",
          width: "70vw", height: "70vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.22) 0%, rgba(109,40,217,0.08) 50%, transparent 70%)",
          filter: "blur(80px)",
          top: "-25%", left: "-20%",
          animation: "orbFloat1 28s ease-in-out infinite",
        }}
      />

      {/* Indigo/blue orb — top-right */}
      <div
        style={{
          position: "absolute",
          width: "60vw", height: "60vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(59,130,246,0.1) 50%, transparent 70%)",
          filter: "blur(90px)",
          top: "-15%", right: "-25%",
          animation: "orbFloat2 34s ease-in-out infinite",
        }}
      />

      {/* Teal/cyan orb — bottom-right */}
      <div
        style={{
          position: "absolute",
          width: "55vw", height: "55vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.14) 0%, rgba(20,184,166,0.07) 50%, transparent 70%)",
          filter: "blur(80px)",
          bottom: "-20%", right: "5%",
          animation: "orbFloat3 24s ease-in-out infinite",
        }}
      />

      {/* Pink/rose orb — mid-left */}
      <div
        style={{
          position: "absolute",
          width: "45vw", height: "45vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(236,72,153,0.12) 0%, rgba(244,114,182,0.06) 50%, transparent 70%)",
          filter: "blur(70px)",
          top: "35%", left: "-15%",
          animation: "orbFloat4 30s ease-in-out infinite",
        }}
      />

      {/* Deep center bloom */}
      <div
        style={{
          position: "absolute",
          width: "80vw", height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(109,40,217,0.07) 0%, transparent 65%)",
          filter: "blur(100px)",
          top: "20%", left: "10%",
          animation: "orbFloat5 40s ease-in-out infinite",
        }}
      />

      {/* Subtle dot grid overlay */}
      <div
        className="absolute inset-0 dot-grid"
        style={{ opacity: 0.4 }}
      />

      {/* Noise grain */}
      <div className="noise-overlay" />
    </div>
  );
}
