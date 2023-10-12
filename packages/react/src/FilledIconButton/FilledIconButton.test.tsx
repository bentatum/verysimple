import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import FilledIconButton from "./FilledIconButton";

describe("FilledIconButton", () => {
  it("should be fully rounded", () => {
    const { container } = render(<FilledIconButton>Test</FilledIconButton>);
    expect(screen.getByRole("button")).toHaveClass("rounded-full");
    expect(container).toMatchSnapshot();
  });

  it("forwards the ref", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<FilledIconButton ref={ref}>test</FilledIconButton>);
    expect(ref.current).toBeInTheDocument();
  });

  it("has a display name", () => {
    expect(FilledIconButton.displayName).toBe("FilledIconButton");
  });
});
