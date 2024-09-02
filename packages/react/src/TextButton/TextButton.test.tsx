import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
  it("handles click events", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<TextButton onClick={handleClick}>Click me</TextButton>);
    await user.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
