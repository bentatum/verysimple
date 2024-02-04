import { render } from "@testing-library/react";
import { createRef } from "react";
import SvgIcon from "./SvgIcon";

describe("SvgIcon", () => {
  describe("accessibility", () => {
    test("aria-hidden", () => {
      const { container } = render(<SvgIcon />);
      expect(container.querySelector("svg")).toHaveAttribute(
        "aria-hidden",
        "true"
      );
    });
    test("aria-hidden override", () => {
      const { container } = render(<SvgIcon aria-hidden={false} />);
      expect(container.querySelector("svg")).toHaveAttribute(
        "aria-hidden",
        "false"
      );
    });
  });

  let element: SVGSVGElement | null;
  beforeEach(() => {
    const { container } = render(<SvgIcon />);
    element = container.querySelector("svg");
  });

  test("viewBox", () => {
    expect(element).toHaveAttribute("viewBox", "0 0 24 24");
  });

  describe("default clsx", () => {
    test("shrink-0", () => {
      expect(element).toHaveClass("shrink-0");
    });
    test("fill-current", () => {
      expect(element).toHaveClass("fill-current");
    });
    test("h-4", () => {
      expect(element).toHaveClass("h-4");
    });
    test("w-4", () => {
      expect(element).toHaveClass("w-4");
    });
  });

  it("forwards the ref", () => {
    const ref = createRef<SVGSVGElement>();
    render(<SvgIcon ref={ref}>test</SvgIcon>);
    expect(ref.current).toBeInTheDocument();
  });
  it("has a display name", () => {
    expect(SvgIcon.displayName).toBe("SvgIcon");
  });
});
