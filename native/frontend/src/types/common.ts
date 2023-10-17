export type CbT<T, U> = (p?: T) => U;
export type VoidCb = CbT<undefined, void>;