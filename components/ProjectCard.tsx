import type { WorkProject } from "@/lib/project-types";

type Props = {
  project: WorkProject;
};

export function ProjectCard({ project }: Props) {
  const title =
    project.href != null ? (
      <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm text-teal-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 dark:text-teal-400"
        >
          {project.title}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </h3>
    ) : (
      <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {project.title}
      </h3>
    );

  return (
    <article className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition hover:border-teal-500/40 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
      {title}
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {project.summary}
      </p>
      <ul className="mt-3 flex flex-wrap gap-2" aria-label="Tech stack">
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
