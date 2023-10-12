import { render, screen } from "@testing-library/react";
import OutlinedButtonBase from "../OutlinedButtonBase";

describe("OutlinedButtonBase", () => {
  it("should have an outline", () => {
    const { container } = render(<OutlinedButtonBase>Test</OutlinedButtonBase>);
    expect(screen.getByRole("button").getAttribute("class")).toMatch(/border-/);
    expect(container).toMatchSnapshot();
  });

  it("can render as a custom component", () => {
    const CustomComponent = () => <div data-testid="custom-component" />;
    const { container } = render(
      <OutlinedButtonBase as={CustomComponent}>Test</OutlinedButtonBase>
    );
    expect(screen.getByTestId("custom-component")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("can render as a custom component when primary", () => {
    const CustomComponent = () => <div data-testid="custom-component" />;
    const { container } = render(
      <OutlinedButtonBase as={CustomComponent} color="primary">
        Test
      </OutlinedButtonBase>
    );
    expect(screen.getByTestId("custom-component")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("can render as a custom component when primary and disabled", () => {
    const CustomComponent = () => <div data-testid="custom-component" />;
    const { container } = render(
      <OutlinedButtonBase as={CustomComponent} color="primary" disabled>
        Test
      </OutlinedButtonBase>
    );
    expect(screen.getByTestId("custom-component")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
