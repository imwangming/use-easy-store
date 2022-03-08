export const tryFunction = (fun: any, ...args: any[]) =>
  typeof fun === 'function' ? fun(...args) : fun;
