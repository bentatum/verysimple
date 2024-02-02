import { render, screen } from "@testing-library/react";
import Dialog from "./Dialog";
import "@/test/mocks/window/IntersectionObserver";
import userEvent from "@testing-library/user-event";
import { createRef, ReactNode } from "react";
import { Transition } from "@headlessui/react";

// Directly mock Transition component from @headlessui/react
jest.mock("@headlessui/react", () => {
  const actual = jest.requireActual("@headlessui/react");
  return {
    ...actual,
    Transition: {
      ...actual.Transition,
      render: jest.fn(({ children }) => <div>{children as ReactNode}</div>),
      Child: jest.fn(({ children }) => <div>{children as ReactNode}</div>),
    },
  };
});

// Use the mocked Transition.render for assertions
const TransitionMock = jest.fn((Transition as any).render);

beforeEach(() => {
  // mute focus trap warning
  jest.spyOn(console, "warn").mockImplementation(() => {});
  // Clear all instances and calls to constructor and all methods:
  TransitionMock.mockClear();
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

  test("closing", async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();
    const { baseElement, rerender } = render(
      <Dialog open onClose={onClose} showCloseButton>
        test
      </Dialog>
    );
    expect(baseElement).toMatchSnapshot();
    await user.click(screen.getByRole("button", { name: "Close" }));
    expect(onClose).toBeCalledTimes(1);
    Transition.render.mockImplementationOnce(({ children, afterLeave }: any) => {
      afterLeave!();
      return <div>{children as ReactNode}</div>;
    });
    rerender(
      <Dialog open={false} onClose={onClose} showCloseButton>
        test
      </Dialog>
    );
    expect(baseElement).toMatchSnapshot();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
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