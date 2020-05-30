import { act } from '@testing-library/react';

const timeout = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
async function sleep(ms: number) {
  await act(async () => {
    await timeout(ms);
  });
}

export default sleep;
