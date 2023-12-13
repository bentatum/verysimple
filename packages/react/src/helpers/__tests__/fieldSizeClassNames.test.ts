import { fieldSizeClassNames } from "../fieldSizeClassNames";

describe("fieldSizeClassNames", () => {
  it("should return text and min-h for xs", () => {
    expect(fieldSizeClassNames("xs")).toEqual("text-xs min-h-[32px]");
  });
  it("should return text and min-h for sm", () => {
    expect(fieldSizeClassNames("sm")).toEqual("text-sm min-h-[38px]");
  });
  it("should return text and min-h for md", () => {
    expect(fieldSizeClassNames("md")).toEqual("text-base min-h-[44px]");
  });
  it("should return text and min-h for lg", () => {
    expect(fieldSizeClassNames("lg")).toEqual("text-xl min-h-[60px]");
  });
});
