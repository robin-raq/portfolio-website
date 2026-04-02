export type ProjectTier = "fellowship" | "professional" | "portfolio";

export type WorkProject = {
  id: string;
  title: string;
  summary: string;
  stack: string[];
  tier: ProjectTier;
  /** Short label for section grouping */
  groupLabel?: string;
  /** Production / demo URL */
  liveUrl?: string;
  /** Label for the primary link (default: Live site) */
  liveLabel?: string;
  /** Source repository */
  repoUrl?: string;
  /** Optional thumbnail for the card */
  imageSrc?: string;
  imageAlt?: string;
};
