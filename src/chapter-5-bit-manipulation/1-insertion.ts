import { print } from './utils';

const insert = (num1: number, num2: number, start: number, end: number) => {
  const allOnes = ~0;

  const left = allOnes << (end + 1);
  const right = (1 << start) - 1;

  const mask = left | right;

  const clearedNum1 = num1 & mask;
  const shiftedNum2 = num2 << start;

  return clearedNum1 | shiftedNum2;
};

export default insert;
