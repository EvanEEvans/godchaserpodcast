"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const TOPICS = [
  "Bible Study Pro",
  "Speaking",
  "Partnerships",
  "Prayer / I said yes to Jesus",
  "Other",
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    topic: TOPICS[0] as (typeof TOPICS)[number],
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        message?: string;
      };
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Try again.");
        return;
      }
      setStatus("success");
      setMessage(
        data.message ?? "Thank you — we read every message and will be in touch.",
      );
    } catch {
      setStatus("error");
      setMessage("Network error. Try again in a moment.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent/40 bg-bg-elevated/70 p-8">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-accent">
          Thank you.
        </h2>
        <p className="mt-3 text-text-dim">
          {message}
        </p>
        <p className="mt-2 text-text-dim">
          In the meantime, the Library is open.
        </p>
        <a
          href="/library"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent text-bg px-5 py-3 font-medium hover:bg-accent-hover transition-colors"
        >
          Browse the Library <span aria-hidden>→</span>
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <Field label="Your name" htmlFor="name">
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className="w-full rounded-xl bg-bg border border-line px-4 py-3 text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
        />
      </Field>

      <Field label="Email" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className="w-full rounded-xl bg-bg border border-line px-4 py-3 text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
        />
      </Field>

      <Field label="I'm interested in" htmlFor="topic">
        <select
          id="topic"
          name="topic"
          value={form.topic}
          onChange={(e) =>
            update("topic", e.target.value as (typeof TOPICS)[number])
          }
          className="w-full rounded-xl bg-bg border border-line px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors appearance-none"
        >
          {TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="w-full rounded-xl bg-bg border border-line px-4 py-3 text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-y"
        />
      </Field>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-accent text-bg px-6 py-3 font-medium hover:bg-accent-hover transition-colors disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send message"}
        </button>
        {message && status === "error" && (
          <p className="text-sm text-text-dim">{message}</p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-xs tracking-[0.18em] uppercase text-text-muted mb-2"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
