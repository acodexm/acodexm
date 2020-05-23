import { useState } from 'react';
import LocalStorage from '../utils/localStorage';
import { isFunction } from 'lodash';

type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (value: A) => void;
interface State {
  <S>(initState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
}
interface Storage {
  <S>(initState: S | (() => S), key: string): [S, Dispatch<SetStateAction<S>>];
}
export const useSetState: State = (initState) => {
  const [state, setState] = useState(initState);
  const updateState: Dispatch<SetStateAction<any>> = (arg) => setState((prev) => ({ ...prev, ...arg }));
  return [state, updateState];
};

export const useSetStateWithStorage: Storage = (initState, key) => {
  const data = LocalStorage.getItem(key) || initState;
  const [state, setState] = useState(data);
  const updateState: Dispatch<SetStateAction<any>> = (arg) => {
    if (isFunction(arg)) {
      setState((prev: any) => {
        const data = arg(prev);
        LocalStorage.setItem(key, data);
        return data;
      });
    } else
      setState((prev: any) => {
        const data = { ...prev, ...arg };
        LocalStorage.setItem(key, data);
        return data;
      });
  };
  return [state, updateState];
};
