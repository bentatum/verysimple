"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iconButtonWidthClassNames_1 = require("../iconButtonWidthClassNames");
describe("iconButtonWidthClassNames", () => {
    it("should return the correct classname based on size", () => {
        expect((0, iconButtonWidthClassNames_1.iconButtonWidthClassNames)("xs")).toContain("min-w-[32px]");
        expect((0, iconButtonWidthClassNames_1.iconButtonWidthClassNames)("sm")).toContain("min-w-[38px]");
        expect((0, iconButtonWidthClassNames_1.iconButtonWidthClassNames)("md")).toContain("min-w-[48px]");
        expect((0, iconButtonWidthClassNames_1.iconButtonWidthClassNames)("lg")).toContain("min-w-[60px]");
    });
});
