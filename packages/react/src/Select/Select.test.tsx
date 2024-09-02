import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
import Select from "./Select";

jest.mock("@heroicons/react/24/solid", () => ({
  ChevronDownIcon: ({ className }: { className: string }) => (
    <svg data-testid="ChevronDownIcon" className={className} />
  ),
}));

describe("Select", () => {
  it("forwards the ref", () => {
    const ref = createRef<HTMLSelectElement>();
    render(<Select ref={ref as any}>test</Select>);
    expect(ref.current).toBeInTheDocument();
  });

  it("renders with the correct adornment", () => {
    render(<Select />);
    expect(screen.getByTestId("ChevronDownIcon")).toBeInTheDocument();
  });

  it("handles change events", async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(
      <Select onChange={handleChange}>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    );
    await user.selectOptions(screen.getByRole("combobox"), "2");
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("renders children options correctly", () => {
    render(
      <Select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    );
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  it("applies the correct icon size based on inputSize", () => {
    const { rerender } = render(<Select inputSize="xs" />);
    expect(screen.getByTestId("ChevronDownIcon")).toHaveClass("w-3 h-3");

    rerender(<Select inputSize="sm" />);
    expect(screen.getByTestId("ChevronDownIcon")).toHaveClass("w-4 h-4");

    rerender(<Select inputSize="md" />);
    expect(screen.getByTestId("ChevronDownIcon")).toHaveClass("w-5 h-5");

    rerender(<Select inputSize="lg" />);
    expect(screen.getByTestId("ChevronDownIcon")).toHaveClass("w-6 h-6");
  });
});
