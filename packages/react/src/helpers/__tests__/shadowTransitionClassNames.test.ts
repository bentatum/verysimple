import { shadowTransitionClassNames } from "../shadowTransitionClassNames";

describe("shadowTransitionClassNames", () => {
  it("should return the default", () => {
    expect(shadowTransitionClassNames("not-an-override")).toContain(
      "transition-shadow ease-in duration-100"
    );
  });
  it("should be overridable", () => {
    expect(shadowTransitionClassNames("transition-none")).toBe("");
  });
  it("doesn't fail if the className is undefined", () => {
    expect(shadowTransitionClassNames()).toContain(
      "transition-shadow ease-in duration-100"
    );
  });
});
