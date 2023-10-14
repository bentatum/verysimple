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
    it("sets the textbox to w-full", () => {
      render(<Input fullWidth />);
      expect(screen.getByRole("textbox")).toHaveClass("w-full");
    });
    it("can be used with a min-w class name", () => {
      render(<Input fullWidth className="min-w-[200px]" />);
      expect(screen.getByRole("textbox")).toHaveClass(
        "w-full",
        "min-w-[200px]"
      );
    });
  });

  describe("rounded", () => {
    it("has a rounded prop", () => {
      const { container } = render(<Input rounded />);
      expect(container.firstChild).toHaveClass("rounded-2xl");
      expect(container.firstChild).not.toHaveClass("rounded-full");
    });
    it("has a full rounded prop", () => {
      const { container } = render(<Input rounded="full" />);
      expect(container.firstChild).toHaveClass("rounded-full");
      expect(container.firstChild).not.toHaveClass("rounded-2xl");
    });
  });
  describe("defaults", () => {
    test("px", () => {
      render(<Input />);
      expect(screen.getByRole("textbox")).toHaveClass("px-5");
    });
    test("px override", () => {
      render(<Input className="px-0 pl-10" />);
      expect(screen.getByRole("textbox")).toHaveClass("px-0");
      expect(screen.getByRole("textbox")).not.toHaveClass("px-5");
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

  it("should have a gradient border on focus", async () => {
    const user = userEvent.setup();
    const { container } = render(<Input />);
    await user.click(screen.getByRole("textbox"));
    expect(container.firstChild).toHaveStyle({
      backgroundClip: "content-box, border-box",
      background:
        "linear-gradient(var(--st-bg-primary), var(--st-bg-primary)) 0 0 / 100% 100% no-repeat, linear-gradient(to right, var(--st-gradient-start) 0%, var(--st-gradient-stop) 100%)",
      padding: "1px",
    });
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
        "linear-gradient(var(--st-bg-primary), var(--st-bg-primary)) 0 0 / 100% 100% no-repeat, linear-gradient(to right, var(--st-gradient-start) 0%, var(--st-gradient-stop) 100%)",
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

  test("container props classname as a function", () => {
    const { container } = render(
      <Input containerProps={{ className: () => "test" }} />
    );
    expect(container.firstChild).toHaveClass("test");
  });

  test("container props classname as a string", () => {
    const { container } = render(
      <Input containerProps={{ className: "test" }} />
    );
    expect(container.firstChild).toHaveClass("test");
  });
});
