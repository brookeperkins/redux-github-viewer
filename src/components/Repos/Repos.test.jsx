import React from 'react';
import { render, cleanup } from '@testing-library/react';
import RepoList from './Repos';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Repos component', () => {
  afterEach(() => cleanup());
  it('renders Repos', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <RepoList />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
