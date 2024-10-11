import { render, screen } from "@testing-library/react";
import Dialog from "./Dialog";
import "@/test/mocks/window/IntersectionObserver";
import { createRef } from "react";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

describe("Dialog", () => {
  test("default render", () => {
    const { baseElement } = render(
      <Dialog open onClose={() => {}}>
        test
      </Dialog>
    );
    expect(baseElement).toMatchSnapshot();
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Close" })
    ).not.toBeInTheDocument();
  });

  it("forwards the ref", () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <Dialog ref={ref} open onClose={() => {}}>
        test
      </Dialog>
    );
    expect(ref.current).toBeInTheDocument();
  });

  it("has a display name", () => {
    expect(Dialog.displayName).toBe("Dialog");
  });
});