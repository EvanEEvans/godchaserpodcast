import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/posts";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "The Godchaser — Library";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? "The Godchaser Library";
  const category = post?.category ?? "Library";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 96px",
          background:
            "radial-gradient(ellipse 900px 500px at 12% 0%, rgba(107,91,149,0.30), transparent 60%), radial-gradient(ellipse 700px 400px at 95% 105%, rgba(230,193,85,0.18), transparent 60%), #1a1d3a",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#e6c155",
            letterSpacing: "0.18em",
            fontSize: 20,
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 10,
                height: 10,
                background: "#e6c155",
                borderRadius: 999,
              }}
            />
            The Godchaser
          </div>
          <div style={{ display: "flex", color: "#d4cce0" }}>{category}</div>
        </div>

        <div
          style={{
            fontSize: title.length > 60 ? 68 : 84,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "0.005em",
            maxWidth: 1000,
            display: "flex",
            textTransform: "uppercase",
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#9b8fb5",
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex" }}>godchaserpodcast.com</div>
          <div style={{ display: "flex", color: "#e6c155" }}>
            Scripture Interpreting Scripture
          </div>
        </div>
      </div>
    ),
    size,
  );
}
