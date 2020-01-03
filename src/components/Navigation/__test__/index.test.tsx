import React, { Fragment } from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Navigaton from '../index';

afterEach(cleanup);

jest.mock('../../../utils', () => {
  return {
    splitPath: () => ['home', 'hello'],
    joinPath: () => '/home/hello',
  };
});

jest.mock('../Trail', () => {
  const MockTrail = ({ name }: { name: string }) => (
    <div data-testid={name}>{name}</div>
  );
  return MockTrail;
});

const mockStore = configureStore([]);

describe('renders navigation breadcrumb', () => {
  const store = mockStore({
    currentPath: '/home/hello',
  });

  it('it renders breadcrumb', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Navigaton />
      </Provider>
    );

    ['home', 'hello'].forEach((trail: string) => {
      expect(getByTestId(trail)).toHaveTextContent(trail);
    });
  });
});
