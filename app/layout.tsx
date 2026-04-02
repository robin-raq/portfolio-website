import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { Providers } from "@/components/Providers";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
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
      className={`${dmSans.variable} ${fraunces.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
        <Providers>
          <SiteHeader />
          {children}
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
