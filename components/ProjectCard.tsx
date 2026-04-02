import type { WorkProject } from "@/lib/project-types";

type Props = {
  project: WorkProject;
};

export function ProjectCard({ project }: Props) {
  const liveLabel = project.liveLabel ?? "Live site";
  const hasLinks = Boolean(project.liveUrl || project.repoUrl);

  return (
    <article className="rounded-sm border border-term bg-term-inset p-4 font-mono shadow-[inset_0_0_24px_rgba(0,0,0,0.35)]">
      {project.imageSrc ? (
        <div className="mb-3 overflow-hidden border border-term bg-black/50">
          {/* eslint-disable-next-line @next/next/no-img-element -- external / data URLs; static export */}
          <img
            src={project.imageSrc}
            alt={project.imageAlt ?? ""}
            className="max-h-48 w-full object-cover object-center opacity-90"
            loading="lazy"
          />
        </div>
      ) : null}
      <h3 className="text-sm font-bold uppercase tracking-wide text-term-bright">
        {project.title}
      </h3>
      <p className="mt-2 text-[12px] leading-relaxed text-term-body">
        {project.summary}
      </p>
      {hasLinks ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="term-btn rounded-sm text-[10px] no-underline"
            >
              [{liveLabel}]
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="term-btn rounded-sm text-[10px] no-underline"
            >
              [GitHub]
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
        </div>
      ) : null}
      <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tech stack">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="border border-term bg-term-bg px-2 py-0.5 text-[10px] text-term-dim"
          >
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}
