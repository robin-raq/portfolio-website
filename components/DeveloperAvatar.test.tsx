import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DeveloperAvatar } from "./DeveloperAvatar";

describe("DeveloperAvatar", () => {
  it("renders the profile image with an accessible name (illustration)", () => {
    render(
      <DeveloperAvatar
        src="https://example.com/photo.png"
        alt="Test user"
        variant="illustration"
      />,
    );
    expect(screen.getByRole("img", { name: "Test user" })).toBeInTheDocument();
  });

  it("does not show the terminal badge in illustration mode", () => {
    render(
      <DeveloperAvatar
        src="https://example.com/photo.png"
        alt="Test user"
        variant="illustration"
      />,
    );
    expect(screen.queryByText("full-stack")).toBeNull();
  });

  it("shows the terminal badge in photo mode", () => {
    render(
      <DeveloperAvatar
        src="https://example.com/photo.jpg"
        alt="Test user"
        variant="photo"
      />,
    );
    expect(screen.getByText("full-stack")).toBeInTheDocument();
  });
});
