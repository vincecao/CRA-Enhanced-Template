/* eslint-env jest */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '~/App';

describe('App testing', () => {
  test('test without crashing', () => {
    render(<App />);
    expect(screen.queryByText('Learn React')).toBeInTheDocument();
  });
});
