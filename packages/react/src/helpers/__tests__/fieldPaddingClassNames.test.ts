import { fieldPaddingClassNames } from "../fieldPaddingClassNames";

describe("fieldPaddingClassNames", () => {
  it("should return the correct class names", () => {
    expect(fieldPaddingClassNames("xs")).toBe("px-2.5");
    expect(fieldPaddingClassNames("sm")).toBe("px-3");
    expect(fieldPaddingClassNames("md")).toBe("px-4");
    expect(fieldPaddingClassNames("lg")).toBe("px-5");
  });
  it("can be overriden", () => {
    expect(fieldPaddingClassNames("xs", "px-7")).toBe("px-7");
  });
});
