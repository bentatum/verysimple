import { render, screen } from "@testing-library/react";
import Dialog from "../../Dialog";
import DialogTitle from "./DialogTitle";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import "@/test/mocks/window/IntersectionObserver";
import { createRef } from "react";

beforeEach(() => {
  // mute focus trap warning
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

describe("DialogTitle", () => {
  test("snapshot", () => {
    const { container } = render(
      <Dialog open onClose={() => {}}>
        <DialogTitle>Test</DialogTitle>
      </Dialog>
    );
    expect(container).toMatchSnapshot();
  });

  test("is heading", () => {
    render(
      <Dialog open onClose={() => {}}>
        <DialogTitle>Test</DialogTitle>
      </Dialog>
    );
    expect(screen.getByRole("heading", { name: "Test" })).toBeInTheDocument();
  });

  describe("with icon", () => {
    beforeEach(() => {
      render(
        <Dialog open onClose={() => {}}>
          <DialogTitle
            icon={
              <InformationCircleIcon className="h-5 w-5" data-testid="icon" />
            }
          >
            Test
          </DialogTitle>
        </Dialog>
      );
    });
    test("flex", () => {
      expect(screen.getByRole("heading")).toHaveClass("flex", "items-center");
    });
    test("spacing", () => {
      expect(screen.getByTestId("icon").parentElement).toHaveClass("mr-3");
    });
  });

  describe("appearance", () => {
    let element: HTMLElement;
    beforeEach(() => {
      render(
        <Dialog open onClose={() => {}}>
          <DialogTitle>Test</DialogTitle>
        </Dialog>
      );
      element = screen.getByRole("heading");
    });
    test("margin bottom", () => {
      expect(element).toHaveClass("mb-8");
    });
    it("uses display font", () => {
      expect(element).toHaveClass("font-bold");
    });
    it("is bold", () => {
      expect(element).toHaveClass("font-bold");
    });
    test("font size", () => {
      expect(element).toHaveClass("text-2xl");
    });
    test("no wrap", () => {
      expect(element).toHaveClass("whitespace-nowrap");
    });
  });
  it("forwards the ref", () => {
    const ref = createRef<HTMLHeadingElement>();
    render(
      <Dialog open onClose={() => {}}>
        <DialogTitle ref={ref}>Test</DialogTitle>
      </Dialog>
    );
    expect(ref.current).toBeInTheDocument();
  });
  it("has a display name", () => {
    expect(DialogTitle.displayName).toBe("DialogTitle");
  });
});
