import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import OutlinedButtonBase from "./OutlinedButtonBase";

describe("OutlinedButtonBase", () => {
  it("should have an outline", () => {
    const { container } = render(<OutlinedButtonBase>Test</OutlinedButtonBase>);
    expect(screen.getByRole("button")).toHaveClass("border");
    expect(container).toMatchSnapshot();
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

  it("forwards the ref", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<OutlinedButtonBase ref={ref}>test</OutlinedButtonBase>);
    expect(ref.current).toBeInTheDocument();
  });
  it("has a display name", () => {
    expect(OutlinedButtonBase.displayName).toBe("OutlinedButtonBase");
  });
});
