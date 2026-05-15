import { NextResponse } from "next/server";
import {
  brevoSendEmail,
  brevoUpsertContact,
  parseListId,
} from "@/lib/brevo";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const VALID_TOPICS = new Set([
  "Bible Study Pro",
  "Speaking",
  "Partnerships",
  "Prayer / I said yes to Jesus",
  "Other",
]);

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  let body: {
    name?: unknown;
    email?: unknown;
    message?: unknown;
    topic?: unknown;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email =
    typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const topic = typeof body.topic === "string" ? body.topic : "Other";

  if (!name || name.length > 120) {
    return NextResponse.json(
      { error: "Please include your name." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }
  if (!message || message.length < 5 || message.length > 5000) {
    return NextResponse.json(
      { error: "Message should be between 5 and 5,000 characters." },
      { status: 400 },
    );
  }
  if (!VALID_TOPICS.has(topic)) {
    return NextResponse.json({ error: "Invalid topic." }, { status: 400 });
  }

  if (!process.env.BREVO_API_KEY) {
    return NextResponse.json(
      {
        error:
          "Contact is not yet configured. Brevo API key missing on the server.",
      },
      { status: 503 },
    );
  }

  const listId = parseListId(process.env.BREVO_CONTACT_LIST_ID);
  const listIds = listId ? [listId] : undefined;

  try {
    const upsert = await brevoUpsertContact({
      email,
      listIds,
      attributes: {
        FIRSTNAME: name,
        TOPIC: topic,
        SOURCE: "godchaserpodcast.com — contact",
      },
    });

    if (!upsert.ok) {
      console.error("[contact] upsert error", upsert.error);
    }

    const inboxEmail =
      process.env.CONTACT_INBOX_EMAIL ?? "evan@coursecreatorplus.com";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ?? "noreply@godchaserpodcast.com";

    const subject = `[Godchaser · ${topic}] ${name}`;
    const html = `
      <div style="font-family: Inter, Arial, sans-serif; color: #111; line-height: 1.6;">
        <h2 style="font-family: 'Fraunces', Georgia, serif; margin: 0 0 8px;">
          New message — ${escapeHtml(topic)}
        </h2>
        <p style="margin: 4px 0;"><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
        <p style="margin: 4px 0;"><strong>Topic:</strong> ${escapeHtml(topic)}</p>
        <hr style="border: none; border-top: 1px solid #ccc; margin: 16px 0;" />
        <pre style="white-space: pre-wrap; font-family: inherit;">${escapeHtml(message)}</pre>
      </div>
    `.trim();

    const send = await brevoSendEmail({
      sender: { name: "The Godchaser", email: fromEmail },
      to: [{ email: inboxEmail }],
      replyTo: { email, name },
      subject,
      htmlContent: html,
    });

    if (!send.ok) {
      console.error("[contact] send error", send.error);
      return NextResponse.json(
        {
          error:
            "We couldn't send your message just now. Try again in a moment.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      message:
        topic === "Prayer / I said yes to Jesus"
          ? "Thank you — heaven heard it. We'll be in touch."
          : "Thank you — we read every message and will be in touch.",
    });
  } catch (err) {
    console.error("[contact] Exception", err);
    return NextResponse.json(
      { error: "Server error. Try again in a moment." },
      { status: 500 },
    );
  }
}
