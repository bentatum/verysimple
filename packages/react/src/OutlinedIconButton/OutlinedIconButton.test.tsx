import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import OutlinedIconButton from "./OutlinedIconButton";

describe("OutlinedIconButton", () => {
  it("should have an outline", () => {
    const { container } = render(<OutlinedIconButton>Test</OutlinedIconButton>);
    expect(screen.getByRole("button")).toHaveClass("border", "my-border")
    expect(container).toMatchSnapshot();
  });
  it("overrides the hover text color on primary since svg icons do not turn into gradients", () => {
    render(<OutlinedIconButton color="primary">Test</OutlinedIconButton>);
    expect(screen.getByRole("button")).toHaveClass("hover:text-inherit");
  });
  it("forwards the ref", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<OutlinedIconButton ref={ref}>test</OutlinedIconButton>);
    expect(ref.current).toBeInTheDocument();
  });
  it("has a display name", () => {
    expect(OutlinedIconButton.displayName).toBe("OutlinedIconButton");
  });
});
