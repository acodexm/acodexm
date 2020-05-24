import { useState } from 'react';
import LocalStorage from '../utils/localStorage';
import { isFunction } from 'lodash';

type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (value: A) => void;
type Partial<T> = {
  [P in keyof T]?: T[P];
};
export function useSetState<S>(initState: S | (() => S)): [S, Dispatch<SetStateAction<Partial<S>>>] {
  const [state, setState] = useState(initState);
  const updateState: Dispatch<SetStateAction<Partial<S>>> = (arg) => {
    setState((prev) => ({ ...prev, ...arg }));
  };
  return [state, updateState];
}

export function useSetStateWithStorage<S>(
  initState: S | (() => S),
  key: string
): [S, Dispatch<SetStateAction<Partial<S>>>] {
  const data = (LocalStorage.getItem(key) as S) || initState;
  const [state, setState] = useState(data);
  const updateState: Dispatch<SetStateAction<Partial<S>>> = (arg) => {
    if (isFunction(arg)) {
      setState((prev) => {
        const data = arg(prev) as S;
        LocalStorage.setItem(key, data);
        return data;
      });
    } else
      setState((prev) => {
        const data = { ...prev, ...arg };
        LocalStorage.setItem(key, data);
        return data;
      });
  };
  return [state, updateState];
}
