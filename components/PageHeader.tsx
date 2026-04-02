type Props = {
  title: string;
  description?: string;
};

/** Large page title with accent bar (helloadrien-style). */
export function PageHeader({ title, description }: Props) {
  return (
    <header className="mb-10">
      <h1 className="font-serif text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
        {title}
      </h1>
      <div
        className="mt-3 h-1 w-14 rounded-full bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.45)]"
        aria-hidden
      />
      {description ? (
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400">
          {description}
        </p>
      ) : null}
    </header>
  );
}
