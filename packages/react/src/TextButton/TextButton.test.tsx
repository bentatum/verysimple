import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import TextButton from "./TextButton";

jest.mock("@/Ripple", () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockImplementation(({ children }) => (
      <div data-testid="mock-ripple">{children}</div>
    )),
}));

describe("TextButton", () => {
  it("forwards the ref", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<TextButton ref={ref}>test</TextButton>);
    expect(ref.current).toBeInTheDocument();
  });
  it("has a display name", () => {
    expect(TextButton.displayName).toBe("TextButton");
  });
  it("renders a ripple", () => {
    render(<TextButton>test</TextButton>);
    expect(screen.getByTestId("mock-ripple")).toBeInTheDocument();
  });
  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<TextButton onClick={handleClick}>Click me</TextButton>);
    screen.getByText("Click me").click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
