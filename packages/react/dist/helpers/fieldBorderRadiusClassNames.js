"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fieldBorderRadiusClassNames = void 0;
const classnames_1 = __importDefault(require("classnames"));
const fieldBorderRadiusClassNames = (rounded, className) => !className.match(/rounded/)
    ? (0, classnames_1.default)({
        "rounded-2xl": rounded === true,
        "rounded-full": rounded === "full",
    })
    : undefined;
exports.fieldBorderRadiusClassNames = fieldBorderRadiusClassNames;
