import Image from "next/image";
import Link from "next/link";

const GITHUB = "https://github.com/robin-raq";
const LINKEDIN = "https://www.linkedin.com/in/raq-robinson";

export function Sidebar() {
  return (
    <aside className="flex w-full shrink-0 flex-col rounded-3xl border border-cyan-500/20 bg-zinc-900/95 p-6 shadow-2xl shadow-black/20 ring-1 ring-zinc-700/40 backdrop-blur-sm lg:w-72">
      <Link href="/" className="mx-auto block outline-none ring-offset-2 ring-offset-zinc-900 focus-visible:ring-2 focus-visible:ring-cyan-500">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-cyan-400/40 bg-zinc-800 shadow-lg ring-2 ring-zinc-800">
          <Image
            src="/avatar-flat-vector.png"
            alt="Raq Robinson"
            fill
            className="object-cover"
            sizes="128px"
            priority
          />
        </div>
      </Link>

      <div className="mt-5 text-center">
        <p className="font-serif text-xl font-semibold text-zinc-50">Raq Robinson</p>
        <p className="mt-2 inline-block rounded-md border border-cyan-500/35 bg-zinc-950/80 px-2.5 py-1 font-mono text-[11px] text-cyan-200/90">
          {"{ senior fullstack engineer }"}
        </p>
      </div>

      <ul className="mt-8 space-y-4 text-sm">
        <li>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
            Email
          </p>
          <Link
            href="/contact"
            className="mt-0.5 block text-zinc-100 underline-offset-2 hover:text-cyan-300 hover:underline"
          >
            Contact form
          </Link>
        </li>
        <li>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
            LinkedIn
          </p>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-0.5 block truncate text-zinc-100 underline-offset-2 hover:text-cyan-300 hover:underline"
          >
            linkedin.com/in/raq-robinson
          </a>
        </li>
        <li>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
            GitHub
          </p>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-0.5 block truncate text-zinc-100 underline-offset-2 hover:text-cyan-300 hover:underline"
          >
            github.com/robin-raq
          </a>
        </li>
        <li>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
            Location
          </p>
          <p className="mt-0.5 text-zinc-100">Brooklyn, NY</p>
        </li>
      </ul>
    </aside>
  );
}
