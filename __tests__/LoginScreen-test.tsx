import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {useSelector, useDispatch} from 'react-redux';

import LoginScreen from '../app/screens/LoginScreen';

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
    const {queryByTestId} = render(<LoginScreen />);
    fireEvent.changeText(queryByTestId('email'), 'email@gmail.com');
    fireEvent.changeText(queryByTestId('password'), '123456');
    fireEvent.press(queryByTestId('submit'));
    expect(mockDispatch).toHaveBeenCalled();
  });

  it("given empty fields it shouldn't submit", () => {
    const {queryByTestId} = render(<LoginScreen />);
    fireEvent.changeText(queryByTestId('email'), '');
    fireEvent.changeText(queryByTestId('password'), '');
    fireEvent.press(queryByTestId('submit'));
    expect(mockDispatch).toHaveBeenCalledTimes(0);
  });
});
