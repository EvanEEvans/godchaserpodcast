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
            "radial-gradient(ellipse 900px 500px at 12% 0%, rgba(114,112,155,0.30), transparent 60%), radial-gradient(ellipse 700px 400px at 95% 105%, rgba(246,233,121,0.18), transparent 60%), #14163c",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#f6e979",
            letterSpacing: "0.18em",
            fontSize: 22,
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              background: "#f6e979",
              borderRadius: 999,
            }}
          />
          The Godchaser
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: "0.01em",
              maxWidth: 980,
              display: "flex",
              textTransform: "uppercase",
            }}
          >
            Scripture Interpreting Scripture
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#c5b8c2",
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
            color: "#72709b",
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex" }}>godchaserpodcast.com</div>
          <div style={{ display: "flex", color: "#f6e979" }}>
            Bible Study Pro inside
          </div>
        </div>
      </div>
    ),
    size,
  );
}
