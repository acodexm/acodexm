import { useEffect, useState } from 'react';
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
    if (isFunction(arg)) {
      setState((prev) => arg(prev) as S);
    } else setState((prev) => ({ ...prev, ...arg }));
  };
  return [state, updateState];
}

export function useSetStateWithStorage<S>(
  key: string,
  initState: S | (() => S)
): [S, Dispatch<SetStateAction<Partial<S>>>] {
  const data = (LocalStorage.getItem(key) as S) || initState;
  const [state, setState] = useSetState<S>(data);
  useEffect(() => {
    LocalStorage.setItem(key, state);
  }, [state]);
  return [state, setState];
}
