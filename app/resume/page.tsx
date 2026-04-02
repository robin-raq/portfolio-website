import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { publicPath } from "@/lib/publicPath";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download or view Raq Robinson’s resume (PDF).",
};

export default function ResumePage() {
  const resumePdf = publicPath("/resume.pdf");

  return (
    <>
      <PageHeader
        title="Resume"
        description="PDF is the source of truth for applications."
      />
      <p className="font-mono text-[12px] text-term-body">
        <a
          href={resumePdf}
          download
          className="text-term-bright underline decoration-green-800/60 hover:text-[var(--term-link-hover)]"
        >
          [download] resume.pdf
        </a>
      </p>
      <div className="mt-6 min-h-[65vh] w-full overflow-hidden rounded-sm border border-term bg-black/60">
        <iframe
          title="Resume PDF"
          src={resumePdf}
          className="h-[65vh] w-full bg-[#1a1a1a]"
        />
      </div>
    </>
  );
}
