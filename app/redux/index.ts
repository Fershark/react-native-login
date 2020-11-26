import {combineReducers, configureStore} from '@reduxjs/toolkit';

import authSliceReducer from './AuthSlice';

const rootReducer = combineReducers({
  auth: authSliceReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
