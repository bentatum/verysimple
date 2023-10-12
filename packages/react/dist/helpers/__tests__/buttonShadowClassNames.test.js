"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buttonShadowClassNames_1 = require("../buttonShadowClassNames");
describe("buttonShadowClassNames", () => {
    it("should return the default", () => {
        expect((0, buttonShadowClassNames_1.buttonShadowClassNames)("filled", "not-an-override")).toContain("shadow-sm");
    });
    it("should be overridable", () => {
        expect((0, buttonShadowClassNames_1.buttonShadowClassNames)("filled", "shadow-none")).toBe("");
    });
    it("doesn't fail if the className is undefined", () => {
        expect((0, buttonShadowClassNames_1.buttonShadowClassNames)("filled")).toContain("shadow-sm");
    });
});
