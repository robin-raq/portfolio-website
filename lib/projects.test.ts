import { describe, expect, it } from "vitest";
import { getOrderedProjects, workProjects } from "./projects";

describe("workProjects", () => {
  it("includes GauntletAI fellowship projects with expected titles", () => {
    const fellowship = workProjects.filter((p) => p.tier === "fellowship");
    const titles = fellowship.map((p) => p.title);
    expect(titles).toEqual(
      expect.arrayContaining([
        "ShipShape",
        "LegacyLens",
        "AgentForge",
        "CollabBoard",
      ]),
    );
    expect(fellowship.length).toBeGreaterThanOrEqual(4);
  });

  it("marks every project with a non-empty id and summary", () => {
    for (const p of workProjects) {
      expect(p.id.length).toBeGreaterThan(0);
      expect(p.summary.length).toBeGreaterThan(0);
      expect(p.stack.length).toBeGreaterThan(0);
    }
  });
});

describe("getOrderedProjects", () => {
  it("orders tiers: fellowship, then professional, then portfolio", () => {
    const ordered = getOrderedProjects();
    const tiers = ordered.map((p) => p.tier);
    const firstIdx = (t: (typeof tiers)[number]) => tiers.indexOf(t);
    expect(firstIdx("fellowship")).toBe(0);
    expect(firstIdx("professional")).toBeGreaterThan(firstIdx("fellowship"));
    expect(firstIdx("portfolio")).toBeGreaterThan(firstIdx("professional"));
  });
});
