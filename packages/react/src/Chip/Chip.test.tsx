import { render } from "@testing-library/react";
import { createRef } from "react";
import Chip from "./Chip";

describe("Chip", () => {
  test("snapshot", () => {
    const { container } = render(<Chip>test</Chip>);
    expect(container.firstChild).toMatchSnapshot();
  });
  test("override padding", () => {
    const { container } = render(<Chip className="p-10">test</Chip>);
    expect(container.firstChild).toHaveClass("p-10");
    expect(container.firstChild).not.toHaveClass("px-7", "py-2");
  });
  test("default background", () => {
    const { container } = render(<Chip>test</Chip>);
    expect(container.firstChild).toHaveClass("my-bg-secondary");
  });
  test("override background", () => {
    const { container } = render(<Chip className="bg-red-500">test</Chip>);
    expect(container.firstChild).toHaveClass("bg-red-500");
    expect(container.firstChild).not.toHaveClass("my-bg-secondary");
  });
  test("default text size", () => {
    const { container } = render(<Chip>test</Chip>);
    expect(container.firstChild).toHaveClass("text-base");
  });
  test("override text size", () => {
    const { container } = render(<Chip className="text-base">test</Chip>);
    expect(container.firstChild).toHaveClass("text-base");
    expect(container.firstChild).not.toHaveClass("text-sm");
  });
  test("default border radius", () => {
    const { container } = render(<Chip>test</Chip>);
    expect(container.firstChild).toHaveClass("rounded-full");
  });
  test("override border radius", () => {
    const { container } = render(<Chip className="rounded-none">test</Chip>);
    expect(container.firstChild).toHaveClass("rounded-none");
    expect(container.firstChild).not.toHaveClass("rounded-full");
  });
  it("forwards the ref", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Chip ref={ref}>test</Chip>);
    expect(ref.current).toBeInTheDocument();
  });
  it("has a display name", () => {
    expect(Chip.displayName).toBe("Chip");
  });
});
