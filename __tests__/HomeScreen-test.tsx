import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {useSelector, useDispatch} from 'react-redux';

import HomeScreen from '../app/screens/HomeScreen';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
const mockDispatch = jest.fn();
const authInformation = {
  id: 'testId',
  first_name: 'testName',
  last_name: 'testLastName',
};

describe('LoginScreen', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) =>
      selector({
        auth: {
          status: 'idle',
          auth: {
            ...authInformation,
          },
          error: null,
        },
      }),
    );
    mockDispatch.mockClear();
    useDispatch.mockImplementation(() => mockDispatch);
  });

  it('given auth it should display it', () => {
    const {queryByTestId} = render(<HomeScreen />);
    expect(queryByTestId("authId").props.children).toContain(authInformation.id);
    expect(queryByTestId("authName").props.children).toContain(authInformation.first_name);
    expect(queryByTestId("authName").props.children).toContain(authInformation.last_name);
  });

  it("should logout", () => {
    const {queryByTestId} = render(<HomeScreen />);
    fireEvent.press(queryByTestId('logout'));
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
