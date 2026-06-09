export function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">

      {/* Warm cream base */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(160deg, #FDFCFA 0%, #F9F8F6 50%, #F5F3FF 100%)",
        }}
      />

      {/* Soft violet orb — top-left */}
      <div
        style={{
          position: "absolute",
          width: "65vw", height: "65vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(109,40,217,0.07) 0%, transparent 65%)",
          filter: "blur(80px)",
          top: "-25%", left: "-20%",
          animation: "orbFloat1 28s ease-in-out infinite",
        }}
      />

      {/* Soft blue orb — top-right */}
      <div
        style={{
          position: "absolute",
          width: "55vw", height: "55vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%)",
          filter: "blur(90px)",
          top: "-10%", right: "-25%",
          animation: "orbFloat2 34s ease-in-out infinite",
        }}
      />

      {/* Soft teal orb — bottom-center */}
      <div
        style={{
          position: "absolute",
          width: "50vw", height: "50vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(8,145,178,0.06) 0%, transparent 65%)",
          filter: "blur(80px)",
          bottom: "-20%", right: "10%",
          animation: "orbFloat3 24s ease-in-out infinite",
        }}
      />

      {/* Subtle lavender mid-left */}
      <div
        style={{
          position: "absolute",
          width: "40vw", height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 65%)",
          filter: "blur(70px)",
          top: "40%", left: "-10%",
          animation: "orbFloat4 30s ease-in-out infinite",
        }}
      />

      {/* Noise grain */}
      <div className="noise-overlay" />
    </div>
  );
}
