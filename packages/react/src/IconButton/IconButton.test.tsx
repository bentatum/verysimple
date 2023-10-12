import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import IconButton from "./IconButton";

jest.mock("@/OutlinedIconButton", () => ({
  OutlinedIconButton: jest
    .fn()
    .mockImplementation((props: any) => (
      <button {...props} data-testid="outlined" />
    )),
}));

jest.mock("@/FilledIconButton", () => ({
  FilledIconButton: jest
    .fn()
    .mockImplementation((props: any) => (
      <button {...props} data-testid="filled" />
    )),
}));

jest.mock("@/NormalIconButton", () => ({
  NormalIconButton: jest
    .fn()
    .mockImplementation((props: any) => (
      <button {...props} data-testid="normal" />
    )),
}));

describe("IconButton", () => {
  describe("variant prop", () => {
    it("should render a filled button", () => {
      render(<IconButton variant="filled">test</IconButton>);
      expect(screen.getByTestId("filled")).toBeInTheDocument();
    });
    it("should render an outlined button", () => {
      render(<IconButton variant="outlined">test</IconButton>);
      expect(screen.getByTestId("outlined")).toBeInTheDocument();
    });
    it("should default to the icon button base", () => {
      render(<IconButton>test</IconButton>);
      expect(screen.getByTestId("normal")).toBeInTheDocument();
    });
  });
  it("should render normal props like disabled", () => {
    render(<IconButton disabled>test</IconButton>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  // @fixme
  it.skip("forwards the ref", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<IconButton ref={ref}>test</IconButton>);
    expect(ref.current).toBeInTheDocument();
  });

  it("has a display name", () => {
    expect(IconButton.displayName).toBe("IconButton");
  });
});
