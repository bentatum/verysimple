"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradientBorderStyles = void 0;
const gradientBorderStyles = ({ borderSize = 1, backgroundColor: bg = "var(--st-bg-primary)", direction: dir = "right", startColor = "var(--st-gradient-start)", stopColor = "var(--st-gradient-stop)", } = {}) => ({
    background: `linear-gradient(${bg}, ${bg}) 0 0 / 100% 100% no-repeat, linear-gradient(to ${dir}, ${startColor} 0%, ${stopColor} 100%)`,
    backgroundClip: "content-box, border-box",
    padding: borderSize,
});
exports.gradientBorderStyles = gradientBorderStyles;
