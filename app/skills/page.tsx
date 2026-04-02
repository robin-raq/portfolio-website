import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SkillsPanel } from "@/components/SkillsPanel";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Languages, frontend, backend, data & AI, DevOps, testing, and practices.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        title="Skills"
        description="Stack and practices I use to ship production systems — aligned with my resume."
      />
      <SkillsPanel />
    </>
  );
}
