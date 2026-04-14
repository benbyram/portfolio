import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ben Byram — Product Leader & AI Consultant";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FFFCF7",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: "22px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#1E1E1E", fontWeight: 700 }}>
          BEN BYRAM
        </div>
        <div>
          <div
            style={{
              fontSize: "96px",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "#1E1E1E",
              marginBottom: "32px",
            }}
          >
            Product Leader<br />& AI Consultant
          </div>
          <div style={{ fontSize: "24px", color: "#555", letterSpacing: "0.02em" }}>
            benjaminbyram.me
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
