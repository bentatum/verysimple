import { fieldPaddingClassNames } from "../fieldPaddingClassNames";

describe("fieldPaddingClassNames", () => {
  it("should return the correct class names", () => {
    expect(fieldPaddingClassNames("xs")).toEqual("px-3");
    expect(fieldPaddingClassNames("sm")).toEqual("px-4");
    expect(fieldPaddingClassNames("md")).toEqual("px-5");
    expect(fieldPaddingClassNames("lg")).toEqual("px-6");
  });
  it("can be overriden", () => {
    expect(fieldPaddingClassNames("xs", "px-4")).toBe("");
  });
});
