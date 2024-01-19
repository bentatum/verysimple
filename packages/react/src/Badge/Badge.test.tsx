import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import Badge from "./Badge";

describe("Badge", () => {
  it("should render", () => {
    const { container } = render(
      <Badge badgeContent="99">
        <button>Notifications</button>
      </Badge>
    );
    expect(container).toMatchSnapshot();
  });

  it("should not render when badge content is empty", () => {
    render(
      <Badge badgeContent={false}>
        <button>Notifications</button>
      </Badge>
    );
    expect(screen.queryByText("Notifications")).toBeInTheDocument();
  });

  describe("badge position", () => {
    it("should render top right by default", () => {
      render(
        <Badge badgeContent="99">
          <button>Notifications</button>
        </Badge>
      );
      expect(screen.getByText("99")).toHaveClass("top-0", "right-0");
    });
    test("top right", () => {
      render(
        <Badge badgeContent="99" badgePosition="top-right">
          <button>Notifications</button>
        </Badge>
      );
      expect(screen.getByText("99")).toHaveClass("top-0", "right-0");
    });
    test("top left", () => {
      render(
        <Badge badgeContent="99" badgePosition="top-left">
          <button>Notifications</button>
        </Badge>
      );
      expect(screen.getByText("99")).toHaveClass("top-0", "left-0");
    });
    test("bottom right", () => {
      render(
        <Badge badgeContent="99" badgePosition="bottom-right">
          <button>Notifications</button>
        </Badge>
      );
      expect(screen.getByText("99")).toHaveClass("bottom-0", "right-0");
    });
    test("bottom left", () => {
      render(
        <Badge badgeContent="99" badgePosition="bottom-left">
          <button>Notifications</button>
        </Badge>
      );
      expect(screen.getByText("99")).toHaveClass("bottom-0", "left-0");
    });
    test("top", () => {
      render(
        <Badge badgeContent="99" badgePosition="top">
          <button>Notifications</button>
        </Badge>
      );
      expect(screen.getByText("99")).toHaveClass(
        "top-0",
        "left-1/2",
        "-translate-x-1/2"
      );
    });
    test("right", () => {
      render(
        <Badge badgeContent="99" badgePosition="right">
          <button>Notifications</button>
        </Badge>
      );
      expect(screen.getByText("99")).toHaveClass(
        "right-0",
        "top-1/2",
        "-translate-y-1/2"
      );
    });
    test("bottom", () => {
      render(
        <Badge badgeContent="99" badgePosition="bottom">
          <button>Notifications</button>
        </Badge>
      );
      expect(screen.getByText("99")).toHaveClass(
        "bottom-0",
        "left-1/2",
        "-translate-x-1/2"
      );
    });
    test("left", () => {
      render(
        <Badge badgeContent="99" badgePosition="left">
          <button>Notifications</button>
        </Badge>
      );
      expect(screen.getByText("99")).toHaveClass(
        "left-0",
        "top-1/2",
        "-translate-y-1/2"
      );
    });
    it("can be overriden by className", () => {
      render(
        <Badge
          badgeContent="99"
          badgePosition="bottom-left"
          className="top-1 right-1"
        >
          <button>Notifications</button>
        </Badge>
      );
      const element = screen.getByText("99");
      expect(element).toHaveClass("top-1", "right-1");
      expect(element).not.toHaveClass("bottom-0", "left-0");
    });
  });

  it("forwards the ref", () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <Badge ref={ref} badgeContent="99">
        <button>Notifications</button>
      </Badge>
    );
    expect(ref.current).toBeInTheDocument();
  });

  it("has a display name", () => {
    expect(Badge.displayName).toBe("Badge");
  });
});
