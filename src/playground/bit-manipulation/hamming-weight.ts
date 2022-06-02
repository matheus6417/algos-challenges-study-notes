export function hammingWeight(n: number): number {
  let result = 0;

  while (n !== 0) {
    const lastBit = 1 & n;

    if (lastBit === 1) {
      result++;
    }
    n = n >>> 1;
  }

  return result;
}

console.log(hammingWeight(3));
