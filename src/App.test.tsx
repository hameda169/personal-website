import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  function renderApp() {
    render(<App />);
  }

  expect(renderApp).not.toThrow();
});
