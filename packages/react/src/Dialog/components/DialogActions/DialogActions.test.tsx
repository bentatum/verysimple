import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import DialogActions from "./DialogActions";

describe("DialogActions", () => {
  test("snapshot", () => {
    const { container } = render(
      <DialogActions>
        <button>Submit</button>
      </DialogActions>
    );
    expect(container).toMatchSnapshot();
  });

  it("should render children", () => {
    render(
      <DialogActions>
        <button>Submit</button>
      </DialogActions>
    );
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("should render className", () => {
    render(
      <DialogActions className="test">
        <button>Submit</button>
      </DialogActions>
    );
    expect(screen.getByRole("navigation")).toHaveClass("test");
  });

  it("is a row", () => {
    render(
      <DialogActions>
        <button>Submit</button>
      </DialogActions>
    );
    expect(screen.getByRole("navigation")).toHaveClass(
      "flex",
      "items-center",
      "justify-end"
    );
  });

  test("override justify-between", () => {
    render(
      <DialogActions className="justify-between">
        <button>Submit</button>
      </DialogActions>
    );
    const element = screen.getByRole("navigation");
    expect(element).toHaveClass("justify-between");
    expect(element).not.toHaveClass("justify-end");
  });

  test("default padding", () => {
    render(
      <DialogActions>
        <button>Submit</button>
      </DialogActions>
    );
    expect(screen.getByRole("navigation")).toHaveClass("px-5");
    expect(screen.getByRole("navigation")).toHaveClass("pb-4");
  });

  test("overriding padding x and b", () => {
    render(
      <DialogActions className="px-0 pb-0">
        <button>Submit</button>
      </DialogActions>
    );
    expect(screen.getByRole("navigation")).toHaveClass("px-0");
    expect(screen.getByRole("navigation")).toHaveClass("pb-0");
    expect(screen.getByRole("navigation")).not.toHaveClass("pb-4");
    expect(screen.getByRole("navigation")).not.toHaveClass("px-5");
  });

  test("override padding", () => {
    render(
      <DialogActions className="p-0">
        <button>Submit</button>
      </DialogActions>
    );
    expect(screen.getByRole("navigation")).toHaveClass("p-0");
    expect(screen.getByRole("navigation")).not.toHaveClass("px-0");
    expect(screen.getByRole("navigation")).not.toHaveClass("pb-4");
  });

  it("forwards the ref", () => {
    const ref = createRef<HTMLDivElement>();
    render(<DialogActions ref={ref}>test</DialogActions>);
    expect(ref.current).toBeInTheDocument();
  });
  it("has a display name", () => {
    expect(DialogActions.displayName).toBe("DialogActions");
  });
});
