import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import OutlinedButtonBase from "./OutlinedButtonBase";

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

describe("OutlinedButtonBase", () => {
  it("should have an outline", () => {
    const { container } = render(<OutlinedButtonBase>Test</OutlinedButtonBase>);
    expect(screen.getByRole("button").getAttribute("class")).toMatch(/border-/);
    expect(container).toMatchSnapshot();
  });
  it("should render a gradient border when primary", () => {
    render(<OutlinedButtonBase color="primary">Test</OutlinedButtonBase>);
    expect(screen.getByTestId("gradient-border")).toBeInTheDocument();
  });
  it("should render a disabled version of the gradient border", () => {
    render(
      <OutlinedButtonBase color="primary" disabled>
        Test
      </OutlinedButtonBase>
    );
    expect(screen.getByTestId("gradient-border")).toHaveAttribute("disabled");
  });
  it("should have normal disabled styled when destructive", () => {
    render(
      <OutlinedButtonBase color="destructive" disabled>
        Test
      </OutlinedButtonBase>
    );
    expect(screen.getByRole("button")).toHaveClass(
      "border-red-500",
      "disabled:border-red-400"
    );
  });
  it("can pass down gradient border props", () => {
    render(
      <OutlinedButtonBase
        color="primary"
        GradientBorderProps={{
          className: "test",
        }}
      >
        Test
      </OutlinedButtonBase>
    );
    expect(screen.getByTestId("gradient-border")).toHaveClass("test");
  });

  it("forwards the ref", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<OutlinedButtonBase ref={ref}>test</OutlinedButtonBase>);
    expect(ref.current).toBeInTheDocument();
  });
  it("has a display name", () => {
    expect(OutlinedButtonBase.displayName).toBe("OutlinedButtonBase");
  });
});
