import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import FilledButtonBase from "./FilledButtonBase";

describe("FilledButtonBase", () => {
  it("should have a background", () => {
    render(<FilledButtonBase>test</FilledButtonBase>);
    expect(screen.getByRole("button").getAttribute("class")).toMatch(/bg-/);
  });

  it("should have a gradient background if primary and not disabled", () => {
    const { container } = render(
      <FilledButtonBase color="primary">test</FilledButtonBase>
    );
    expect(screen.getByRole("button")).toHaveClass("st-bg-gradient-to-r");
    expect(container).toMatchSnapshot();
  });

  it("should have a red background if destructive", () => {
    const { container } = render(<FilledButtonBase color="destructive" />);
    expect(screen.getByRole("button")).toHaveClass(
      "bg-red-500",
      "disabled:bg-red-400"
    );
    expect(container).toMatchSnapshot();
  });

  it("forwards the ref", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<FilledButtonBase ref={ref}>test</FilledButtonBase>);
    expect(ref.current).toBeInTheDocument();
  });

  it("has a display name", () => {
    expect(FilledButtonBase.displayName).toBe("FilledButtonBase");
  });
});
