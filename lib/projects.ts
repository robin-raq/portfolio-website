import type { ProjectTier, WorkProject } from "./project-types";

const tierOrder: ProjectTier[] = ["fellowship", "professional", "portfolio"];

export const workProjects: WorkProject[] = [
  {
    id: "shipshape",
    title: "ShipShape",
    tier: "fellowship",
    groupLabel: "GauntletAI | AI Engineering Fellow",
    summary:
      "Production audit and optimization of the U.S. Department of the Treasury’s open-source project management tool: TypeScript monorepo, API performance (k6), PostgreSQL query tuning, bundle efficiency, and accessibility.",
    stack: [
      "TypeScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
      "PostgreSQL",
      "WebSockets",
      "Yjs",
      "Docker",
      "Playwright",
    ],
  },
  {
    id: "legacylens",
    title: "LegacyLens",
    tier: "fellowship",
    groupLabel: "GauntletAI | AI Engineering Fellow",
    summary:
      "RAG pipeline over legacy COBOL/Fortran: syntax-aware chunking, embeddings, Pinecone vector search, retrieval with reranking, and a public query UI with file/line references.",
    stack: [
      "Python",
      "Pinecone",
      "OpenAI Embeddings",
      "FastAPI",
      "COBOL/Fortran parsing",
    ],
  },
  {
    id: "agentforge",
    title: "AgentForge",
    tier: "fellowship",
    groupLabel: "GauntletAI | AI Engineering Fellow",
    summary:
      "Production-oriented domain agent with tool registry, orchestration, verification, conversation memory, evaluation suite, and observability (tracing, latency, token usage).",
    stack: [
      "TypeScript",
      "Node.js",
      "OpenAI API",
      "Evaluation framework",
      "Observability",
    ],
  },
  {
    id: "collabboard",
    title: "CollabBoard",
    tier: "fellowship",
    groupLabel: "GauntletAI | AI Engineering Fellow",
    summary:
      "Real-time collaborative whiteboard with infinite pan/zoom, shapes, WebSockets multiplayer, and an AI board agent driven by natural language commands.",
    stack: [
      "TypeScript",
      "React",
      "Node.js",
      "WebSockets",
      "Canvas API",
    ],
  },
  {
    id: "massmutual-calculators",
    title: "Financial planning tools",
    tier: "professional",
    groupLabel: "MassMutual | Fullstack Developer",
    summary:
      "Led full overhaul of public-facing financial calculators: React + TypeScript, reusable components, REST APIs, WCAG 2.1 AA, CI/CD, and automated testing for customer-facing tools at scale.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Jest",
      "CI/CD",
      "Accessibility",
    ],
    href: "https://www.massmutual.com/financial-wellness/calculators",
  },
  {
    id: "dobble",
    title: "Dobble",
    tier: "portfolio",
    groupLabel: "Earlier work",
    summary:
      "Online Dobble-style card game: find the matching symbol between cards.",
    stack: ["JavaScript", "Ruby on Rails"],
    href: "https://robin-raq.github.io/Dobl-frontend-/",
  },
  {
    id: "hot-play",
    title: "Hot Play",
    tier: "portfolio",
    groupLabel: "Earlier work",
    summary:
      "YouTube-integrated Slack-style app for sharing and discussing music by genre.",
    stack: ["React", "Ruby on Rails"],
    href: "https://www.loom.com/share/4d50e0e68b004e8aafd0ee955836fb5d",
  },
  {
    id: "nurture",
    title: "Nurture Plant Shop",
    tier: "portfolio",
    groupLabel: "Earlier work",
    summary:
      "Single-page ecommerce experience for browsing and learning about houseplants.",
    stack: ["React", "Ruby on Rails"],
    href: "https://www.loom.com/share/a7f9d086ba9e4b0d916cc452b142e9cc",
  },
];

export function getOrderedProjects(): WorkProject[] {
  return [...workProjects].sort(
    (a, b) =>
      tierOrder.indexOf(a.tier) - tierOrder.indexOf(b.tier) ||
      workProjects.indexOf(a) - workProjects.indexOf(b),
  );
}
