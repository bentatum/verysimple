import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import OutlinedIconButton from "./OutlinedIconButton";

jest.mock("../GradientBorder", () => {
  return {
    __esModule: true,
    GradientBorder: jest
      .fn()
      .mockImplementation(({ borderColor, ...props }) => (
        <div data-testid="gradient-border" {...props} />
      )),
  };
});

describe("OutlinedIconButton", () => {
  it("should have an outline", () => {
    const { container } = render(<OutlinedIconButton>Test</OutlinedIconButton>);
    expect(screen.getByRole("button").getAttribute("class")).toMatch(/border-/);
    expect(container).toMatchSnapshot();
  });
  it("should render a gradient border when primary", () => {
    render(<OutlinedIconButton color="primary">Test</OutlinedIconButton>);
    expect(screen.getByTestId("gradient-border")).toBeInTheDocument();
  });
  it("should render a disabled version of the gradient border", () => {
    render(
      <OutlinedIconButton color="primary" disabled>
        Test
      </OutlinedIconButton>
    );
    expect(screen.getByTestId("gradient-border")).toHaveAttribute("disabled");
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
