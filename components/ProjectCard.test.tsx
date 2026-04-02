import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { WorkProject } from "@/lib/project-types";
import { ProjectCard } from "./ProjectCard";

const base: WorkProject = {
  id: "x",
  title: "Sample Project",
  summary: "A short summary for testing.",
  stack: ["React", "TypeScript"],
  tier: "fellowship",
};

describe("ProjectCard", () => {
  it("renders title, summary, and stack tags", () => {
    render(<ProjectCard project={base} />);
    expect(
      screen.getByRole("heading", { name: "Sample Project" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/A short summary for testing/)).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("renders Live site and GitHub links when URLs are set", () => {
    render(
      <ProjectCard
        project={{
          ...base,
          liveUrl: "https://example.com/app",
          repoUrl: "https://github.com/robin-raq/sample",
        }}
      />,
    );
    const live = screen.getByRole("link", { name: /Live site/i });
    expect(live).toHaveAttribute("href", "https://example.com/app");
    expect(live).toHaveAttribute("target", "_blank");
    const gh = screen.getByRole("link", { name: /GitHub/i });
    expect(gh).toHaveAttribute("href", "https://github.com/robin-raq/sample");
  });

  it("uses custom live label when provided", () => {
    render(
      <ProjectCard
        project={{
          ...base,
          liveUrl: "https://loom.com/video",
          liveLabel: "Watch demo",
        }}
      />,
    );
    expect(
      screen.getByRole("link", { name: /Watch demo/i }),
    ).toBeInTheDocument();
  });

  it("renders optional image when imageSrc is set", () => {
    render(
      <ProjectCard
        project={{
          ...base,
          imageSrc: "https://example.com/shot.png",
          imageAlt: "Screenshot",
        }}
      />,
    );
    expect(screen.getByRole("img", { name: "Screenshot" })).toHaveAttribute(
      "src",
      "https://example.com/shot.png",
    );
  });
});
