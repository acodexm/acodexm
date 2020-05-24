import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders initial count', () => {
  render(<App />);
  const myName = screen.getByText('Adam Kamiński');
  expect(myName).toBeInTheDocument();
});
