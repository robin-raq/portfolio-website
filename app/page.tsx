import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior fullstack engineer — React, TypeScript, Node.js, AI systems, and enterprise tools.",
};

export default function HomePage() {
  return (
    <>
      <PageHeader
        title="About me"
        description="I build secure, scalable, user-centered software — from AI systems and RAG pipelines to enterprise financial tools."
      />
      <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-zinc-400">
        <p>
          I&apos;m a senior fullstack engineer focused on clean architecture,
          thoughtful UX, and shipping production-ready products. My background
          in industrial engineering helps me connect engineering, design, and
          delivery.
        </p>
        <p>
          Outside of work I DJ and collaborate on community-focused tech and
          arts projects. I&apos;m part of the{" "}
          <a
            href="https://outintech.com/digital-corps/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-cyan-400 underline-offset-4 hover:text-cyan-300 hover:underline"
          >
            Out in Tech
          </a>{" "}
          digital corps, building web products for LGBTQ+ activist and
          nonprofit organizations.
        </p>
        <p>
          I&apos;m based in Brooklyn and exploring full-stack or front-end roles
          on teams that value creativity, purpose-driven work, and continuous
          learning.
        </p>
      </div>
    </>
  );
}
