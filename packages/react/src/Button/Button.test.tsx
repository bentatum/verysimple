import Button from "./Button";
import { render, screen } from "@testing-library/react";
import { createRef } from "react";

jest.mock("../TextButton", () => ({
  TextButton: jest
    .fn()
    .mockImplementation((props: any) => (
      <button {...props} data-testid="text" />
    )),
}));

jest.mock("../FilledButton", () => ({
  FilledButton: jest
    .fn()
    .mockImplementation((props: any) => (
      <button {...props} data-testid="filled" />
    )),
}));

jest.mock("../OutlinedButton", () => ({
  OutlinedButton: jest
    .fn()
    .mockImplementation((props: any) => (
      <button {...props} data-testid="outlined" />
    )),
}));

describe("Button", () => {
  describe("variant prop", () => {
    it("should render a text button", () => {
      render(<Button variant="text">test</Button>);
      expect(screen.getByTestId("text")).toBeInTheDocument();
    });
    it("should render a filled button", () => {
      render(<Button variant="filled">test</Button>);
      expect(screen.getByTestId("filled")).toBeInTheDocument();
    });
    it("should render an outlined button", () => {
      render(<Button variant="outlined">test</Button>);
      expect(screen.getByTestId("outlined")).toBeInTheDocument();
    });
    it("should default to a text button", () => {
      render(<Button>test</Button>);
      expect(screen.getByTestId("text")).toBeInTheDocument();
    });
  });
  it("should render normal props like disabled", () => {
    render(<Button disabled>test</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  // @fixme
  it.skip("forwards the ref", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>test</Button>);
    expect(ref.current).toBeInTheDocument();
  });

  it("has a display name", () => {
    expect(Button.displayName).toBe("Button");
  });
});
