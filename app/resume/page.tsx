import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download or view Raq Robinson’s resume (PDF).",
};

export default function ResumePage() {
  return (
    <main
      id="main"
      className="mx-auto flex max-w-5xl flex-1 flex-col px-4 py-12 sm:px-6"
    >
      <h1 className="font-serif text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
        Resume
      </h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        PDF is the source of truth for applications.{" "}
        <a
          href="/resume.pdf"
          download
          className="font-medium text-teal-700 underline-offset-4 hover:underline dark:text-teal-400"
        >
          Download resume.pdf
        </a>
      </p>
      <div className="mt-8 min-h-[75vh] w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
        <iframe
          title="Resume PDF"
          src="/resume.pdf"
          className="h-[75vh] w-full"
        />
      </div>
    </main>
  );
}
