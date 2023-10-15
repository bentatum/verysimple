import { buttonTextClassNames } from "../buttonTextClassNames";

describe("buttonTextClassNames", () => {
  it("doesn't fail if the className is undefined", () => {
    expect(buttonTextClassNames("neutral", "text")).toContain("font-bold");
  });

  it("should be able to override tracking", () => {
    expect(
      buttonTextClassNames("neutral", "text", "tracking-normal").includes(
        "tracking-widest"
      )
    ).toBe(false);
  });

  it('should default to "whitespace-nowrap"', () => {
    expect(
      buttonTextClassNames("neutral", "text").includes("whitespace-nowrap")
    ).toBe(true);
  });

  it("should be able to override whitespace", () => {
    expect(
      buttonTextClassNames("neutral", "text", "whitespace-normal").includes(
        "whitespace-nowrap"
      )
    ).toBe(false);
  });

  it("should have bold font as a default", () => {
    expect(buttonTextClassNames("neutral", "text").includes("font-bold")).toBe(
      true
    );
  });

  it("should be able to override font", () => {
    expect(
      buttonTextClassNames("neutral", "text", "font-normal").includes(
        "font-bold"
      )
    ).toBe(false);
  });
});
