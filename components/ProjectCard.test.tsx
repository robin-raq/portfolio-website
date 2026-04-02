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

  it("renders an external link when href is set", () => {
    render(
      <ProjectCard project={{ ...base, href: "https://example.com/app" }} />,
    );
    const link = screen.getByRole("link", { name: /Sample Project/i });
    expect(link).toHaveAttribute("href", "https://example.com/app");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("does not render a project link when href is absent", () => {
    render(<ProjectCard project={base} />);
    expect(screen.queryByRole("link", { name: /Sample Project/i })).toBeNull();
  });
});
