type Props = {
  slug: string;
  category: string;
};

/**
 * Each post gets a deterministic abstract SVG illustration: an illuminated
 * geometric shape in gold on dark, so launches have visual variety without
 * stock imagery. Variant is picked from the slug hash.
 */
export function PostHeroArt({ slug, category }: Props) {
  const variant = hashSlug(slug) % 6;

  return (
    <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden border border-line bg-bg-deep">
      <svg
        viewBox="0 0 800 350"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden
      >
        <defs>
          <radialGradient id={`glow-${slug}`} cx="20%" cy="0%" r="70%">
            <stop offset="0%" stopColor="#72709b" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#72709b" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#72709b" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`gold-${slug}`} cx="95%" cy="100%" r="65%">
            <stop offset="0%" stopColor="#c9a437" stopOpacity="0.30" />
            <stop offset="60%" stopColor="#c9a437" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#c9a437" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`stroke-${slug}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c9a437" />
            <stop offset="100%" stopColor="#a48226" />
          </linearGradient>
        </defs>
        <rect width="800" height="350" fill="#14163c" />
        <rect width="800" height="350" fill={`url(#glow-${slug})`} />
        <rect width="800" height="350" fill={`url(#gold-${slug})`} />
        <Shape
          variant={variant}
          strokeId={`stroke-${slug}`}
        />
      </svg>
      <div className="absolute bottom-4 left-5 text-[0.7rem] tracking-[0.24em] uppercase text-accent/80">
        {category}
      </div>
    </div>
  );
}

function Shape({
  variant,
  strokeId,
}: {
  variant: number;
  strokeId: string;
}) {
  const stroke = `url(#${strokeId})`;
  const common = {
    fill: "none",
    stroke,
    strokeWidth: 1.4,
  } as const;

  switch (variant) {
    case 0:
      return (
        <g {...common}>
          <circle cx="400" cy="175" r="120" />
          <circle cx="400" cy="175" r="80" opacity="0.7" />
          <circle cx="400" cy="175" r="40" opacity="0.4" />
        </g>
      );
    case 1:
      return (
        <g {...common}>
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            const x = 400 + Math.cos(angle) * 130;
            const y = 175 + Math.sin(angle) * 110;
            return (
              <line key={i} x1="400" y1="175" x2={x} y2={y} opacity="0.7" />
            );
          })}
          <circle cx="400" cy="175" r="6" fill={stroke} />
        </g>
      );
    case 2:
      return (
        <g {...common}>
          <polygon points="400,55 540,295 260,295" />
          <polygon points="400,105 500,275 300,275" opacity="0.55" />
        </g>
      );
    case 3:
      return (
        <g {...common}>
          {Array.from({ length: 9 }).map((_, i) => (
            <rect
              key={i}
              x={260 + i * 32}
              y={170 - i * 8}
              width="22"
              height={20 + i * 14}
              opacity={0.4 + i * 0.06}
            />
          ))}
        </g>
      );
    case 4:
      return (
        <g {...common}>
          <path d="M180 260 C 280 60, 520 60, 620 260" />
          <path d="M180 280 C 300 100, 500 100, 620 280" opacity="0.6" />
          <path d="M180 300 C 320 140, 480 140, 620 300" opacity="0.35" />
        </g>
      );
    case 5:
    default:
      return (
        <g {...common}>
          <rect x="280" y="60" width="240" height="230" />
          <line x1="400" y1="60" x2="400" y2="290" />
          <line x1="280" y1="175" x2="520" y2="175" />
          <circle cx="400" cy="175" r="60" />
        </g>
      );
  }
}

function hashSlug(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}
