import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Trail from '../Trail';

afterEach(cleanup);

const mockStore = configureStore([]);
const store = mockStore({});

describe('Testing trails component', () => {
  let newNavigateIndex = 0;

  const mockHandleNavigate = (index: number) => {
    newNavigateIndex = index;
  };

  it('renders passed trail text', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Trail
          name={'home'}
          index={1}
          active={true}
          handleNavigate={mockHandleNavigate}
        />
      </Provider>
    );

    expect(getByTestId('trail')).toHaveTextContent('home');
  });

  it('navigates on click', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Trail
          name={'home'}
          index={2}
          active={false}
          handleNavigate={mockHandleNavigate}
        />
      </Provider>
    );

    fireEvent.click(getByTestId('trail'));
    expect(newNavigateIndex).toBe(2);
  });
});
