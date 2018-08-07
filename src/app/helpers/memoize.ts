import memoize from 'memoizee';

export const memoizePromise = (
  fn: (...args: any[]) => Promise<any>,
  maxAge: number = 60000
) =>
  memoize(fn, {
    promise: true,
    maxAge,
    normalizer: args => JSON.stringify(args)
  });
