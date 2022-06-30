import { pipe } from 'lodash/fp';

const trace = (label: string) => (value: any) => {
  console.log(label, value);
  return value;
};

const g = (n: number) => n + 1;
const f = (n: number) => n * 2;

export const doPipe = pipe(g, trace('after g'), f, trace('after f'));
