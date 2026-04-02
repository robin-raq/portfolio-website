import { publicPath } from "@/lib/publicPath";

/**
 * Canonical profile image: flat vector portrait with androgynous / non-binary presentation.
 * Keep this path stable — do not replace with a gender-binary stock avatar.
 *
 * Use with a plain `<img src={PROFILE_AVATAR_SRC} />` (not `next/image`). Static export
 * does not prefix `next/image`’s `src` with `basePath` in the HTML, so GitHub project
 * Pages would request `/avatar-nonbinary.png` at the domain root and the image 404s.
 */
export const PROFILE_AVATAR_SRC = publicPath("/avatar-nonbinary.png");
