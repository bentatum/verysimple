import { render } from "@testing-library/react";
import { createRef } from "react";
import FormHelpText from "./FormHelpText";

describe("FormHelpText", () => {
  it("should be able to override italic classname", () => {
    const { container } = render(
      <FormHelpText className="not-italic">test</FormHelpText>
    );
    expect(container.firstChild).not.toHaveClass("italic");
  });

  it("forwards the ref", () => {
    const ref = createRef<HTMLParagraphElement>();
    render(<FormHelpText ref={ref}>test</FormHelpText>);
    expect(ref.current).toBeInTheDocument();
  });

  it("has a display name", () => {
    expect(FormHelpText.displayName).toBe("FormHelpText");
  });
});
