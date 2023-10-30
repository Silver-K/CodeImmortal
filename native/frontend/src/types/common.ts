export type CbT<T, U> = (p?: T) => U;
export type VoidCb = CbT<undefined, void>;

export type Point = {
  x: number;
  y: number;
}

export type Direction = 'left' | 'right' | 'up' | 'down' | 'stay';