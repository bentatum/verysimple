import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import FormLabel from "./FormLabel";

describe("FormLabel", () => {
  it("should match the snapshot", () => {
    const { container } = render(<FormLabel>test</FormLabel>);
    expect(container).toMatchSnapshot();
  });

  it("should be able to override the margin bottom", () => {
    render(<FormLabel className="mb-20">test</FormLabel>);
    expect(screen.getByText("test")).toHaveClass("mb-20");
    expect(screen.getByText("test")).not.toHaveClass("mb-3");
  });

  it("should be able to override the text size", () => {
    render(<FormLabel className="text-2xl">test</FormLabel>);
    expect(screen.getByText("test")).toHaveClass("text-2xl");
    expect(screen.getByText("test")).not.toHaveClass("text-xl");
  });

  it("forwards the ref", () => {
    const ref = createRef<HTMLLabelElement>();
    render(<FormLabel ref={ref}>test</FormLabel>);
    expect(ref.current).toBeInTheDocument();
  });

  it("has a display name", () => {
    expect(FormLabel.displayName).toBe("FormLabel");
  });
});
