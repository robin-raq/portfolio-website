import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download or view Raq Robinson’s resume (PDF).",
};

export default function ResumePage() {
  return (
    <>
      <PageHeader
        title="Resume"
        description="PDF is the source of truth for applications."
      />
      <p className="text-sm text-zinc-400">
        <a
          href="/resume.pdf"
          download
          className="font-medium text-cyan-400 underline-offset-4 hover:text-cyan-300 hover:underline"
        >
          Download resume.pdf
        </a>
      </p>
      <div className="mt-8 min-h-[70vh] w-full overflow-hidden rounded-xl border border-zinc-600 bg-zinc-950">
        <iframe
          title="Resume PDF"
          src="/resume.pdf"
          className="h-[70vh] w-full"
        />
      </div>
    </>
  );
}
