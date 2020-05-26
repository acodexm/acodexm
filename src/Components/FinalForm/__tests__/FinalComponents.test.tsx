import React from 'react';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { SubmitMessage } from '../FinalComponents';

describe('Test custom final-form fields and components', () => {
  test('Show nothing', () => {
    const { container } = render(<SubmitMessage />);
    expect(container).toBeEmpty();
  });
  test('Render error, and vanish', async () => {
    const { getByText } = render(<SubmitMessage submitError={'error'} />);
    const error = getByText('general.subbmit.error');
    expect(error).toBeInTheDocument();
    await waitForElementToBeRemoved(() => getByText('general.subbmit.error'))
      .then(() => console.log('Alert removed'))
      .catch((err) => console.log(err));
  });
  test('Render success, and vanish', async () => {
    const { getByText } = render(<SubmitMessage submitSucceeded />);
    const success = getByText('general.subbmit.success');
    expect(success).toBeInTheDocument();
    await waitForElementToBeRemoved(() => getByText('general.subbmit.success'))
      .then(() => console.log('Alert removed'))
      .catch((err) => console.log(err));
  });
});
