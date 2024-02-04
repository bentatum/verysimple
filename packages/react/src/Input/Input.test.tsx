import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import Input from "./Input";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

describe("Input", () => {
  it("should render", () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });
  describe("full width", () => {
    it("sets the container to w-full", () => {
      const { container } = render(<Input className="w-full" />);
      expect(container.firstChild).toHaveClass("w-full");
    });
    it("adds the w-full class to the textbox", () => {
      render(<Input className="w-full" />);
      expect(screen.getByRole("textbox")).toHaveClass("w-full");
    });
  });

  it("should not have shadow classnames when disabled", () => {
    const { container } = render(<Input disabled />);
    expect(container.firstChild).not.toHaveClass(
      "shadow-sm",
      "hover:shadow-md"
    );
    expect(container).toMatchSnapshot();
  });

  it("should call focus and blur handlers", async () => {
    const user = userEvent.setup();
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    render(<Input onFocus={onFocus} onBlur={onBlur} />);
    await user.click(screen.getByRole("textbox"));
    expect(onFocus).toHaveBeenCalledTimes(1);
    await user.click(document.body);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it("should not have a gradient border if disable focus style is true", async () => {
    const user = userEvent.setup();
    const { container } = render(<Input disableFocusStyle />);
    await user.click(screen.getByRole("textbox"));
    expect(container.firstChild).not.toHaveStyle({
      backgroundClip: "content-box, border-box",
      background:
        "linear-gradient(var(--my-bg-primary), var(--my-bg-primary)) 0 0 / 100% 100% no-repeat, linear-gradient(to right, var(--my-gradient-start) 0%, var(--my-gradient-stop) 100%)",
      padding: "1px",
    });
    expect(container).toMatchSnapshot();
    await user.click(document.body);
    expect(container).toMatchSnapshot();
  });

  it("forwards the ref", () => {
    const ref = createRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it("has a display name", () => {
    expect(Input.displayName).toBe("Input");
  });

  test("container props classname as a string", () => {
    const { container } = render(
      <Input containerProps={{ className: "test" }} />
    );
    expect(container.firstChild).toHaveClass("test");
  });
});
