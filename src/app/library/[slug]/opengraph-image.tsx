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
            "radial-gradient(ellipse 900px 500px at 12% 0%, rgba(212,168,90,0.22), transparent 60%), #0b0b0c",
          color: "#f5f3ee",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#d4a85a",
            letterSpacing: "0.28em",
            fontSize: 20,
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
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
          <div style={{ display: "flex", color: "#b8b3a8" }}>{category}</div>
        </div>

        <div
          style={{
            fontSize: title.length > 60 ? 64 : 80,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            maxWidth: 1000,
            display: "flex",
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#8a857a",
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex" }}>godchaserpodcast.com</div>
          <div style={{ display: "flex", color: "#d4a85a" }}>
            Scripture Interpreting Scripture
          </div>
        </div>
      </div>
    ),
    size,
  );
}
