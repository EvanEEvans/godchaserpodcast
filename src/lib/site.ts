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

export type Belief = {
  title: string;
  slug: string;
  short: string;
  body: string;
  scriptures: readonly string[];
};

export const BELIEFS: readonly Belief[] = [
  {
    title: "The Bible",
    slug: "the-bible",
    short: "The inspired Word of God, fully true, the final authority for faith and life.",
    body: "We believe the Bible is the inspired, inerrant Word of God: 66 books written by men carried along by the Holy Spirit, fully true in all it affirms, and the final authority for everything we believe and how we live. Scripture interprets Scripture — the Bible's clearer passages explain its harder ones, and no single verse stands alone against the whole counsel of God. We don't add to it. We don't subtract from it. We let it speak.",
    scriptures: ["2 Timothy 3:16-17", "2 Peter 1:20-21", "Psalm 119:160"],
  },
  {
    title: "One God",
    slug: "one-god",
    short: "Eternally existing in three persons: Father, Son, and Holy Spirit.",
    body: "We believe in one eternal God who exists in three Persons: Father, Son, and Holy Spirit. Not three gods. Not one God in three masks. One Being, three Persons — equal in power, glory, and nature, distinct in role and relationship. This is the God who made everything from nothing, who sustains it all, and who is working all things according to His will and for the good of those who love Him.",
    scriptures: ["Deuteronomy 6:4", "Matthew 28:19", "2 Corinthians 13:14"],
  },
  {
    title: "Jesus the Son",
    slug: "jesus-the-son",
    short: "Fully God and fully man, sinless, crucified, risen bodily for our salvation.",
    body: "We believe Jesus Christ is fully God and fully man: the eternal Son who took on flesh, was born of a virgin, lived a sinless life, died on the cross to pay the penalty for sin, rose bodily on the third day, ascended to the Father, and will return as King and Judge. He is the only way to God — not one way among many, but the way Scripture testifies to.",
    scriptures: ["John 1:1-14", "John 14:6", "1 Corinthians 15:3-4", "Hebrews 4:15"],
  },
  {
    title: "Salvation",
    slug: "salvation",
    short: "By grace alone, through faith alone, in Christ alone — not by works.",
    body: "We believe salvation is by grace alone, through faith alone, in Christ alone, according to Scripture alone, for the glory of God alone. We cannot earn it, work for it, or deserve it. It is a gift, received by repentance and trust in what Jesus did on the cross and confirmed by His resurrection. Everyone who calls on the name of the Lord will be saved.",
    scriptures: ["Ephesians 2:8-9", "Romans 10:9-13", "Titus 3:5"],
  },
  {
    title: "The Holy Spirit",
    slug: "the-holy-spirit",
    short: "Indwells every believer to seal, sanctify, empower, and gift the church.",
    body: "We believe the Holy Spirit is God — a Person, not a force. At the moment a person is saved, the Spirit enters and seals them, convicts of sin, leads into truth, produces fruit, distributes gifts to the church, and empowers the believer to live a life that honours God. He is not optional to the Christian life. He is the Christian life.",
    scriptures: [
      "John 14:16-17",
      "Ephesians 1:13-14",
      "Galatians 5:22-23",
      "1 Corinthians 12:4-11",
    ],
  },
  {
    title: "The Church",
    slug: "the-church",
    short: "The body of all who trust Jesus, sent to make disciples through Scripture.",
    body: "We believe the Church is not a building or a denomination but the body of all true believers — past, present, and future — with Jesus Christ as the Head. Local churches gather to worship, hear the Word preached, take communion, baptise new believers, disciple one another, and send people out with the gospel. Belonging to a local church isn't optional for the Christian — it's how God grows His people.",
    scriptures: ["Ephesians 1:22-23", "Hebrews 10:24-25", "Acts 2:42-47"],
  },
  {
    title: "Marriage",
    slug: "marriage",
    short: "A covenant between one man and one woman, the picture of Christ and His church.",
    body: "We believe marriage was instituted by God at creation as a lifelong covenant between one man and one woman. It pictures the relationship between Christ and the Church — His sacrificial love, her faithful response. Within this covenant, sexual intimacy is given as a gift. Outside of it, sexual activity falls short of God's good design. We hold this with grace and without compromise, because Scripture holds it that way.",
    scriptures: [
      "Genesis 2:24",
      "Matthew 19:4-6",
      "Ephesians 5:22-33",
      "Hebrews 13:4",
    ],
  },
  {
    title: "The Sanctity of Life",
    slug: "the-sanctity-of-life",
    short: "Every life bears God's image — known and loved before birth, into eternity.",
    body: "We believe every human being — from the moment of conception to natural death — is made in the image of God and possesses inherent dignity and worth. This shapes how we view the unborn, the elderly, the disabled, the stranger, and the enemy. Life is God's to give and God's to take. Our role is to honour it, protect it, and proclaim the gospel of the One who came that we might have it abundantly.",
    scriptures: ["Genesis 1:27", "Psalm 139:13-16", "Jeremiah 1:5", "John 10:10"],
  },
  {
    title: "Discipleship",
    slug: "discipleship",
    short: "Faith is followed by obedience. We grow by abiding in the Word, not by tradition.",
    body: "We believe every Christian is called to be a disciple — not just a convert. A disciple is one who follows Jesus, learns from Him, becomes like Him, and helps others do the same. This isn't a programme to complete. It's the rest of your life. The Great Commission isn't 'make decisions.' It's 'make disciples.' That is the work of the church until Jesus returns.",
    scriptures: ["Matthew 28:18-20", "Luke 9:23", "2 Timothy 2:2"],
  },
  {
    title: "Spiritual Gifts",
    slug: "spiritual-gifts",
    short: "Given to every believer by the Spirit, for the building up of the church.",
    body: "We believe the Holy Spirit gives gifts to every believer for the building up of the church and the work of ministry. Some gifts equip; some serve; some lead; some speak. None are given for show. None are given to elevate the gifted above the rest. The point of every gift is the body — that the church would be strengthened and Christ would be made known.",
    scriptures: [
      "1 Corinthians 12",
      "Romans 12:3-8",
      "Ephesians 4:11-13",
      "1 Peter 4:10-11",
    ],
  },
  {
    title: "The Return of Christ",
    slug: "the-return-of-christ",
    short: "Jesus returns bodily, visibly, and personally — to judge and to make all things new.",
    body: "We believe Jesus is coming back — personally, visibly, bodily, in glory. He will judge the living and the dead. He will gather His people to Himself. He will make all things new. We don't know when. We don't claim charts. But we live with our eyes lifted, doing the work He gave us until He appears.",
    scriptures: [
      "Acts 1:11",
      "1 Thessalonians 4:13-18",
      "Revelation 22:12",
      "Matthew 24:36",
    ],
  },
  {
    title: "Eternity",
    slug: "eternity",
    short: "Eternal life with God for those who trust Jesus; eternal separation for those who don't.",
    body: "We believe in the resurrection of the dead and life everlasting. Those who trust Christ will be raised to eternal joy with Him in the new heavens and new earth. Those who reject Him face eternal separation from God. This is a hard truth, but it is the truth Jesus Himself taught — and it is the reason the gospel is urgent. Eternity is real. Today is the day.",
    scriptures: [
      "John 5:28-29",
      "Revelation 21:1-5",
      "2 Thessalonians 1:8-9",
      "2 Corinthians 6:2",
    ],
  },
];

export const CATEGORIES = [
  "Foundations",
  "Doctrine",
  "The Chase",
  "Tools",
] as const;

export type Category = (typeof CATEGORIES)[number];
