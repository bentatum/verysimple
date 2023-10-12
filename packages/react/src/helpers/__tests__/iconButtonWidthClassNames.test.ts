import { iconButtonWidthClassNames } from "../iconButtonWidthClassNames";

describe("iconButtonWidthClassNames", () => {
  it("should return the correct classname based on size", () => {
    expect(iconButtonWidthClassNames("xs")).toContain("min-w-[32px]");
    expect(iconButtonWidthClassNames("sm")).toContain("min-w-[38px]");
    expect(iconButtonWidthClassNames("md")).toContain("min-w-[48px]");
    expect(iconButtonWidthClassNames("lg")).toContain("min-w-[60px]");
  });
});
