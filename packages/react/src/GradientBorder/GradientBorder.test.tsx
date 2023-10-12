import { render } from "@testing-library/react";
import { createRef } from "react";
import GradientBorder from "./GradientBorder";

describe("GradientBorder", () => {
  it("should have a gradient border", () => {
    const { container } = render(<GradientBorder>GM</GradientBorder>);
    expect(container.firstChild).toHaveStyle({
      background:
        "linear-gradient(white, white) 0 0 / 100% 100% no-repeat, linear-gradient(to right, #ffd200, #fb923c, #ff00e5)",
      backgroundClip: "content-box, border-box",
    });
    expect(container).toMatchSnapshot();
  });
  describe("borderSize", () => {
    test("1", () => {
      const { container } = render(
        <GradientBorder borderSize={1}>GM</GradientBorder>
      );
      expect(container.firstChild).toHaveStyle("padding: 1px");
      expect(container).toMatchSnapshot();
    });
    test("2", () => {
      const { container } = render(
        <GradientBorder borderSize={2}>GM</GradientBorder>
      );
      expect(container.firstChild).toHaveStyle("padding: 2px");
      expect(container).toMatchSnapshot();
    });
    test("4", () => {
      const { container } = render(
        <GradientBorder borderSize={4}>GM</GradientBorder>
      );
      expect(container.firstChild).toHaveStyle("padding: 4px");
      expect(container).toMatchSnapshot();
    });
    test("8", () => {
      const { container } = render(
        <GradientBorder borderSize={8}>GM</GradientBorder>
      );
      expect(container.firstChild).toHaveStyle("padding: 8px");
      expect(container).toMatchSnapshot();
    });
  });
  it("should have a direction prop", () => {
    const { container } = render(
      <GradientBorder direction="bottom">GM</GradientBorder>
    );
    expect(container.firstChild).toHaveStyle({
      background:
        "linear-gradient(white, white) 0 0 / 100% 100% no-repeat, linear-gradient(to bottom, #ffd200, #fb923c, #ff00e5)",
      backgroundClip: "content-box, border-box",
    });
    expect(container).toMatchSnapshot();
  });

  it("forwards the ref", () => {
    const ref = createRef<HTMLDivElement>();
    render(<GradientBorder ref={ref}>test</GradientBorder>);
    expect(ref.current).toBeInTheDocument();
  });

  it("has a display name", () => {
    expect(GradientBorder.displayName).toBe("GradientBorder");
  });
});
