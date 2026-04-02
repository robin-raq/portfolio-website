import { skillGroups } from "@/lib/skills";

export function SkillsPanel() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {skillGroups.map((group) => (
        <div
          key={group.label}
          className="rounded-sm border border-term bg-term-inset p-4 font-mono shadow-[inset_0_0_20px_rgba(0,0,0,0.3)]"
        >
          <h2 className="text-[10px] font-bold uppercase tracking-[0.15em] text-term-dim">
            :: {group.label}
          </h2>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {group.items.map((item) => (
              <li
                key={item}
                className="border border-term bg-term-bg px-2 py-0.5 text-[10px] text-term-fg"
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
