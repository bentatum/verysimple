"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = require("react");
exports.Card = (0, react_1.forwardRef)(({ as = "div", children, className = "", ...props }, ref) => {
    const Component = as;
    return ((0, jsx_runtime_1.jsx)(Component, { ...props, ref: ref, className: (0, classnames_1.default)({
            "rounded-lg": !className.includes("rounded-"),
            "st-bg-primary": !className.includes("bg-"),
        }, className), children: children }));
});
exports.Card.displayName = "Card";
exports.default = exports.Card;
