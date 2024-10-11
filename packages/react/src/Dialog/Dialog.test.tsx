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

  it("applies panelProps correctly", () => {
    const customClassName = "custom-class";
    render(
      // @ts-expect-error - it's a test
      <Dialog open panelProps={{ className: customClassName, 'data-testid': 'panel' }} onClose={() => {}}>
        test
      </Dialog>
    );
    const dialogPanel = screen.getByTestId("panel");
    expect(dialogPanel).toHaveClass(customClassName);
  });

  it('can override the default max-w-md class', () => {
    // @ts-expect-error - it's a test
    render(<Dialog open panelProps={{ className: 'max-w-2xl', 'data-testid': 'panel' }} onClose={() => {}}>test</Dialog>);
    const dialogPanel = screen.getByTestId("panel");
    expect(dialogPanel).toHaveClass('max-w-2xl');
    expect(dialogPanel).not.toHaveClass('max-w-md');
  });
}); 