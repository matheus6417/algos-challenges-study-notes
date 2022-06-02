export function numSquares(n: number): number {
  if (n === 1) {
    return 1;
  }

  const count = 0;

  return numSquaresRecursive(n, count);
}

function numSquaresRecursive(n: number, count) {
  if (isPerfectSquare(n)) {
    return count;
  }

  const perfectSquareOptions = [];

  for (let i = 1; i <= Math.sqrt(n); i++) {
    perfectSquareOptions.push(i);
  }

  const results = perfectSquareOptions.map((option) =>
    numSquaresRecursive(n - option ** 2, count + 1)
  );

  return Math.min(...results);
}

function isPerfectSquare(n: number) {
  const perfectNum = Math.floor(Math.sqrt(n));

  return n === perfectNum ** 2;
}

console.log(numSquares(12));
