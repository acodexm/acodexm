import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

const loader = document.querySelector('.loader');

const hideLoader = () => loader?.classList.add('loader--hide');
test('renders root app', () => {
  const { getByText } = render(<App hideLoader={hideLoader} />);
  const myName = getByText('Adam Kamiński');
  expect(myName).toBeInTheDocument();
});
