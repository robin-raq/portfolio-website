import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** Extra chrome (gradient ring, grid) for photos only; illustrations are self-contained */
  variant?: "illustration" | "photo";
};

/**
 * Profile image: either the flat vector portrait (non-binary / androgynous presentation;
 * see `lib/avatar.ts` for canonical `src`) or a photo with subtle “dev screen” framing.
 */
export function DeveloperAvatar({
  src,
  alt,
  className = "",
  variant = "illustration",
}: Props) {
  if (variant === "illustration") {
    return (
      <figure
        className={`relative mx-auto w-full max-w-[280px] shrink-0 md:mx-0 ${className}`}
      >
        <div
          className="overflow-hidden rounded-2xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] ring-1 ring-zinc-900/20 dark:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)] dark:ring-zinc-100/10"
          style={{ aspectRatio: "1 / 1" }}
        >
          <Image
            src={src}
            alt={alt}
            width={512}
            height={512}
            className="h-full w-full object-cover"
            sizes="(max-width: 768px) 85vw, 280px"
            priority
          />
        </div>
      </figure>
    );
  }

  return (
    <figure
      className={`relative mx-auto w-full max-w-[260px] shrink-0 md:mx-0 ${className}`}
    >
      <div className="relative">
        <div
          className="absolute -inset-3 rounded-[1.35rem] bg-gradient-to-br from-teal-400/25 via-cyan-500/15 to-violet-500/20 blur-xl dark:from-teal-500/20 dark:via-cyan-500/10 dark:to-violet-500/15"
          aria-hidden
        />

        <div className="relative rounded-2xl bg-gradient-to-br from-teal-500/50 via-zinc-400/30 to-violet-500/40 p-[3px] shadow-[0_12px_40px_-16px_rgba(20,184,166,0.45)] dark:from-teal-400/35 dark:via-zinc-600/25 dark:to-violet-500/35 dark:shadow-[0_12px_48px_-20px_rgba(45,212,191,0.25)]">
          <div className="relative aspect-square overflow-hidden rounded-[13px] bg-zinc-950 ring-1 ring-white/10">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="260px"
              className="object-cover object-center"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:20px_20px] opacity-50 mix-blend-overlay dark:opacity-40"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent"
              aria-hidden
            />
          </div>
        </div>

        <div className="absolute -bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-teal-500/35 bg-zinc-950/90 px-3 py-1.5 font-mono text-[11px] tracking-wide text-teal-100 shadow-lg backdrop-blur-md dark:border-teal-400/30 dark:bg-zinc-950/95 dark:text-teal-50">
          <span className="select-none text-teal-400" aria-hidden>
            &gt;_
          </span>
          <span className="text-zinc-300 dark:text-zinc-200">full-stack</span>
        </div>
      </div>
    </figure>
  );
}
