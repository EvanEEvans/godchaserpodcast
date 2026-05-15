const BREVO_BASE = "https://api.brevo.com/v3";

type BrevoContactPayload = {
  email: string;
  attributes?: Record<string, unknown>;
  listIds?: number[];
  updateEnabled?: boolean;
};

type BrevoEmailPayload = {
  sender: { name: string; email: string };
  to: { email: string; name?: string }[];
  subject: string;
  htmlContent: string;
  replyTo?: { email: string; name?: string };
};

function requireApiKey(): string {
  const key = process.env.BREVO_API_KEY;
  if (!key) {
    throw new Error("BREVO_API_KEY is not set");
  }
  return key;
}

export async function brevoUpsertContact(payload: BrevoContactPayload) {
  const res = await fetch(`${BREVO_BASE}/contacts`, {
    method: "POST",
    headers: {
      "api-key": requireApiKey(),
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      ...payload,
      updateEnabled: payload.updateEnabled ?? true,
    }),
  });

  if (res.status === 201 || res.status === 204) return { ok: true } as const;
  if (res.status === 400) {
    // Could be "Contact already exist". With updateEnabled, that should not happen.
    const body = (await res.json().catch(() => null)) as
      | { code?: string; message?: string }
      | null;
    if (body?.code === "duplicate_parameter") return { ok: true } as const;
    return {
      ok: false as const,
      error: body?.message ?? "Bad request to Brevo.",
    };
  }
  const body = (await res.text().catch(() => "")) as string;
  return {
    ok: false as const,
    error: `Brevo error ${res.status}: ${body.slice(0, 200)}`,
  };
}

export async function brevoSendEmail(payload: BrevoEmailPayload) {
  const res = await fetch(`${BREVO_BASE}/smtp/email`, {
    method: "POST",
    headers: {
      "api-key": requireApiKey(),
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (res.ok) return { ok: true } as const;
  const body = (await res.text().catch(() => "")) as string;
  return {
    ok: false as const,
    error: `Brevo send error ${res.status}: ${body.slice(0, 200)}`,
  };
}

export function parseListId(env: string | undefined): number | undefined {
  if (!env) return undefined;
  const n = parseInt(env, 10);
  return Number.isFinite(n) ? n : undefined;
}
