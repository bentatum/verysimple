import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import DialogCloseButton from "./DialogCloseButton";

describe("DialogCloseButton", () => {
  test("snapshot", () => {
    const { container } = render(<DialogCloseButton />);
    expect(container).toMatchSnapshot();
  });

  test("render a button", () => {
    render(<DialogCloseButton />);
    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
  });

  test("icon", () => {
    const { container } = render(<DialogCloseButton />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("forwards the ref", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<DialogCloseButton ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("has a display name", () => {
    expect(DialogCloseButton.displayName).toBe("DialogCloseButton");
  });
});
