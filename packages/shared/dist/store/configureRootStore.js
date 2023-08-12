"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureRootStore = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const features_1 = __importDefault(require("../store/features"));
function configureRootStore(preloadedState = {}, externalReducer = {}) {
    const reducer = (0, toolkit_1.combineReducers)(Object.assign(Object.assign({}, features_1.default), externalReducer));
    return (0, toolkit_1.configureStore)({
        reducer,
        preloadedState
    });
}
exports.configureRootStore = configureRootStore;
console.log(configureRootStore, 'configureRootStore');
