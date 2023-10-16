import { render } from "@testing-library/react";
import InputAdornment from "../InputAdornment";

describe("InputAdornment", () => {
  it("should match the snapshot", () => {
    const { container } = render(<InputAdornment direction="left" />);
    expect(container).toMatchSnapshot();
  });

  it("renders children correctly", () => {
    const { getByText } = render(
      <InputAdornment direction="left">Test</InputAdornment>
    );
    expect(getByText("Test")).toBeInTheDocument();
  });

  it("can override items-center", () => {
    const { container } = render(
      <InputAdornment direction="left" className="items-end">
        Test
      </InputAdornment>
    );
    expect(container.firstChild).toHaveClass("items-end");
    expect(container.firstChild).not.toHaveClass("items-center");
  });

  it("can override pointer-events-none", () => {
    const { container } = render(
      <InputAdornment direction="left" className="pointer-events-auto">
        Test
      </InputAdornment>
    );
    expect(container.firstChild).toHaveClass("pointer-events-auto");
    expect(container.firstChild).not.toHaveClass("pointer-events-none");
  });

  it("can override text color", () => {
    const { container } = render(
      <InputAdornment direction="left" className="text-zinc-400">
        Test
      </InputAdornment>
    );
    expect(container.firstChild).toHaveClass("text-zinc-400");
    expect(container.firstChild).not.toHaveClass("text-zinc-500");
  });

  


});
