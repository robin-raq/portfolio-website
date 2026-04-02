import type { WorkProject } from "@/lib/project-types";

type Props = {
  project: WorkProject;
};

export function ProjectCard({ project }: Props) {
  const liveLabel = project.liveLabel ?? "Live site";
  const hasLinks = Boolean(project.liveUrl || project.repoUrl);

  return (
    <article className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition hover:border-teal-500/40 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
      {project.imageSrc ? (
        <div className="mb-4 overflow-hidden rounded-xl border border-zinc-200/80 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
          {/* eslint-disable-next-line @next/next/no-img-element -- external / data URLs; static export */}
          <img
            src={project.imageSrc}
            alt={project.imageAlt ?? ""}
            className="max-h-48 w-full object-cover object-center"
            loading="lazy"
          />
        </div>
      ) : null}
      <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {project.summary}
      </p>
      {hasLinks ? (
        <div className="mt-4 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-teal-600/30 bg-teal-50 px-3 py-1.5 text-sm font-medium text-teal-800 transition hover:bg-teal-100 dark:border-teal-500/40 dark:bg-teal-950/50 dark:text-teal-200 dark:hover:bg-teal-900/50"
            >
              {liveLabel}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
        </div>
      ) : null}
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-zinc-200/80 bg-zinc-50 px-2.5 py-0.5 text-xs text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-300"
          >
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}
