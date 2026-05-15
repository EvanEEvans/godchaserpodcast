import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "The Godchaser — Scripture Interpreting Scripture";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
          background:
            "radial-gradient(ellipse 900px 500px at 12% 0%, rgba(212,168,90,0.20), transparent 60%), #1a1815",
          color: "#f7f3e8",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#d4a85a",
            letterSpacing: "0.32em",
            fontSize: 22,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              background: "#d4a85a",
              borderRadius: 999,
            }}
          />
          The Godchaser
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 980,
              display: "flex",
            }}
          >
            Scripture Interpreting Scripture.
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#c4bdb0",
              maxWidth: 880,
              lineHeight: 1.35,
              display: "flex",
            }}
          >
            A home for people chasing God with everything they have.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#968d7e",
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex" }}>godchaserpodcast.com</div>
          <div style={{ display: "flex", color: "#d4a85a" }}>
            Bible Study Pro inside
          </div>
        </div>
      </div>
    ),
    size,
  );
}
