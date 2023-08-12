import register from './register/slice';

const rootReducer: any = {
    register
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
