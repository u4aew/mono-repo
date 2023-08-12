"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const axios_1 = __importDefault(require("axios"));
const types_1 = require("../../../types");
const config_1 = __importDefault(require("../../../config"));
const initialState = {
    fetchingState: types_1.Fetch.Idle,
    password: null,
    email: null
};
/**
 * * Начало регистрации
 * @param email - email
 */
exports.start = (0, toolkit_1.createAsyncThunk)('register/start', (email, { rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield axios_1.default.post(config_1.default.apiMethods.registerStart, {
            login: email,
        });
        return data;
    }
    catch (error) {
        console.warn(error);
    }
}));
const slice = (0, toolkit_1.createSlice)({
    name: 'register',
    initialState,
    reducers: {
        reset: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(exports.start.pending, (state, action) => {
            state.fetchingState = types_1.Fetch.Pending;
        });
        builder.addCase(exports.start.fulfilled, (state, action) => {
            state.fetchingState = types_1.Fetch.Fulfilled;
        });
        builder.addCase(exports.start.rejected, (state, action) => {
            state.fetchingState = types_1.Fetch.Idle;
        });
    }
});
exports.default = slice.reducer;
