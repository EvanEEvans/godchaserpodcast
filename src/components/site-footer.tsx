import Link from "next/link";
import { PLATFORMS, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bg-elevated">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-display text-sm tracking-[0.18em] text-text-muted uppercase">
              About
            </h3>
            <ul className="mt-4 space-y-2 text-text-dim text-sm">
              <li>
                <Link href="/about" className="hover:text-text">
                  Who we are
                </Link>
              </li>
              <li>
                <Link href="/believe" className="hover:text-text">
                  What we believe
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-text">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-[0.18em] text-text-muted uppercase">
              Library
            </h3>
            <ul className="mt-4 space-y-2 text-text-dim text-sm">
              <li>
                <Link href="/library" className="hover:text-text">
                  All teaching
                </Link>
              </li>
              <li>
                <Link
                  href="/library/category/foundations"
                  className="hover:text-text"
                >
                  Foundations
                </Link>
              </li>
              <li>
                <Link
                  href="/library/category/doctrine"
                  className="hover:text-text"
                >
                  Doctrine
                </Link>
              </li>
              <li>
                <Link
                  href="/library/category/the-chase"
                  className="hover:text-text"
                >
                  The Chase
                </Link>
              </li>
              <li>
                <Link
                  href="/library/category/tools"
                  className="hover:text-text"
                >
                  Tools
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-[0.18em] text-text-muted uppercase">
              Listen
            </h3>
            <ul className="mt-4 space-y-2 text-text-dim text-sm">
              {PLATFORMS.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-text"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-[0.18em] text-text-muted uppercase">
              Connect
            </h3>
            <ul className="mt-4 space-y-2 text-text-dim text-sm">
              <li>
                <a
                  href={SITE.bspUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text"
                >
                  Bible Study Pro
                </a>
              </li>
              <li>
                <a
                  href="https://godchaser.faith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text"
                >
                  The Clothes
                </a>
              </li>
              <li>
                <a
                  href="https://godchaser.sagomba.one"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text"
                >
                  The Music
                </a>
              </li>
              <li>
                <Link href="/book" className="hover:text-text">
                  The Book
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-line flex flex-col md:flex-row gap-6 md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl tracking-[0.18em] text-text">
              THE GODCHASER
            </p>
            <p className="mt-2 text-sm text-text-dim italic">
              {SITE.tagline}
            </p>
            <p className="mt-4 max-w-md text-sm text-text-muted italic font-display">
              &ldquo;Go therefore and make disciples of all nations,
              baptizing them in the name of the Father and of the Son and of
              the Holy Spirit, teaching them to observe all that I have
              commanded you.&rdquo;
              <span className="not-italic"> — Matthew 28:19–20</span>
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex flex-wrap gap-3">
              {PLATFORMS.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-line px-3 py-1.5 text-xs text-text-dim hover:text-accent hover:border-accent transition-colors"
                >
                  {p.short}
                </a>
              ))}
            </div>
            <p className="text-xs text-text-muted">
              © {new Date().getFullYear()} The Godchaser Ministry.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
