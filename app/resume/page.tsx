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
      <p className="font-sans text-[13px] text-[#2a2a2a]">
        <a
          href="/resume.pdf"
          download
          className="text-[#0000cc] underline hover:text-[#000080]"
        >
          Download resume.pdf
        </a>
      </p>
      <div className="win95-inset mt-6 min-h-[65vh] w-full overflow-hidden bg-[#525252] p-1">
        <iframe
          title="Resume PDF"
          src="/resume.pdf"
          className="h-[65vh] w-full bg-white"
        />
      </div>
    </>
  );
}
