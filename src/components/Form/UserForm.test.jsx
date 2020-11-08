import React from 'react';
import { render, cleanup } from '@testing-library/react';
import UserForm from './UserForm';
import { Provider } from 'react-redux';
import store from '../../store';

describe('UserForm component', () => {
  afterEach(() => cleanup());
  it('renders UserForm', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <UserForm />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
