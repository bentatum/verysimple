import { render, screen } from "@testing-library/react";
import Dialog from "./Dialog";
import "@/test/mocks/window/IntersectionObserver";
import userEvent from "@testing-library/user-event";
import { createRef, ReactNode } from "react";
import { Transition } from "@headlessui/react";
import { createMock } from "ts-jest-mock";

jest.mock("@headlessui/react", () => {
  const { Transition, ...rest } = jest.requireActual("@headlessui/react");
  return {
    ...rest,
    Transition: {
      ...Transition,
      render: jest.fn(({ children }) => {
        return <div>{children as ReactNode}</div>;
      }),
      Child: jest.fn(({ children }) => {
        return <div>{children as ReactNode}</div>;
      }),
    },
  };
});
const TransitionMock = createMock((Transition as any).render);

beforeEach(() => {
  // mute focus trap warning
  jest.spyOn(console, "warn").mockImplementation(() => {});
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
    TransitionMock.mockImplementationOnce(({ children, afterLeave }: any) => {
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
      <Dialog ref={ref} open={true} onClose={() => {}}>
        test
      </Dialog>
    );
    expect(ref.current).toBeInTheDocument();
  });

  it("has a display name", () => {
    expect(Dialog.displayName).toBe("Dialog");
  });
});
