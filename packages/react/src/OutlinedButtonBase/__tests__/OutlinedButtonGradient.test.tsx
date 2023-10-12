import { render, screen } from "@testing-library/react";
import OutlinedButtonBase from "../OutlinedButtonBase";

jest.mock("@/GradientBorder", () => {
  return {
    __esModule: true,
    GradientBorder: jest
      .fn()
      .mockImplementation(({ borderColor, ...props }) => (
        <div data-testid="gradient-border" {...props} />
      )),
  };
});

describe("OutlinedButton", () => {
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
});
