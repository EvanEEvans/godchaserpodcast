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
            "radial-gradient(ellipse 900px 500px at 12% 0%, rgba(114,112,155,0.30), transparent 60%), radial-gradient(ellipse 700px 400px at 95% 105%, rgba(246,233,121,0.18), transparent 60%), #14163c",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#f6e979",
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
                background: "#f6e979",
                borderRadius: 999,
              }}
            />
            The Godchaser
          </div>
          <div style={{ display: "flex", color: "#c5b8c2" }}>{category}</div>
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
            color: "#72709b",
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex" }}>godchaserpodcast.com</div>
          <div style={{ display: "flex", color: "#f6e979" }}>
            Scripture Interpreting Scripture
          </div>
        </div>
      </div>
    ),
    size,
  );
}
