"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/lib/nav";

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="flex flex-wrap items-center justify-start gap-2 font-sans text-[12px]"
    >
      {primaryNav.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={
              active ? "win-btn-active win-btn rounded-sm" : "win-btn rounded-sm"
            }
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
