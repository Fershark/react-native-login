import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import authReducer, {logout, login, AuthState} from './AuthSlice';
import AuthService from '../services/AuthService';

jest.mock('../services/AuthService');
const mockStore = configureMockStore([thunk]);
const initialState: AuthState = {
  status: 'idle',
  auth: null,
  error: null,
};
const authLoginParams = {
  email: 'test',
  password: 'test',
};
const expectedAuth = {
  id: '0b9a9a6b-df41-46f2-a4b8-05844eb97f91',
  first_name: 'Mo Demo',
  last_name: 'User',
};

describe('auth reducer', () => {
  it('should handle initial state', () => {
    expect(authReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should handle login request', () => {
    expect(
      authReducer(
        {...initialState, error: {message: 'Error'}},
        {type: login.pending.type},
      ),
    ).toEqual({
      ...initialState,
      status: 'loading',
    });
  });

  it('should handle login success', () => {
    expect(
      authReducer(
        {...initialState, status: 'loading'},
        {
          type: login.fulfilled.type,
          payload: expectedAuth,
        },
      ),
    ).toEqual({
      ...initialState,
      auth: expectedAuth,
    });
  });

  it('should handle login error', () => {
    const expectedError = {
      message: 'Error',
    };
    expect(
      authReducer(
        {...initialState, status: 'loading'},
        {
          type: login.rejected.type,
          error: expectedError,
        },
      ),
    ).toEqual({
      ...initialState,
      status: 'failed',
      error: expectedError,
    });
  });

  it('should dispatch actions login.pending and login.fulfilled', async () => {
    AuthService.login = jest
      .fn()
      .mockImplementationOnce((params) => expectedAuth);
    const store = mockStore({});
    await store.dispatch(login(authLoginParams));
    const actions = store.getActions();
    expect(actions[0].type).toBe(login.pending.type);
    expect(actions[1].type).toBe(login.fulfilled.type);
    expect(actions[1].payload).toBe(expectedAuth);
  });

  it('should dispatch actions login.pending and login.rejected', async () => {
    const expectedError = new Error('Network Error');
    AuthService.login = jest
      .fn()
      .mockImplementationOnce((params) => Promise.reject(expectedError));
    const store = mockStore({});
    await store.dispatch(login(authLoginParams));
    const actions = store.getActions();
    expect(actions[0].type).toBe(login.pending.type);
    expect(actions[1].type).toBe(login.rejected.type);
    expect(actions[1].error).toBeDefined();
  });
});
