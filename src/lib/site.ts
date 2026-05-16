export const SITE = {
  name: "The Godchaser",
  tagline: "Scripture Interpreting Scripture",
  description:
    "A home for people chasing God with everything they have. Bible-first, non-denominational, Scripture-saturated.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://godchaserpodcast.com",
  bspUrl:
    process.env.NEXT_PUBLIC_BSP_URL ?? "https://bible.godchaserpodcast.com",
} as const;

export const NAV = [
  { label: "Library", href: "/library" as const },
  { label: "The Book", href: "/book" as const },
  { label: "What We Believe", href: "/believe" as const },
  { label: "About", href: "/about" as const },
] as const;

export const PLATFORMS = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@thegodchaserpodcast",
    short: "YouTube",
  },
  {
    name: "Apple Podcasts",
    href: "https://podcasts.apple.com/gb/podcast/godchaser-podcast/id1686203840",
    short: "Apple",
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/show/4I7kmwNCdi5aXIqfXGRgEN",
    short: "Spotify",
  },
  {
    name: "Amazon Music",
    href: "https://music.amazon.co.uk/podcasts/a390c9e6-1e26-4b67-847c-b5ab2a712073/godchaser-podcast",
    short: "Amazon",
  },
  {
    name: "Buzzsprout",
    href: "https://www.buzzsprout.com/2176713",
    short: "Buzzsprout",
  },
] as const;

export const UNIVERSE = [
  {
    name: "The Podcast",
    blurb: "Weekly biblical teaching wherever you listen.",
    href: "https://www.youtube.com/@thegodchaserpodcast",
    external: true,
    showPlatforms: true,
  },
  {
    name: "The Book",
    blurb: "Read a chapter, then the rest.",
    href: "/book",
    external: false,
    showPlatforms: false,
  },
  {
    name: "Godchaser Music",
    blurb: "Songs that point to Jesus.",
    href: "https://godchaser.sagomba.one",
    external: true,
    showPlatforms: false,
  },
  {
    name: "The Clothes",
    blurb: "Wear what you believe.",
    href: "https://godchaser.faith",
    external: true,
    showPlatforms: false,
  },
] as const;

export const BELIEFS = [
  {
    title: "The Bible",
    body: "The inspired Word of God, fully true, the final authority for faith and life.",
  },
  {
    title: "One God",
    body: "Eternally existing in three persons: Father, Son, and Holy Spirit.",
  },
  {
    title: "Jesus the Son",
    body: "Fully God and fully man, sinless, crucified, risen bodily for our salvation.",
  },
  {
    title: "Salvation",
    body: "By grace alone, through faith alone, in Christ alone — not by works.",
  },
  {
    title: "The Holy Spirit",
    body: "Indwells every believer to seal, sanctify, empower, and gift the church.",
  },
  {
    title: "The Church",
    body: "The body of all who trust Jesus, sent to make disciples through Scripture.",
  },
  {
    title: "Marriage",
    body: "A covenant between one man and one woman, the picture of Christ and His church.",
  },
  {
    title: "The Sanctity of Life",
    body: "Every life bears God's image — known and loved before birth, into eternity.",
  },
  {
    title: "Discipleship",
    body: "Faith is followed by obedience. We grow by abiding in the Word, not by tradition.",
  },
  {
    title: "Spiritual Gifts",
    body: "Given to every believer by the Spirit, for the building up of the church.",
  },
  {
    title: "The Return of Christ",
    body: "Jesus returns bodily, visibly, and personally — to judge and to make all things new.",
  },
  {
    title: "Eternity",
    body: "Eternal life with God for those who trust Jesus; eternal separation for those who don't.",
  },
] as const;

export const CATEGORIES = [
  "Foundations",
  "Doctrine",
  "The Chase",
  "Tools",
] as const;

export type Category = (typeof CATEGORIES)[number];
