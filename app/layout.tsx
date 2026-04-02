import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { MainNav } from "@/components/MainNav";
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
      className={`dark ${dmSans.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-slate-950 text-zinc-100">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-cyan-600 focus:px-3 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-6 p-4 pb-8 lg:flex-row lg:gap-8 lg:p-8">
            <Sidebar />
            <div className="flex min-h-[calc(100vh-2rem)] flex-1 flex-col rounded-3xl border border-cyan-500/20 bg-zinc-900/95 p-6 text-zinc-100 shadow-2xl shadow-black/30 ring-1 ring-zinc-700/50 backdrop-blur-sm lg:p-10">
              <MainNav />
              <div id="main" className="flex flex-1 flex-col pt-8">
                {children}
              </div>
              <footer className="mt-auto border-t border-zinc-700/60 pt-8 text-center text-xs text-zinc-500">
                © {new Date().getFullYear()} Raq Robinson
              </footer>
            </div>
          </div>
      </body>
    </html>
  );
}
