"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const slice_1 = __importDefault(require("./register/slice"));
const rootReducer = {
    register: slice_1.default
};
exports.default = rootReducer;
