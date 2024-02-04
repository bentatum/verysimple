import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import OutlinedButton from "./OutlinedButton";

describe("OutlinedButton", () => {
  it("should have an outline", () => {
    const { container } = render(<OutlinedButton>Test</OutlinedButton>);
    expect(screen.getByRole("button")).toHaveClass("border", "my-border")
    expect(container).toMatchSnapshot();
  });

  it("can render as a custom component", () => {
    const CustomComponent = () => <div data-testid="custom-component" />;
    const { container } = render(
      <OutlinedButton as={CustomComponent}>Test</OutlinedButton>
    );
    expect(screen.getByTestId("custom-component")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("can render as a custom component when primary", () => {
    const CustomComponent = () => <div data-testid="custom-component" />;
    const { container } = render(
      <OutlinedButton as={CustomComponent} color="primary">
        Test
      </OutlinedButton>
    );
    expect(screen.getByTestId("custom-component")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("can render as a custom component when primary and disabled", () => {
    const CustomComponent = () => <div data-testid="custom-component" />;
    const { container } = render(
      <OutlinedButton as={CustomComponent} color="primary" disabled>
        Test
      </OutlinedButton>
    );
    expect(screen.getByTestId("custom-component")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("forwards the ref", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<OutlinedButton ref={ref}>test</OutlinedButton>);
    expect(ref.current).toBeInTheDocument();
  });
  it("has a display name", () => {
    expect(OutlinedButton.displayName).toBe("OutlinedButton");
  });
});
