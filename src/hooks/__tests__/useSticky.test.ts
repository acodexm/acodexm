import { renderHook } from '@testing-library/react-hooks';
import useSticky from '../useSticky';

describe('test sticky trigger hook', () => {
  test('renders correctly', () => {
    const { result } = renderHook(() => useSticky());
    const { sticky } = result.current;
    expect(sticky).toBe(false);
  });
});
