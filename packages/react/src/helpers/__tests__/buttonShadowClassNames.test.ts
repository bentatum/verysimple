import { buttonShadowClassNames } from "../buttonShadowClassNames";

describe("buttonShadowClassNames", () => {
  it("should return the default", () => {
    expect(buttonShadowClassNames("filled", "not-an-override")).toContain(
      "shadow-sm"
    );
  });
  it("should be overridable", () => {
    expect(buttonShadowClassNames("filled", "shadow-none")).toBe("");
  });
  it("doesn't fail if the className is undefined", () => {
    expect(buttonShadowClassNames("filled")).toContain("shadow-sm");
  });
});
