"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shadowTransitionClassNames = void 0;
const classnames_1 = __importDefault(require("classnames"));
const shadowTransitionClassNames = (className = "") => (0, classnames_1.default)({
    "transition-shadow ease-in duration-100": !className.match(/transition/),
});
exports.shadowTransitionClassNames = shadowTransitionClassNames;
