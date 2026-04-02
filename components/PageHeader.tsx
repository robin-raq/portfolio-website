type Props = {
  title: string;
  description?: string;
};

/** Terminal-style page title — LegacyLens / code-explorer vibe */
export function PageHeader({ title, description }: Props) {
  const slug = title.replace(/\s+/g, "_").toUpperCase();

  return (
    <header className="mb-8">
      <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-term-dim">
        $ query --section={slug}
      </p>
      <h1 className="term-glow font-mono text-2xl font-bold tracking-tight text-term-bright sm:text-3xl">
        <span className="text-term-dim">&gt; </span>
        {title}
      </h1>
      <pre
        className="term-rule mt-3 max-w-2xl overflow-x-auto text-[10px] text-term-muted sm:text-[11px]"
        aria-hidden
      >
        ─────────────────────────────────────────────────────────
      </pre>
      {description ? (
        <p className="mt-4 max-w-2xl text-[13px] leading-relaxed text-term-body">
          {description}
        </p>
      ) : null}
    </header>
  );
}
