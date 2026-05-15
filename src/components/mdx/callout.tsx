type Props = {
  children: React.ReactNode;
};

export function Callout({ children }: Props) {
  return (
    <aside className="my-12 rounded-2xl border border-line bg-bg-elevated px-6 py-5">
      <div className="font-display text-[1.05rem] text-text leading-relaxed">
        {children}
      </div>
    </aside>
  );
}
