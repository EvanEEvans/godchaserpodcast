import { NextResponse } from "next/server";
import { brevoUpsertContact, parseListId } from "@/lib/brevo";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { email?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const email =
    typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  if (!process.env.BREVO_API_KEY) {
    return NextResponse.json(
      {
        error:
          "Newsletter is not yet configured. Brevo API key missing on the server.",
      },
      { status: 503 },
    );
  }

  const listId = parseListId(process.env.BREVO_NEWSLETTER_LIST_ID);
  const listIds = listId ? [listId] : undefined;

  try {
    const result = await brevoUpsertContact({
      email,
      listIds,
      attributes: {
        SOURCE: "godchaserpodcast.com — newsletter",
      },
    });

    if (!result.ok) {
      console.error("[subscribe] Brevo error", result.error);
      return NextResponse.json(
        { error: "Subscription failed. Try again in a moment." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      message: "You're on the list. See you Sunday.",
    });
  } catch (err) {
    console.error("[subscribe] Exception", err);
    return NextResponse.json(
      { error: "Server error. Try again in a moment." },
      { status: 500 },
    );
  }
}
