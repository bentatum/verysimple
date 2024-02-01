import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { createMock } from "ts-jest-mock";
import Input from "../Input";
import Textarea from "./Textarea";

jest.mock("../Input", () => jest.fn());
const InputMock = createMock(Input).mockImplementation((props) => (
  <input {...props} data-testid="input" />
));

describe("Textarea", () => {
  it("should call the input as a textarea", () => {
    render(<Textarea />);
    expect(InputMock).toBeCalledWith(
      expect.objectContaining({
        as: "textarea",
      }),
      expect.anything()
    );
  });
  it("should render the input with added padding", () => {
    render(<Textarea />);
    expect(screen.getByTestId("input")).toHaveClass("p-2");
  });

  // @fixme
  it.skip("forwards the ref", () => {
    const ref = createRef<HTMLInputElement>();
    render(<Textarea ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });
  it("has a display name", () => {
    expect(Textarea.displayName).toBe("Textarea");
  });
});
