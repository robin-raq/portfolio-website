import { skillGroups } from "@/lib/skills";

export function SkillsPanel() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {skillGroups.map((group) => (
        <div
          key={group.label}
          className="win95-inset rounded-sm bg-white p-4 font-sans"
        >
          <h2 className="text-[11px] font-bold uppercase tracking-wide text-[#000080]">
            {group.label}
          </h2>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {group.items.map((item) => (
              <li
                key={item}
                className="win95-outset rounded-sm bg-[#c0c0c0] px-2 py-0.5 text-[11px] text-black"
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
