"use client";

export function BackgroundGlows() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Top-left glow */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "60vw",
          height: "60vw",
          background:
            "radial-gradient(ellipse at center, rgba(233,110,51,0.07) 0%, transparent 65%)",
          borderRadius: "50%",
          filter: "blur(60px)",
        }}
      />
      {/* Bottom-right glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "55vw",
          height: "55vw",
          background:
            "radial-gradient(ellipse at center, rgba(233,110,51,0.05) 0%, transparent 65%)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}
