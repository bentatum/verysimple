import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import TextButton from "./TextButton";

describe("TextButton", () => {
  it("forwards the ref", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<TextButton ref={ref}>test</TextButton>);
    expect(ref.current).toBeInTheDocument();
  });
  it("has a display name", () => {
    expect(TextButton.displayName).toBe("TextButton");
  });
});
