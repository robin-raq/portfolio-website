import type { Metadata } from "next";
import { DM_Sans, Merriweather } from "next/font/google";
import { MainNav } from "@/components/MainNav";
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const merriweather = Merriweather({
  variable: "--font-doc",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://raqdrobinson.com"),
  title: {
    default: "Raq Robinson | Senior Fullstack Engineer",
    template: "%s | Raq Robinson",
  },
  description:
    "Fullstack engineer building secure, scalable, user-centered apps — React, TypeScript, Node.js, AI systems, and enterprise financial tools.",
  openGraph: {
    title: "Raq Robinson | Senior Fullstack Engineer",
    description:
      "Portfolio: GauntletAI fellowship work, MassMutual, and selected projects.",
    url: "https://raqdrobinson.com",
    siteName: "Raq Robinson",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${merriweather.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#008080] p-3 font-sans text-[#1a1a1a] sm:p-6">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-sm focus:bg-[#000080] focus:px-3 focus:py-2 focus:text-white focus:outline-none"
        >
          Skip to content
        </a>
        <div className="mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-6xl flex-col gap-4 lg:flex-row lg:gap-5">
          <Sidebar />
          <div className="win95-outset flex min-h-[calc(100vh-2rem)] flex-1 flex-col overflow-hidden rounded-sm bg-[#c0c0c0]">
            <div className="win-titlebar shrink-0 rounded-t-sm">
              <span aria-hidden className="inline-block h-3 w-3 bg-[#c0c0c0] win95-outset" />
              <span>Portfolio — Microsoft Word</span>
            </div>
            <div className="win-toolbar shrink-0">
              <MainNav />
            </div>
            <div
              id="main"
              className={`${merriweather.className} doc-paper mx-2 mb-2 mt-1 flex flex-1 flex-col rounded-sm p-5 sm:mx-3 sm:mb-3 sm:p-8`}
            >
              <div className="flex flex-1 flex-col">{children}</div>
              <footer className="mt-10 border-t-2 border-dotted border-[#808080] pt-4 text-center font-sans text-xs text-[#404040]">
                © {new Date().getFullYear()} Raq Robinson
              </footer>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
