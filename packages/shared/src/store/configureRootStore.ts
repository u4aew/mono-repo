import { configureStore, Store, combineReducers } from '@reduxjs/toolkit';
import rootReducer from '../store/features';

export function configureRootStore (preloadedState = {}, externalReducer = {}): Store  {
    const reducer = combineReducers({ ...rootReducer, ...externalReducer });
    return configureStore({
        reducer,
        preloadedState
    });
}

console.log(configureRootStore, 'configureRootStore')
