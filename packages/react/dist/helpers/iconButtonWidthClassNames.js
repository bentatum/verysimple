"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.iconButtonWidthClassNames = void 0;
const classnames_1 = __importDefault(require("classnames"));
const iconButtonWidthClassNames = (size) => (0, classnames_1.default)({
    "min-w-[32px]": size === "xs",
    "min-w-[38px]": size === "sm",
    "min-w-[48px]": size === "md",
    "min-w-[60px]": size === "lg",
});
exports.iconButtonWidthClassNames = iconButtonWidthClassNames;
