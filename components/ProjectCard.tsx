import type { WorkProject } from "@/lib/project-types";

type Props = {
  project: WorkProject;
};

export function ProjectCard({ project }: Props) {
  const liveLabel = project.liveLabel ?? "Live site";
  const hasLinks = Boolean(project.liveUrl || project.repoUrl);

  return (
    <article className="rounded-2xl border border-cyan-500/15 bg-zinc-800/40 p-6 shadow-lg shadow-black/20 ring-1 ring-zinc-700/50 transition hover:border-cyan-500/30 hover:bg-zinc-800/60">
      {project.imageSrc ? (
        <div className="mb-4 overflow-hidden rounded-xl border border-zinc-600/50 bg-zinc-900/80">
          {/* eslint-disable-next-line @next/next/no-img-element -- external / data URLs; static export */}
          <img
            src={project.imageSrc}
            alt={project.imageAlt ?? ""}
            className="max-h-48 w-full object-cover object-center"
            loading="lazy"
          />
        </div>
      ) : null}
      <h3 className="text-lg font-semibold tracking-tight text-zinc-50">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
        {project.summary}
      </p>
      {hasLinks ? (
        <div className="mt-4 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-cyan-500/35 bg-cyan-950/40 px-3 py-1.5 text-sm font-medium text-cyan-200 transition hover:bg-cyan-950/70"
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
              className="inline-flex items-center rounded-lg border border-zinc-600 bg-zinc-900/80 px-3 py-1.5 text-sm font-medium text-zinc-100 transition hover:bg-zinc-800"
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
            className="rounded-full border border-zinc-600/60 bg-zinc-900/50 px-2.5 py-0.5 text-xs text-zinc-300"
          >
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}
