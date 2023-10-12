"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fieldSizeClassNames = void 0;
const classnames_1 = __importDefault(require("classnames"));
const fieldSizeClassNames = (size) => (0, classnames_1.default)({
    "text-xs min-h-[32px]": size === "xs",
    "text-sm min-h-[38px]": size === "sm",
    "text-base min-h-[48px]": size === "md",
    "text-xl min-h-[60px]": size === "lg",
});
exports.fieldSizeClassNames = fieldSizeClassNames;
