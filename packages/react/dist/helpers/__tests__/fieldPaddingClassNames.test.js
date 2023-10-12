"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fieldPaddingClassNames_1 = require("../fieldPaddingClassNames");
describe("fieldPaddingClassNames", () => {
    it("should return the correct class names", () => {
        expect((0, fieldPaddingClassNames_1.fieldPaddingClassNames)("xs")).toEqual("px-3");
        expect((0, fieldPaddingClassNames_1.fieldPaddingClassNames)("sm")).toEqual("px-4");
        expect((0, fieldPaddingClassNames_1.fieldPaddingClassNames)("md")).toEqual("px-5");
        expect((0, fieldPaddingClassNames_1.fieldPaddingClassNames)("lg")).toEqual("px-6");
    });
    it("can be overriden", () => {
        expect((0, fieldPaddingClassNames_1.fieldPaddingClassNames)("xs", "px-4")).toBe("");
    });
});
