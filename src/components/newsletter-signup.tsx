"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type Status = "idle" | "loading" | "success" | "error";

type Props = {
  /**
   * `section` — used inside a navy band (homepage). Transparent wrapper, white text, gold submit.
   * `inline` — used inside posts on lavender bg. Self-contained navy card.
   */
  variant?: "section" | "inline";
};

export function NewsletterSignup({ variant = "section" }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setMessage(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
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
      setMessage(data.message ?? "You're on the list. See you Sunday.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Try again in a moment.");
    }
  }

  const inline = variant === "inline";

  return (
    <div
      className={cn(
        inline && "rounded-2xl bg-bg-deep p-8 md:p-10 my-12 text-text-inverse",
      )}
    >
      <p
        className={cn(
          "text-[0.7rem] tracking-[0.32em] uppercase font-semibold",
          inline ? "text-accent" : "text-accent",
        )}
      >
        {inline ? "Sunday letters" : "Newsletter"}
      </p>
      <h2
        className={cn(
          "mt-3 font-display uppercase tracking-[0.01em]",
          inline
            ? "text-2xl md:text-3xl text-text-inverse"
            : "text-3xl md:text-5xl text-text-inverse",
        )}
      >
        {inline ? "Keep growing." : "Sunday letters."}
      </h2>
      <p
        className={cn(
          "mt-4 max-w-xl leading-relaxed",
          inline
            ? "text-text-inverse/80 text-[0.95rem]"
            : "text-text-inverse/80 text-lg",
        )}
      >
        {inline
          ? "One Scripture, one teaching, one challenge — every Sunday. No spam, ever."
          : "One email a week. Teaching, a Scripture, what we're chasing. No spam, ever."}
      </p>

      <form
        onSubmit={onSubmit}
        className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl"
      >
        <label htmlFor={`newsletter-${variant}`} className="sr-only">
          Email
        </label>
        <input
          id={`newsletter-${variant}`}
          type="email"
          required
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading" || status === "success"}
          className="flex-1 rounded-full bg-bg-elevated border border-line px-5 py-3 text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="rounded-full bg-accent text-text px-7 py-3 font-semibold uppercase tracking-[0.06em] hover:bg-accent-hover transition-colors disabled:opacity-60"
        >
          {status === "loading"
            ? "Subscribing…"
            : status === "success"
            ? "Subscribed ✓"
            : "Subscribe"}
        </button>
      </form>

      {message && (
        <p
          className={cn(
            "mt-4 text-sm",
            status === "success" ? "text-accent" : "text-text-inverse/80",
          )}
        >
          {message}
        </p>
      )}
    </div>
  );
}
