import { screen, render } from "@testing-library/react";
import Switch from "./Switch";

describe("Switch", () => {
  test("snapshot", () => {
    const { asFragment } = render(<Switch />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders switch component", () => {
    render(<Switch />);
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });
});
