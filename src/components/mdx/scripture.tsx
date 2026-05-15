type Props = {
  verse: string;
  children: React.ReactNode;
};

export function Scripture({ verse, children }: Props) {
  return (
    <figure className="my-10 border-l-4 border-accent pl-6">
      <blockquote className="italic text-[1.15rem] md:text-[1.25rem] leading-[1.6] text-text">
        {children}
      </blockquote>
      <figcaption className="mt-3 text-[0.7rem] tracking-[0.28em] uppercase font-semibold text-accent-deep">
        — {verse}
      </figcaption>
    </figure>
  );
}
