"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-bg-elevated border-b border-line transition-shadow duration-300",
        scrolled && "header-shadow",
      )}
    >
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-display text-[1.6rem] md:text-[1.75rem] tracking-[0.04em] text-text uppercase leading-none">
            Godchaser
          </span>
          <span className="mt-1.5 text-[0.6rem] tracking-[0.32em] uppercase text-text-muted leading-none">
            Podcast · Library · Community
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors",
                  active
                    ? "text-text"
                    : "text-text-dim hover:text-purple",
                )}
              >
                {item.label}
                {active && (
                  <span
                    aria-hidden
                    className="absolute left-0 right-0 -bottom-1.5 h-[2px] bg-accent"
                  />
                )}
              </Link>
            );
          })}
          <a
            href={SITE.bspUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-bg-deep border-2 border-accent text-text-inverse px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.08em] hover:bg-accent hover:text-text hover:border-accent transition-colors"
          >
            Open Bible Study Pro
            <span aria-hidden>→</span>
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-text"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-x-0 top-20 bottom-0 z-40 bg-bg-elevated border-t border-line overflow-y-auto">
          <div className="px-6 py-8 flex flex-col gap-1">
            {NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "font-display uppercase text-3xl tracking-[0.04em] py-3 border-b border-line",
                    active ? "text-text" : "text-text-dim",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={SITE.bspUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-bg-deep border-2 border-accent text-text-inverse px-5 py-3.5 font-semibold uppercase tracking-[0.08em]"
            >
              Open Bible Study Pro
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
