import { render } from "@testing-library/react";
import { createRef } from "react";
import Spinner from "./Spinner";

describe("Spinner", () => {
  test("snapshot", () => {
    const { container } = render(<Spinner />);
    expect(container).toMatchSnapshot();
  });

  describe("dimensions", () => {
    let container: HTMLElement;
    beforeEach(() => {
      ({ container } = render(<Spinner />));
    });
    test("viewBox", () => {
      expect(container.querySelector("svg")).toHaveAttribute(
        "viewBox",
        "0 0 24 24"
      );
    });
    test("circle position", () => {
      expect(container.querySelector("circle")).toHaveAttribute("cx", "12");
      expect(container.querySelector("circle")).toHaveAttribute("cy", "12");
      expect(container.querySelector("circle")).toHaveAttribute("r", "10");
    });
  });

  it("should spin", () => {
    const { container } = render(<Spinner />);
    expect(container.querySelector("svg")).toHaveClass("animate-spin");
  });

  describe("size", () => {
    test("default size", () => {
      const { container } = render(<Spinner />);
      expect(container.querySelector("svg")).toHaveClass("h-5 w-5");
    });
    test("size override", () => {
      const { container } = render(<Spinner className="h-12 w-12" />);
      expect(container.querySelector("svg")).toHaveClass("h-12", "w-12");
      expect(container.querySelector("svg")).not.toHaveClass("h-6", "w-6");
    });
  });

  it("has an indeterminate progress indicator", () => {
    const { container } = render(<Spinner />);
    expect(container.querySelector("path")).toHaveClass(
      "opacity-75",
      "fill-current"
    );
  });

  it("forwards the ref", () => {
    const ref = createRef<SVGSVGElement>();
    render(<Spinner ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("has a display name", () => {
    expect(Spinner.displayName).toBe("Spinner");
  });
});
