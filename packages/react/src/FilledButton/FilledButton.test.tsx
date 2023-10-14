import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import FilledButton from "./FilledButton";

describe("FilledButton", () => {
  it("should have a background", () => {
    render(<FilledButton>test</FilledButton>);
    expect(screen.getByRole("button").getAttribute("class")).toMatch(/bg-/);
  });

  it("should have a gradient background if primary and not disabled", () => {
    const { container } = render(
      <FilledButton color="primary">test</FilledButton>
    );
    expect(screen.getByRole("button")).toHaveClass("my-bg-gradient-to-r");
    expect(container).toMatchSnapshot();
  });

  it("should have a red background if destructive", () => {
    const { container } = render(<FilledButton color="destructive" />);
    expect(screen.getByRole("button")).toHaveClass(
      "bg-red-500",
      "disabled:bg-red-400"
    );
    expect(container).toMatchSnapshot();
  });

  it("forwards the ref", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<FilledButton ref={ref}>test</FilledButton>);
    expect(ref.current).toBeInTheDocument();
  });

  it("has a display name", () => {
    expect(FilledButton.displayName).toBe("FilledButton");
  });
});
