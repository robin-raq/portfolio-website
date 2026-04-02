/**
 * Absolute path for files in `/public` when the site uses a `basePath`
 * (e.g. GitHub project pages at /repo-name/). Set via `BASE_PATH` at build time;
 * `next.config` exposes the same value as `NEXT_PUBLIC_BASE_PATH`.
 */
export function publicPath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const base = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";
  return base ? `${base}${normalized}` : normalized;
}
