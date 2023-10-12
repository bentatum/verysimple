"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fieldSizeClassNames_1 = require("../fieldSizeClassNames");
describe("fieldSizeClassNames", () => {
    it("should return text and min-h for xs", () => {
        expect((0, fieldSizeClassNames_1.fieldSizeClassNames)("xs")).toEqual("text-xs min-h-[32px]");
    });
    it("should return text and min-h for sm", () => {
        expect((0, fieldSizeClassNames_1.fieldSizeClassNames)("sm")).toEqual("text-sm min-h-[38px]");
    });
    it("should return text and min-h for md", () => {
        expect((0, fieldSizeClassNames_1.fieldSizeClassNames)("md")).toEqual("text-base min-h-[48px]");
    });
    it("should return text and min-h for lg", () => {
        expect((0, fieldSizeClassNames_1.fieldSizeClassNames)("lg")).toEqual("text-xl min-h-[60px]");
    });
});
