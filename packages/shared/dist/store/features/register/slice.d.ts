import { RootState } from "../index";
import { AppDispatch, Fetch } from "../../../types";
type SliceState = {
    fetchingState: Fetch;
    email: any;
    password: any;
};
/**
 * * Начало регистрации
 * @param email - email
 */
export declare const start: import("@reduxjs/toolkit").AsyncThunk<any, string, {
    dispatch: AppDispatch;
    state: RootState;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
declare const _default: import("redux").Reducer<SliceState, import("redux").AnyAction>;
export default _default;
