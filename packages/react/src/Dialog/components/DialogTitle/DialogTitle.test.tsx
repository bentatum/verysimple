import { render, screen } from "@testing-library/react";
import Dialog from "../../Dialog";
import DialogTitle from "./DialogTitle";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import "@/test/mocks/window/IntersectionObserver";
import { createRef } from "react";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
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
