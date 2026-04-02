import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const nav: { href: string; label: string }[] = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

const linkClass =
  "rounded-md px-2 py-1.5 text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-teal-600 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          Raq Robinson
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center justify-end gap-1 text-sm sm:gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                {item.href.startsWith("/") ? (
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                ) : (
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li className="ml-1 pl-2 sm:border-l sm:border-zinc-200/80 dark:sm:border-zinc-700">
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
