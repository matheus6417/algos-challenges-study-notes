const countWaysWithMemo = (n: number, cache: number[]): number => {
  if (n < 0) {
    return 0;
  }
  if (n === 0) {
    return 1;
  }
  if (cache[n]) {
    return cache[n];
  }
  cache[n] =
    countWaysWithMemo(n - 1, cache) +
    countWaysWithMemo(n - 2, cache) +
    countWaysWithMemo(n - 3, cache);
  return cache[n];
};

const countWays = (n: number): number => {
  const cache = new Array<number>(n + 1).fill(null);
  return countWaysWithMemo(n, cache);
};
