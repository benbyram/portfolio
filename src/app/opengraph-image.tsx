import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ben Byram — Product Leader & AI Consultant";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const interBold = await fetch(
    new URL("https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZJhiI2B.woff2")
  ).then((res) => res.arrayBuffer());

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
        }}
      >
        <div
          style={{
            fontSize: "22px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#1E1E1E",
            fontWeight: 700,
            fontFamily: "Inter",
          }}
        >
          BEN BYRAM
        </div>
        <div>
          <div
            style={{
              fontSize: "100px",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "#1E1E1E",
              marginBottom: "32px",
              fontFamily: "Inter",
            }}
          >
            Product Leader{"\n"}& AI Consultant
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#888",
              letterSpacing: "0.02em",
              fontFamily: "Inter",
            }}
          >
            benjaminbyram.me
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interBold,
          weight: 800,
        },
      ],
    }
  );
}
