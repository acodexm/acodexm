import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import { useSetState, useSetStateWithStorage } from '../useSetState';

const init = { a: 1, b: 1 };
describe('test custom hooks', () => {
  test('correctly init state', () => {
    const { result } = renderHook(() => useSetState(init));
    const [state] = result.current;
    expect(state).toEqual(init);
  });
  test('correctly set state', () => {
    const { result } = renderHook(() => useSetState(init));
    let [state, setState] = result.current;
    act(() => setState({ b: 2 }));
    [state, setState] = result.current;
    expect(state).toEqual({ a: 1, b: 2 });
  });
  test('correctly update state', () => {
    const { result } = renderHook(() => useSetState(init));
    let [state, setState] = result.current;
    act(() => setState({ a: 2 }));
    [state, setState] = result.current;
    expect(state).toEqual({ a: 2, b: 1 });
  });
  test('correctly custom update state', () => {
    const { result } = renderHook(() => useSetState(init));
    let [state, setState] = result.current;
    act(() => setState(() => ({ a: 0, b: 0 })));
    [state, setState] = result.current;
    expect(state).toEqual({ a: 0, b: 0 });
  });
});

const KEY = 'TEST_KEY';
const store = { a: 'INITIAL' };
describe('test localstorage hook', () => {
  test('set state to localstorage', () => {
    const { result } = renderHook(() => useSetStateWithStorage(KEY, store));
    let [state, setState] = result.current;
    act(() => setState({ a: 'UPDATED' }));
    [state, setState] = result.current;
    expect(state).toEqual({ a: 'UPDATED' });
  });
  test('get state from localstorage', () => {
    const { result } = renderHook(() => useSetStateWithStorage(KEY, store));
    const [state] = result.current;
    expect(state).toEqual({ a: 'UPDATED' });
  });
});
