"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gradientBorderStyles_1 = require("../gradientBorderStyles");
describe("gradientBorderStyles", () => {
    it("should return the correct styles", () => {
        const styles = (0, gradientBorderStyles_1.gradientBorderStyles)();
        expect(styles.background).toContain("linear-gradient(var(--st-bg-primary), var(--st-bg-primary)) 0 0 / 100% 100% no-repeat");
        expect(styles.background).toContain("linear-gradient(to right, var(--st-gradient-start) 0%, var(--st-gradient-stop) 100%)");
        expect(styles.backgroundClip).toBe("content-box, border-box");
        expect(styles.padding).toBe(1);
    });
});
