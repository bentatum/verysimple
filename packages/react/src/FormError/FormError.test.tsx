import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import FormError from "./FormError";

describe("FormError", () => {
  it("should be a red alert", () => {
    const { container } = render(<FormError>test</FormError>);
    expect(screen.getByRole("alert")).toHaveClass("text-red-500");
    expect(container).toMatchSnapshot();
  });

  it("forwards the ref", () => {
    const ref = createRef<HTMLParagraphElement>();
    render(<FormError ref={ref}>test</FormError>);
    expect(ref.current).toBeInTheDocument();
  });

  it("has a display name", () => {
    expect(FormError.displayName).toBe("FormError");
  });
});
