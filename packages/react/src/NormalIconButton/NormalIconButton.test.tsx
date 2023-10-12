import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import NormalIconButton from "./NormalIconButton";

describe("NormalIconButton", () => {
  it("should have icon button width classnames", () => {
    render(<NormalIconButton />);
    expect(screen.getByRole("button")).toHaveClass("min-w-[48px]");
  });
  it("should have button shadows", () => {
    render(<NormalIconButton />);
    expect(screen.getByRole("button")).toHaveClass("shadow-sm");
  });
  it("forwards the ref", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<NormalIconButton ref={ref}>test</NormalIconButton>);
    expect(ref.current).toBeInTheDocument();
  });
  it("has a display name", () => {
    expect(NormalIconButton.displayName).toBe("NormalIconButton");
  });
  it("has hover and focus styles for destructive when not disabled", () => {
    render(<NormalIconButton color="destructive" />);
    expect(screen.getByRole("button")).toHaveClass(
      "focus:bg-red-500/20",
      "hover:bg-red-500/20",
      "active:bg-red-500/20"
    );
  });
  it("does not have hover and focus style for descructive when disabled", () => {
    render(<NormalIconButton color="destructive" disabled />);
    expect(screen.getByRole("button")).not.toHaveClass(
      "focus:bg-red-500/20",
      "hover:bg-red-500/20",
      "active:bg-red-500/20"
    );
  });
});
