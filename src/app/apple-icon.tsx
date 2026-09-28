import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS home-screen icon: the Liznat Labs mark on white
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF" }}>
        <svg width="112" height="107" viewBox="0 0 48 46">
          <path d="M0 0 L14 0 L14 32 L38 32 L38 46 L0 46 Z" fill="#0A0A0A" />
          <rect x="22" y="4" width="10" height="10" fill="#4C1D95" />
        </svg>
      </div>
    ),
    size,
  );
}
