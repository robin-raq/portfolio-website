import { ContactSection } from "@/components/ContactSection";
import { DeveloperAvatar } from "@/components/DeveloperAvatar";
import { ProjectCard } from "@/components/ProjectCard";
import { getOrderedProjects } from "@/lib/projects";
import { skillGroups } from "@/lib/skills";

const PORTRAIT_SRC = "https://iamraq.github.io/public/img/me2.jpg";

export default function Home() {
  const projects = getOrderedProjects();
  const fellowship = projects.filter((p) => p.tier === "fellowship");
  const professional = projects.filter((p) => p.tier === "professional");
  const portfolio = projects.filter((p) => p.tier === "portfolio");

  const formAction = process.env.NEXT_PUBLIC_CONTACT_FORM_ACTION;

  return (
    <>
      <main id="main" className="flex flex-1 flex-col">
        <section
          className="relative overflow-hidden border-b border-zinc-200/80 bg-gradient-to-b from-teal-50/50 to-zinc-50 py-20 dark:border-zinc-800 dark:from-teal-950/30 dark:to-zinc-950"
          aria-labelledby="hero-heading"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <p className="font-mono text-sm text-teal-700 dark:text-teal-400">
              Senior fullstack engineer · Brooklyn, NY
            </p>
            <h1
              id="hero-heading"
              className="mt-2 font-serif text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50"
            >
              Building secure, scalable, user-centered software — from AI
              systems to enterprise tools.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              React, TypeScript, Node.js, and modern AI/RAG pipelines. Recently:
              GauntletAI fellowship (ShipShape, LegacyLens, AgentForge,
              CollabBoard). Previously: MassMutual public financial tools at
              scale.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-500"
              >
                View work
              </a>
              <a
                href="/resume"
                className="rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
              >
                Resume
              </a>
            </div>
          </div>
        </section>

        <section
          id="about"
          aria-labelledby="about-heading"
          className="scroll-mt-24 border-b border-zinc-200/80 py-16 dark:border-zinc-800"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2
              id="about-heading"
              className="font-serif text-2xl font-semibold text-zinc-900 dark:text-zinc-50"
            >
              About
            </h2>
            <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-start">
              <DeveloperAvatar
                src={PORTRAIT_SRC}
                alt="Raq Robinson, software engineer"
              />
              <div className="max-w-2xl flex-1 space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>
                  I&apos;m a senior fullstack engineer focused on clean
                  architecture, thoughtful UX, and shipping production-ready
                  products. My background in industrial engineering helps me
                  connect engineering, design, and delivery.
                </p>
                <p>
                  Outside of work I DJ and collaborate on community-focused tech
                  and arts projects. I&apos;m part of the{" "}
                  <a
                    href="https://outintech.com/digital-corps/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-teal-700 underline-offset-4 hover:underline dark:text-teal-400"
                  >
                    Out in Tech
                  </a>{" "}
                  digital corps, building web products for LGBTQ+ activist and
                  nonprofit organizations.
                </p>
                <p>
                  I&apos;m based in Brooklyn and exploring full-stack or
                  front-end roles on teams that value creativity, purpose-driven
                  work, and continuous learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="work"
          aria-labelledby="work-heading"
          className="scroll-mt-24 border-b border-zinc-200/80 py-16 dark:border-zinc-800"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2
              id="work-heading"
              className="font-serif text-2xl font-semibold text-zinc-900 dark:text-zinc-50"
            >
              Work
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
              Recent fellowship and professional work first, then selected
              earlier projects.
            </p>

            <div className="mt-10 space-y-12">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                  {fellowship[0]?.groupLabel ?? "GauntletAI"}
                </h3>
                <ul className="mt-6 grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                  {fellowship.map((p) => (
                    <li key={p.id}>
                      <ProjectCard project={p} />
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                  {professional[0]?.groupLabel ?? "Professional"}
                </h3>
                <ul className="mt-6 grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                  {professional.map((p) => (
                    <li key={p.id}>
                      <ProjectCard project={p} />
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                  {portfolio[0]?.groupLabel ?? "Earlier work"}
                </h3>
                <ul className="mt-6 grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                  {portfolio.map((p) => (
                    <li key={p.id}>
                      <ProjectCard project={p} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          aria-labelledby="skills-heading"
          className="scroll-mt-24 border-b border-zinc-200/80 py-16 dark:border-zinc-800"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2
              id="skills-heading"
              className="font-serif text-2xl font-semibold text-zinc-900 dark:text-zinc-50"
            >
              Skills
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    {group.label}
                  </h3>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection formAction={formAction} />
      </main>
    </>
  );
}
