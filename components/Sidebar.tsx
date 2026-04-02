import Image from "next/image";
import Link from "next/link";

const GITHUB = "https://github.com/robin-raq";
const LINKEDIN = "https://www.linkedin.com/in/raq-robinson";

export function Sidebar() {
  return (
    <aside className="win95-outset flex w-full shrink-0 flex-col overflow-hidden rounded-sm bg-[#c0c0c0] lg:w-72">
      <div className="win-titlebar shrink-0">
        <span aria-hidden className="inline-block h-3 w-3 bg-[#c0c0c0] win95-outset" />
        <span>Profile</span>
      </div>
      <div className="flex flex-1 flex-col p-4 font-sans">
        <Link
          href="/"
          className="mx-auto block outline-none focus-visible:ring-2 focus-visible:ring-[#000080] focus-visible:ring-offset-2 focus-visible:ring-offset-[#c0c0c0]"
        >
          <div className="win95-inset relative h-28 w-28 overflow-hidden rounded-full bg-white p-0.5">
            <div className="relative h-full w-full overflow-hidden rounded-full border border-[#808080]">
              <Image
                src="/avatar-flat-vector.png"
                alt="Raq Robinson"
                fill
                className="object-cover"
                sizes="112px"
                priority
              />
            </div>
          </div>
        </Link>

        <div className="mt-4 text-center">
          <p className="text-lg font-bold text-black">Raq Robinson</p>
          <p className="mt-2 inline-block win95-inset bg-[#fffff0] px-2 py-1 font-mono text-[10px] text-[#000080]">
            {"{ senior fullstack engineer }"}
          </p>
        </div>

        <ul className="mt-6 space-y-3 text-[12px]">
          <li>
            <p className="font-bold text-[#000080]">Email</p>
            <Link
              href="/contact"
              className="mt-0.5 block text-[#0000cc] underline hover:text-[#000080]"
            >
              Contact form
            </Link>
          </li>
          <li>
            <p className="font-bold text-[#000080]">LinkedIn</p>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-0.5 block truncate text-[#0000cc] underline hover:text-[#000080]"
            >
              linkedin.com/in/raq-robinson
            </a>
          </li>
          <li>
            <p className="font-bold text-[#000080]">GitHub</p>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-0.5 block truncate text-[#0000cc] underline hover:text-[#000080]"
            >
              github.com/robin-raq
            </a>
          </li>
          <li>
            <p className="font-bold text-[#000080]">Location</p>
            <p className="mt-0.5 text-black">Brooklyn, NY</p>
          </li>
        </ul>
      </div>
    </aside>
  );
}
