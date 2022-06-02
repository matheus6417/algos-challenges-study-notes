import { print } from './utils';

const flipToWin = (a: number): number => {
  let num = a;
  let currentLength = 0;
  let previousLength = 0;
  let maxLength = 1;

  let iteration = 0;
  while (num !== 0) {
    iteration = iteration + 1;
    const currBit = num & 1;
    if (currBit === 1) {
      currentLength = currentLength + 1;
    } else {
      const nextBit = num & 2;
      if (nextBit === 0) {
        previousLength = 0;
      } else {
        previousLength = currentLength;
      }
      currentLength = 0;
    }
    maxLength = Math.max(previousLength + currentLength + 1, maxLength);

    num = num >>> 1;
  }

  return maxLength;
};

export default flipToWin;
