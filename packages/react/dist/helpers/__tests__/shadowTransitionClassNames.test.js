"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shadowTransitionClassNames_1 = require("../shadowTransitionClassNames");
describe("shadowTransitionClassNames", () => {
    it("should return the default", () => {
        expect((0, shadowTransitionClassNames_1.shadowTransitionClassNames)("not-an-override")).toContain("transition-shadow ease-in duration-100");
    });
    it("should be overridable", () => {
        expect((0, shadowTransitionClassNames_1.shadowTransitionClassNames)("transition-none")).toBe("");
    });
    it("doesn't fail if the className is undefined", () => {
        expect((0, shadowTransitionClassNames_1.shadowTransitionClassNames)()).toContain("transition-shadow ease-in duration-100");
    });
});
