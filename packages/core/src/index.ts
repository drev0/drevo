const _version = require("../package").version as string;

export const version = () => _version;

export interface DrevoParams<N> {
  root: N;
}

export const drevo = <N = unknown>(params: DrevoParams<N>) => {
  return params.root;
};

export type AnyDrevo<T> = T;