import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import Card from "./Card";

describe("Card", () => {
  it("should render correctly", () => {
    const { container } = render(<Card>Card</Card>);
    expect(container).toMatchSnapshot();
  });
  describe("default classnames", () => {
    test("rounded", () => {
      render(<Card as="button">Card</Card>);
      expect(screen.getByRole("button", { name: "Card" })).toHaveClass(
        "rounded bg-foreground shadow"
      );
    });
    test("background", () => {
      render(<Card as="button">Card</Card>);
      expect(screen.getByRole("button", { name: "Card" })).toHaveClass(
        "bg-foreground"
      );
    });
  });
  describe("default classname overrides", () => {
    test("shadow", () => {
      render(
        <Card as="button" className="shadow-inner">
          Card
        </Card>
      );
      expect(screen.getByRole("button", { name: "Card" })).toHaveClass(
        "shadow-inner"
      );
      expect(screen.getByRole("button", { name: "Card" })).not.toHaveClass(
        "shadow"
      );
    });
    test("rounded", () => {
      render(
        <Card as="button" className="rounded-sm">
          Card
        </Card>
      );
      expect(screen.getByRole("button", { name: "Card" })).toHaveClass(
        "rounded-sm"
      );
      expect(screen.getByRole("button", { name: "Card" })).not.toHaveClass(
        "rounded-lg"
      );
    });
    test("background", () => {
      render(
        <Card as="button" className="bg-red-500">
          Card
        </Card>
      );
      expect(screen.getByRole("button", { name: "Card" })).toHaveClass(
        "bg-red-500"
      );
      expect(screen.getByRole("button", { name: "Card" })).not.toHaveClass(
        "bg-white",
        "dark:bg-black"
      );
    });
  });
  it("forwards the ref", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Card ref={ref}>Card</Card>);
    expect(ref.current).toBeInTheDocument();
  });
  it("has a display name", () => {
    expect(Card.displayName).toBe("Card");
  });
});
