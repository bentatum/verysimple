"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fieldPaddingClassNames = void 0;
const classnames_1 = __importDefault(require("classnames"));
const fieldPaddingClassNames = (size, className = "") => {
    return !className.match(/px-/)
        ? (0, classnames_1.default)({
            "px-3": size === "xs",
            "px-4": size === "sm",
            "px-5": size === "md",
            "px-6": size === "lg",
        })
        : "";
};
exports.fieldPaddingClassNames = fieldPaddingClassNames;
