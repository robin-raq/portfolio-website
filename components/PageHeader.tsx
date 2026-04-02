type Props = {
  title: string;
  description?: string;
};

/** Word-style heading: blue “Heading 1” look, readable serif. */
export function PageHeader({ title, description }: Props) {
  return (
    <header className="mb-8 font-[family-name:var(--font-doc)]">
      <h1 className="text-3xl font-bold tracking-tight text-[#000080] underline decoration-[#000080] decoration-2 underline-offset-[6px] sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#2a2a2a]">
          {description}
        </p>
      ) : null}
    </header>
  );
}
