import produce from 'immer';
import { tryFunction } from './utils';

export let store: any;
let easyState: any;

const listeners = new Set();

const subscribe = (listener: any) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const getEasyState = () => easyState;

const setEasyState = (nextState: any) => {
  easyState = tryFunction(nextState, easyState);
  listeners.forEach((listener: any) => listener());
};

const setImmerEasyState = (nextState: any) => {
  easyState = produce(easyState, nextState);
  listeners.forEach((listener: any) => listener());
};

export const createEasyStore = (defaultEasyState: any) => {
  easyState = defaultEasyState;
  return (store = { getEasyState, setEasyState, setImmerEasyState, subscribe });
};
