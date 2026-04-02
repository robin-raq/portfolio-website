import { describe, expect, it } from "vitest";
import { publicPath } from "./publicPath";

describe("publicPath", () => {
  it("returns the path unchanged when no base is set", () => {
    expect(publicPath("/resume.pdf")).toBe("/resume.pdf");
    expect(publicPath("resume.pdf")).toBe("/resume.pdf");
  });
});
