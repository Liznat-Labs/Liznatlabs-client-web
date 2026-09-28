import { ImageResponse } from "next/og";

export const alt = "Liznat Labs — Modern Software, Shipped with Intent";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#F2EDFF",
          backgroundImage: "radial-gradient(circle at 85% 0%, rgba(124,58,237,0.25) 0%, rgba(242,237,255,0) 60%)",
          color: "#0A0A0A",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <svg width="75" height="72" viewBox="0 0 48 46">
            <path d="M0 0 L14 0 L14 32 L38 32 L38 46 L0 46 Z" fill="#0A0A0A" />
            <rect x="22" y="4" width="10" height="10" fill="#4C1D95" />
          </svg>
          <span style={{ fontSize: 44 }}>Liznat Labs</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 72, fontWeight: 300, lineHeight: 1.05 }}>
          <span>Software crafted with intent,</span>
          <span style={{ color: "#6D28D9" }}>shipped with speed.</span>
        </div>
        <span style={{ fontSize: 28, color: "#52525B" }}>
          AI Applications · IT Solutions · IT Staffing · Zynk Works — Bengaluru
        </span>
      </div>
    ),
    size,
  );
}
