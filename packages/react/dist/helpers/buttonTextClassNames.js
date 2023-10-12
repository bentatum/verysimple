"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonTextClassNames = void 0;
const classnames_1 = __importDefault(require("classnames"));
const buttonTextClassNames = (color, variant, className = "") => (0, classnames_1.default)({
    "text-red-500": color === "destructive" && !className.match(/text-/),
    "disabled:text-zinc-400 dark:disabled:text-zinc-500": color !== "destructive",
    "disabled:text-red-400": color === "destructive" &&
        variant !== "filled" &&
        !className.match(/disabled:text-/),
    "dark:disabled:text-zinc-800": color === "destructive" &&
        variant === "filled" &&
        !className.match(/disabled:text-/),
    uppercase: !className.match(/lowercase|capitalize|normal-case/),
    "tracking-widest": !className.match(/tracking-/),
    "whitespace-nowrap": !className.match(/whitespace-/),
    "font-bold": !className.match(/font-[thin|extralight|light|normal|medium|semibold|extrabold|black]/),
});
exports.buttonTextClassNames = buttonTextClassNames;
