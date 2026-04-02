import type { WorkProject } from "@/lib/project-types";

type Props = {
  project: WorkProject;
};

export function ProjectCard({ project }: Props) {
  const liveLabel = project.liveLabel ?? "Live site";
  const hasLinks = Boolean(project.liveUrl || project.repoUrl);

  return (
    <article className="win95-outset rounded-sm bg-white p-4 font-sans shadow-sm">
      {project.imageSrc ? (
        <div className="win95-inset mb-3 overflow-hidden bg-[#f5f5f5]">
          {/* eslint-disable-next-line @next/next/no-img-element -- external / data URLs; static export */}
          <img
            src={project.imageSrc}
            alt={project.imageAlt ?? ""}
            className="max-h-48 w-full object-cover object-center"
            loading="lazy"
          />
        </div>
      ) : null}
      <h3 className="text-base font-bold text-[#000080]">{project.title}</h3>
      <p className="mt-2 text-[13px] leading-snug text-[#2a2a2a]">
        {project.summary}
      </p>
      {hasLinks ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="win-btn rounded-sm text-[11px] no-underline"
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
              className="win-btn rounded-sm text-[11px] no-underline"
            >
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
        </div>
      ) : null}
      <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tech stack">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="win95-inset bg-[#fffff0] px-2 py-0.5 text-[11px] text-[#1a1a1a]"
          >
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}
