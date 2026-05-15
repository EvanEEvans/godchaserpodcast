import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://godchaserpodcast.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Godchaser — Scripture Interpreting Scripture",
    template: "%s · The Godchaser",
  },
  description:
    "A home for people chasing God with everything they have. Teaching, podcast, books, music, and Bible Study Pro — all anchored in Scripture.",
  applicationName: "The Godchaser",
  keywords: [
    "Bible study",
    "discipleship",
    "Scripture",
    "Christian podcast",
    "Bible Study Pro",
    "Godchaser",
    "non-denominational",
  ],
  authors: [{ name: "Ev Evans" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "The Godchaser",
    title: "The Godchaser — Scripture Interpreting Scripture",
    description:
      "A home for people chasing God with everything they have. Bible-first, non-denominational, Scripture-saturated.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Godchaser",
    description:
      "Scripture Interpreting Scripture. A home for people chasing God.",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1d3a",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
