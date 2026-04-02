import { describe, expect, it } from "vitest";
import { skillGroups } from "./skills";

describe("skillGroups", () => {
  it("has non-empty labels and items in every group", () => {
    for (const g of skillGroups) {
      expect(g.label.length).toBeGreaterThan(0);
      expect(g.items.length).toBeGreaterThan(0);
      for (const item of g.items) {
        expect(item.length).toBeGreaterThan(0);
      }
    }
  });

  it("includes core stack keywords from the resume", () => {
    const flat = skillGroups.flatMap((g) => g.items);
    expect(flat).toEqual(expect.arrayContaining(["TypeScript", "React", "Next.js"]));
  });
});
