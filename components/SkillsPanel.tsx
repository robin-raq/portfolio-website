import { skillGroups } from "@/lib/skills";

export function SkillsPanel() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {skillGroups.map((group) => (
        <div
          key={group.label}
          className="rounded-2xl border border-cyan-500/15 bg-zinc-800/40 p-5 ring-1 ring-zinc-700/50"
        >
          <h2 className="font-mono text-sm font-semibold uppercase tracking-wider text-cyan-400/90">
            {group.label}
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-zinc-600/50 bg-zinc-900/60 px-2.5 py-1 text-xs text-zinc-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
