"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonShadowClassNames = void 0;
const classnames_1 = __importDefault(require("classnames"));
const shadowTransitionClassNames_1 = require("./shadowTransitionClassNames");
const buttonShadowClassNames = (variant, className = "") => className.match(/shadow/)
    ? ""
    : (0, classnames_1.default)({
        "shadow-sm focus:shadow-md hover:shadow-md disabled:shadow-none": variant === "filled" ||
            variant === "outlined" ||
            variant === "normal",
    }, (0, shadowTransitionClassNames_1.shadowTransitionClassNames)(className));
exports.buttonShadowClassNames = buttonShadowClassNames;
