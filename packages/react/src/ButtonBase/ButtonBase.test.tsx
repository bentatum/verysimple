import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import ButtonBase from "./ButtonBase";

describe("ButtonBase", () => {
  it("renders children", () => {
    const txt = "Hello World";
    render(
      <ButtonBase>
        <div>{txt}</div>
      </ButtonBase>
    );
    expect(screen.getByText(txt)).toBeInTheDocument();
  });

  it("can render itself an arbitrary component", () => {
    render(<ButtonBase as="div" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("no outline on focus", () => {
    render(<ButtonBase />);
    expect(screen.getByRole("button")).toHaveClass("focus:outline-none");
  });

  describe("display", () => {
    it("is inline flex center by default", () => {
      render(<ButtonBase />);
      expect(screen.getByRole("button")).toHaveClass(
        "inline-flex",
        "justify-center",
        "items-center"
      );
    });
    test("block", () => {
      render(<ButtonBase className="block" />);
      const btn = screen.getByRole("button");
      expect(btn).toHaveClass("block");
      expect(btn).not.toHaveClass(
        "inline-flex",
        "justify-center",
        "items-center"
      );
    });
    test("flex", () => {
      render(<ButtonBase className="flex" />);
      const btn = screen.getByRole("button");
      expect(btn).toHaveClass("flex");
      expect(btn).not.toHaveClass(
        "inline-flex",
        "justify-center",
        "items-center"
      );
    });
    test("items-*", () => {
      render(<ButtonBase className="flex items-end" />);
      const btn = screen.getByRole("button");
      expect(btn).toHaveClass("items-end");
      expect(btn).not.toHaveClass(
        "inline-flex",
        "justify-center",
        "items-center"
      );
    });
    test("justify-*", () => {
      render(<ButtonBase className="flex justify-end" />);
      const btn = screen.getByRole("button");
      expect(btn).toHaveClass("justify-end");
      expect(btn).not.toHaveClass(
        "inline-flex",
        "justify-center",
        "items-center"
      );
    });
  });

  describe("cursor", () => {
    test("cursor", () => {
      render(<ButtonBase />);
      expect(screen.getByRole("button")).toHaveClass(
        "cursor-pointer",
        "disabled:cursor-not-allowed"
      );
    });

    test("overriding cursor", () => {
      render(<ButtonBase className="cursor-wait" />);
      expect(screen.getByRole("button")).toHaveClass("cursor-wait");
    });
  });

  test("role override", () => {
    render(<ButtonBase role="link" />);
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("has a loading state", () => {
    const { container } = render(<ButtonBase loading>Hello</ButtonBase>);
    expect(screen.getByRole("button")).toHaveClass(
      "pointer-events-none",
      "cursor-wait"
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("forwards the ref", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<ButtonBase ref={ref}>test</ButtonBase>);
    expect(ref.current).toBeInTheDocument();
  });

  it("has a display name", () => {
    expect(ButtonBase.displayName).toBe("ButtonBase");
  });

  it("should be inline flex center by default", () => {
    render(<ButtonBase>test</ButtonBase>);
    expect(screen.getByRole("button")).toHaveClass(
      "inline-flex",
      "justify-center",
      "items-center"
    );
  });

  it("should be able to override the default inline flex center", () => {
    render(<ButtonBase className="flex justify-end">test</ButtonBase>);
    expect(screen.getByRole("button")).toHaveClass("flex", "justify-end");
  });
});
