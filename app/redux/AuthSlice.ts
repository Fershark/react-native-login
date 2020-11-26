import {createSlice, createAsyncThunk, SerializedError} from '@reduxjs/toolkit';

import Auth from '../models/Auth';
import {
  default as AuthService,
  AuthLoginParams,
} from '../services/AuthService';

export type AuthState = {
  status: 'idle' | 'loading' | 'failed';
  auth: Auth | null;
  error: SerializedError | null;
};

const initialState: AuthState = {
  status: 'idle',
  auth: null,
  error: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async (authLoginParams: AuthLoginParams) =>
    AuthService.login(authLoginParams),
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'idle';
        state.auth = action.payload;
      });
  },
});

export const {logout} = authSlice.actions;

export default authSlice.reducer;
