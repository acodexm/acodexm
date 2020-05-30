import React, { FunctionComponent } from 'react';
import { render } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

const warning = `I'm dangerous`;
const Bomb: FunctionComponent<{ explode?: boolean }> = ({ explode }) => {
  if (explode) throw new Error('Boom');
  return <div>{warning}</div>;
};
const renderBomb = (explode?: boolean) =>
  render(
    <ErrorBoundary>
      <Bomb explode={explode} />
    </ErrorBoundary>
  );
describe('checks global error handler', () => {
  test('chatches error', () => {
    const { container } = renderBomb(true);
    expect(container.firstChild).toHaveStyle({ backgroundRepeat: 'repeat' });
  });
  test('renders children', () => {
    const { getByText } = renderBomb();
    expect(getByText(warning)).toBeInTheDocument();
  });
});
