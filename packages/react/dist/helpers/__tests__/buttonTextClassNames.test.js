"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buttonTextClassNames_1 = require("../buttonTextClassNames");
describe("buttonTextClassNames", () => {
    it("should return the default", () => {
        expect((0, buttonTextClassNames_1.buttonTextClassNames)("neutral", "text", "not-a-case")).toContain("uppercase");
    });
    it('should be override-able with "lowercase"', () => {
        expect((0, buttonTextClassNames_1.buttonTextClassNames)("neutral", "text", "lowercase").includes("uppercase")).toBe(false);
    });
    it('should be override-able with "capitalize"', () => {
        expect((0, buttonTextClassNames_1.buttonTextClassNames)("neutral", "text", "capitalize").includes("uppercase")).toBe(false);
    });
    it('should be override-able with "normal-case"', () => {
        expect((0, buttonTextClassNames_1.buttonTextClassNames)("neutral", "text", "normal-case").includes("uppercase")).toBe(false);
    });
    it("doesn't fail if the className is undefined", () => {
        expect((0, buttonTextClassNames_1.buttonTextClassNames)("neutral", "text")).toContain("uppercase");
    });
    it("should have tracking widest as a default", () => {
        expect((0, buttonTextClassNames_1.buttonTextClassNames)("neutral", "text").includes("tracking-widest")).toBe(true);
    });
    it("should be able to override tracking", () => {
        expect((0, buttonTextClassNames_1.buttonTextClassNames)("neutral", "text", "tracking-normal").includes("tracking-widest")).toBe(false);
    });
    it('should default to "whitespace-nowrap"', () => {
        expect((0, buttonTextClassNames_1.buttonTextClassNames)("neutral", "text").includes("whitespace-nowrap")).toBe(true);
    });
    it("should be able to override whitespace", () => {
        expect((0, buttonTextClassNames_1.buttonTextClassNames)("neutral", "text", "whitespace-normal").includes("whitespace-nowrap")).toBe(false);
    });
    it("should have bold font as a default", () => {
        expect((0, buttonTextClassNames_1.buttonTextClassNames)("neutral", "text").includes("font-bold")).toBe(true);
    });
    it("should be able to override font", () => {
        expect((0, buttonTextClassNames_1.buttonTextClassNames)("neutral", "text", "font-normal").includes("font-bold")).toBe(false);
    });
});
