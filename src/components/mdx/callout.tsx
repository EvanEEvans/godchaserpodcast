type Props = {
  children: React.ReactNode;
};

export function Callout({ children }: Props) {
  return (
    <aside className="my-12 rounded-2xl bg-bg-subtle border-l-4 border-l-purple px-6 py-5">
      <div className="text-[1.05rem] text-text leading-relaxed font-medium">
        {children}
      </div>
    </aside>
  );
}
