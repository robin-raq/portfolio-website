export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-zinc-200/80 bg-zinc-100/80 py-6 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-500">
      <div className="mx-auto max-w-5xl px-4">
        © {new Date().getFullYear()} Raq Robinson
      </div>
    </footer>
  );
}
