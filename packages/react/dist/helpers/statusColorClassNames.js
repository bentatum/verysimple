"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusColorClassNames = void 0;
const classnames_1 = __importDefault(require("classnames"));
const statusColorClassNames = (status) => (0, classnames_1.default)({
    "bg-blue-500 text-white": status === "standby",
    "bg-green-500 text-white": status === "normal",
    "bg-zinc-400 text-white": status === "off",
    "bg-red-500 text-white": status === "critical",
});
exports.statusColorClassNames = statusColorClassNames;
