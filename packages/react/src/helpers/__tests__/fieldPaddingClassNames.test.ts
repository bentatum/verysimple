import { fieldPaddingClassNames } from "../fieldPaddingClassNames";

describe("fieldPaddingClassNames", () => {
  it("should return the correct class names", () => {
    expect(fieldPaddingClassNames("xs")).toEqual("px-2");
    expect(fieldPaddingClassNames("sm")).toEqual("px-3");
    expect(fieldPaddingClassNames("md")).toEqual("px-4");
    expect(fieldPaddingClassNames("lg")).toEqual("px-5");
  });
  it("can be overriden", () => {
    expect(fieldPaddingClassNames("xs", "px-4")).toBe("");
  });
});
