import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProjectsPanel } from "@/components/ProjectsPanel";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "GauntletAI fellowship builds, MassMutual, and selected earlier work.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        description="Recent fellowship and professional work first; filter by category or browse everything."
      />
      <ProjectsPanel />
    </>
  );
}
