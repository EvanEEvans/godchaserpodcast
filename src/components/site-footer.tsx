import Link from "next/link";
import { PLATFORMS, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-bg-deep text-text-inverse">
      <div aria-hidden className="h-[3px] w-full bg-accent" />
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <FooterColumn label="About">
            <FooterLink href="/about">Who we are</FooterLink>
            <FooterLink href="/believe">What we believe</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterColumn>

          <FooterColumn label="Library">
            <FooterLink href="/library">All teaching</FooterLink>
            <FooterLink href="/library/category/foundations">
              Foundations
            </FooterLink>
            <FooterLink href="/library/category/doctrine">Doctrine</FooterLink>
            <FooterLink href="/library/category/the-chase">
              The Chase
            </FooterLink>
            <FooterLink href="/library/category/tools">Tools</FooterLink>
          </FooterColumn>

          <FooterColumn label="Listen">
            {PLATFORMS.map((p) => (
              <FooterLink key={p.name} href={p.href} external>
                {p.name}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn label="Connect">
            <FooterLink href={SITE.bspUrl} external>
              Bible Study Pro
            </FooterLink>
            <FooterLink href="https://godchaser.faith" external>
              The Clothes
            </FooterLink>
            <FooterLink href="https://godchaser.sagomba.one" external>
              The Music
            </FooterLink>
            <FooterLink href="/book">The Book</FooterLink>
          </FooterColumn>
        </div>

        <div className="mt-14 pt-8 border-t border-text-inverse/15 flex flex-col md:flex-row gap-8 md:items-end md:justify-between">
          <div>
            <p className="font-display uppercase text-3xl tracking-[0.04em] text-text-inverse">
              Godchaser
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.24em] text-accent">
              {SITE.tagline}
            </p>
            <p className="mt-5 max-w-md text-sm text-text-inverse/70 italic leading-relaxed">
              &ldquo;Go therefore and make disciples of all nations,
              baptizing them in the name of the Father and of the Son and of
              the Holy Spirit, teaching them to observe all that I have
              commanded you.&rdquo;
              <span className="not-italic"> — Matthew 28:19–20</span>
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex flex-wrap gap-2">
              {PLATFORMS.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-text-inverse/20 px-3 py-1.5 text-xs font-medium text-text-inverse hover:bg-accent hover:text-text hover:border-accent transition-colors"
                >
                  {p.short}
                </a>
              ))}
            </div>
            <p className="text-xs text-text-inverse/60">
              © {new Date().getFullYear()} The Godchaser Ministry.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-display text-xs tracking-[0.24em] text-accent uppercase">
        {label}
      </h3>
      <ul className="mt-4 space-y-2 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  const classes =
    "text-text-inverse/80 hover:text-accent transition-colors";
  if (external) {
    return (
      <li>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      </li>
    );
  }
  return (
    <li>
      <Link href={href} className={classes}>
        {children}
      </Link>
    </li>
  );
}
