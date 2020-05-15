import { useState } from 'react';

export const useSetState = (initState: any) => {
  const [state, setState] = useState(initState);
  const updateState = (arg: any) => setState((prev: any) => ({ ...prev, ...arg }));
  return [state, updateState];
};
