import { buttonTextClassNames } from "../buttonTextClassNames";

describe("buttonTextClassNames", () => {
  it("doesn't fail if the className is undefined", () => {
    expect(buttonTextClassNames()).toContain("font-medium");
  });

  it('should default to "whitespace-nowrap"', () => {
    expect(buttonTextClassNames("neutral").includes("whitespace-nowrap")).toBe(
      true
    );
  });

  it("should be able to override whitespace", () => {
    expect(
      buttonTextClassNames("whitespace-normal").includes("whitespace-nowrap")
    ).toBe(false);
  });

  it("should have bold font as a default", () => {
    expect(buttonTextClassNames("neutral").includes("font-medium")).toBe(true);
  });

  it("should be able to override font", () => {
    expect(buttonTextClassNames("font-normal").includes("font-medium")).toBe(
      false
    );
  });
});
