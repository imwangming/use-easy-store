import { useCallback } from 'react';
import { store } from './create-store';
import { useSyncExternalStore } from 'use-sync-external-store/shim';

export const useEasyStore = (selector = (x: any) => x) => {
  return useSyncExternalStore(
    store.subscribe,
    useCallback(() => selector(store.getEasyState()), [store, selector]),
  );
};
