"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { ProjectTier } from "@/lib/project-types";
import { getOrderedProjects } from "@/lib/projects";

const filters: { id: "all" | ProjectTier; label: string }[] = [
  { id: "all", label: "All" },
  { id: "fellowship", label: "Fellowship" },
  { id: "professional", label: "Professional" },
  { id: "portfolio", label: "Portfolio" },
];

export function ProjectsPanel() {
  const all = useMemo(() => getOrderedProjects(), []);
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");

  const filtered =
    filter === "all"
      ? all
      : all.filter((p) => p.tier === filter);

  return (
    <div>
      <div
        className="mb-8 flex flex-wrap gap-2 border-b border-zinc-700/60 pb-4"
        role="tablist"
        aria-label="Filter projects"
      >
        {filters.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f.id)}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
                active
                  ? "bg-cyan-950/80 text-cyan-300 ring-1 ring-cyan-500/40"
                  : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <ul className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        {filtered.map((p) => (
          <li key={p.id}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}
