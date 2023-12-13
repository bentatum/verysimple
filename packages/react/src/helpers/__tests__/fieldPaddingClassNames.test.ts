import { fieldPaddingClassNames } from "../fieldPaddingClassNames";

describe("fieldPaddingClassNames", () => {
  it("should return the correct class names", () => {
    expect(fieldPaddingClassNames("xs")).toBe("px-4");
    expect(fieldPaddingClassNames("sm")).toBe("px-5");
    expect(fieldPaddingClassNames("md")).toBe("px-6");
    expect(fieldPaddingClassNames("lg")).toBe("px-8");
  });
  it("can be overriden", () => {
    expect(fieldPaddingClassNames("xs", "px-4")).toBe("");
  });
});
