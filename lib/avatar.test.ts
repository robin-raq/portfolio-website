import { describe, expect, it } from "vitest";
import { PROFILE_AVATAR_SRC } from "./avatar";

describe("PROFILE_AVATAR_SRC", () => {
  it("points at the non-binary flat vector portrait asset", () => {
    expect(PROFILE_AVATAR_SRC).toBe("/avatar-nonbinary.png");
  });
});
