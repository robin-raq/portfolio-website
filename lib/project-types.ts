export type ProjectTier = "fellowship" | "professional" | "portfolio";

export type WorkProject = {
  id: string;
  title: string;
  summary: string;
  stack: string[];
  href?: string;
  tier: ProjectTier;
  /** Short label for section grouping */
  groupLabel?: string;
};
