"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type Status = "idle" | "loading" | "success" | "error";

type Props = {
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

  const wrapperClasses = cn(
    variant === "section" &&
      "rounded-2xl border border-line bg-bg-elevated/60 p-8 md:p-12",
    variant === "inline" &&
      "rounded-2xl border border-line bg-bg-elevated/60 p-6 my-12",
  );

  return (
    <div className={wrapperClasses}>
      {variant === "section" ? (
        <>
          <p className="text-xs tracking-[0.28em] uppercase text-text-muted">
            Newsletter
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-semibold">
            Sunday letters.
          </h2>
          <p className="mt-4 text-text-dim max-w-xl">
            One email a week. Teaching, a Scripture, what we&rsquo;re chasing.
            No spam, ever.
          </p>
        </>
      ) : (
        <>
          <p className="text-xs tracking-[0.24em] uppercase text-accent">
            Sunday letters
          </p>
          <h3 className="mt-2 font-serif text-2xl font-semibold">
            Keep growing.
          </h3>
          <p className="mt-2 text-text-dim text-[0.95rem]">
            One Scripture, one teaching, one challenge — every Sunday.
          </p>
        </>
      )}

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
          className="flex-1 rounded-full bg-bg border border-line-soft px-5 py-3 text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="rounded-full bg-accent text-bg px-6 py-3 font-medium hover:bg-accent-hover transition-colors disabled:opacity-60"
        >
          {status === "loading"
            ? "Subscribing…"
            : status === "success"
            ? "Subscribed"
            : "Subscribe"}
        </button>
      </form>

      {message && (
        <p
          className={cn(
            "mt-4 text-sm",
            status === "success" ? "text-accent" : "text-text-dim",
          )}
        >
          {message}
        </p>
      )}
    </div>
  );
}
