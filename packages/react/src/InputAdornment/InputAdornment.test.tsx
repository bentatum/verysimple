import { render } from "@testing-library/react";
import InputAdornment from "../InputAdornment";

describe("InputAdornment", () => {
  it("should match the snapshot", () => {
    const { container } = render(<InputAdornment direction="left" />);
    expect(container).toMatchSnapshot();
  });

  it("renders children correctly", () => {
    const { getByText } = render(<InputAdornment direction="left">Test</InputAdornment>);
    expect(getByText("Test")).toBeInTheDocument();
  });
});
