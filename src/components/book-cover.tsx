import Image from "next/image";
import { publicFileExists } from "@/lib/book";

type Variant = "godchaser" | "love-lifted-me";

type Props = {
  variant: Variant;
  filename: string;
  alt: string;
  priority?: boolean;
};

export function BookCover({ variant, filename, alt, priority }: Props) {
  const exists = publicFileExists(filename);

  return (
    <div className="relative aspect-[2/3] w-full">
      <div
        aria-hidden
        className="absolute -inset-3 rounded-[1.5rem] blur-2xl"
        style={{ background: "var(--purple-glow)" }}
      />
      <div
        aria-hidden
        className="absolute -inset-1 rounded-[1rem] blur-md"
        style={{ background: "var(--accent-glow)" }}
      />
      {exists ? (
        <Image
          src={`/${filename}`}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 80vw, 380px"
          className="relative rounded-lg shadow-2xl object-cover"
        />
      ) : (
        <CoverPlaceholder variant={variant} />
      )}
    </div>
  );
}

function CoverPlaceholder({ variant }: { variant: Variant }) {
  if (variant === "love-lifted-me") {
    return (
      <svg
        viewBox="0 0 300 450"
        className="relative w-full h-full drop-shadow-2xl rounded-lg"
        aria-hidden
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lifted-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1d224a" />
            <stop offset="60%" stopColor="#14163c" />
            <stop offset="100%" stopColor="#0a0c24" />
          </linearGradient>
          <linearGradient id="lifted-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c9a437" />
            <stop offset="100%" stopColor="#a48226" />
          </linearGradient>
        </defs>
        <rect width="300" height="450" rx="6" fill="url(#lifted-bg)" />
        <rect
          x="10"
          y="10"
          width="280"
          height="430"
          rx="4"
          fill="none"
          stroke="url(#lifted-stroke)"
          strokeWidth="0.8"
          opacity="0.55"
        />
        <g stroke="url(#lifted-stroke)" strokeWidth="1" fill="none" opacity="0.55">
          <path d="M150 110 q 60 60 0 130 q -60 -70 0 -130 z" />
          <path d="M150 130 q 40 40 0 90 q -40 -50 0 -90 z" opacity="0.6" />
        </g>
        <text
          x="150"
          y="280"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="26"
          fontStyle="italic"
          fontWeight="500"
          fill="#ffffff"
        >
          Love
        </text>
        <text
          x="150"
          y="316"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="26"
          fontStyle="italic"
          fontWeight="500"
          fill="#ffffff"
        >
          Lifted Me
        </text>
        <text
          x="150"
          y="396"
          textAnchor="middle"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize="9"
          letterSpacing="3"
          fontWeight="600"
          fill="#c9a437"
        >
          A NOVEL · EVAN EVANS
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 300 450"
      className="relative w-full h-full drop-shadow-2xl rounded-lg"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="god-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2d5a" />
          <stop offset="100%" stopColor="#0f1226" />
        </linearGradient>
        <linearGradient id="god-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c9a437" />
          <stop offset="100%" stopColor="#a48226" />
        </linearGradient>
      </defs>
      <rect width="300" height="450" rx="6" fill="url(#god-bg)" />
      <rect
        x="10"
        y="10"
        width="280"
        height="430"
        rx="4"
        fill="none"
        stroke="url(#god-stroke)"
        strokeWidth="0.8"
        opacity="0.55"
      />
      <g stroke="url(#god-stroke)" strokeWidth="1" fill="none" opacity="0.7">
        <circle cx="150" cy="180" r="64" />
        <circle cx="150" cy="180" r="44" opacity="0.65" />
        <circle cx="150" cy="180" r="22" opacity="0.4" />
      </g>
      <text
        x="150"
        y="310"
        textAnchor="middle"
        fontFamily="Helvetica, Arial, sans-serif"
        fontSize="18"
        letterSpacing="6"
        fontWeight="600"
        fill="#ffffff"
      >
        THE
      </text>
      <text
        x="150"
        y="346"
        textAnchor="middle"
        fontFamily="Helvetica, Arial, sans-serif"
        fontSize="28"
        letterSpacing="3"
        fontWeight="700"
        fill="#ffffff"
      >
        GODCHASER
      </text>
      <text
        x="150"
        y="380"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="10"
        fontStyle="italic"
        fill="#c9a437"
      >
        a novel
      </text>
      <text
        x="150"
        y="412"
        textAnchor="middle"
        fontFamily="Helvetica, Arial, sans-serif"
        fontSize="9"
        letterSpacing="3"
        fontWeight="600"
        fill="#c9a437"
      >
        EVAN EVANS
      </text>
    </svg>
  );
}
