import { print } from './utils';

const findNextLarger = (num: number) => {
  print(num);
  let c = num;
  let c0 = 0;
  let c1 = 0;

  while ((c & 1) === 0 && c !== 0) {
    c0 = c0 + 1;
    c >>= 1;
  }

  while ((c & 1) === 1) {
    c1 = c1 + 1;
    c >>= 1;
  }

  if (c0 + c1 === 31 || c0 + c1 === 0) {
    return -1;
  }

  const p = c0 + c1;

  // mask to clear all digits before p
  const mask1 = ~((1 << p) - 1);

  num = num & mask1;
  print(num);

  // mask to make add 1's before p
  const mask2 = (1 << (c1 - 1)) - 1;

  num = num | mask2;

  return num;
};

findNextLarger(13948);
