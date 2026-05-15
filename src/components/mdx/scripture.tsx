type Props = {
  verse: string;
  children: React.ReactNode;
};

export function Scripture({ verse, children }: Props) {
  return (
    <figure className="my-10 border-l-2 border-accent pl-6">
      <blockquote className="italic text-[1.2rem] md:text-[1.3rem] leading-[1.55] text-text-dim">
        {children}
      </blockquote>
      <figcaption className="mt-3 text-xs tracking-[0.24em] uppercase text-text-muted">
        — {verse}
      </figcaption>
    </figure>
  );
}
