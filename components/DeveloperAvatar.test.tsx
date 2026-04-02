import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DeveloperAvatar } from "./DeveloperAvatar";

describe("DeveloperAvatar", () => {
  it("renders the profile image with an accessible name", () => {
    render(
      <DeveloperAvatar src="https://example.com/photo.jpg" alt="Test user" />,
    );
    expect(screen.getByRole("img", { name: "Test user" })).toHaveAttribute(
      "src",
      expect.stringContaining("example.com"),
    );
  });

  it("shows a developer-style badge", () => {
    render(
      <DeveloperAvatar src="https://example.com/photo.jpg" alt="Test user" />,
    );
    expect(screen.getByText("full-stack")).toBeInTheDocument();
  });
});
