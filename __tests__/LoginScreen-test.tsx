import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {useSelector, useDispatch} from 'react-redux';

import LoginScreen from '../app/screens/LoginScreen';

const store = {
  auth: {
    status: 'idle',
    auth: null,
    error: null,
  },
};
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
const mockDispatch = jest.fn();

describe('LoginScreen', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) =>
      selector({
        auth: {
          status: 'idle',
          auth: null,
          error: null,
        },
      }),
    );
    mockDispatch.mockClear();
    useDispatch.mockImplementation(() => mockDispatch);
  });

  it('given filled fields it should submit', () => {
    const {getByPlaceholderText, getByText} = render(<LoginScreen />);

    fireEvent.changeText(
      getByPlaceholderText('Email address'),
      'email@gmail.com',
    );
    fireEvent.changeText(getByPlaceholderText('Password'), '123456');

    fireEvent.press(getByText('Submit'));
    expect(mockDispatch).toHaveBeenCalled();
  });

  it("given empty fields it shouldn't submit", () => {
    const {getByPlaceholderText, getByText} = render(<LoginScreen />);

    fireEvent.changeText(getByPlaceholderText('Email address'), '');
    fireEvent.changeText(getByPlaceholderText('Password'), '');

    fireEvent.press(getByText('Submit'));
    expect(mockDispatch).toHaveBeenCalledTimes(0);
  });
});
