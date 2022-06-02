function maximalSquare(matrix: string[][]): number {
  const cache = new Array(matrix.length)
    .fill(-1)
    .map(() => new Array(matrix[0].length));

  let maxLength = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === '1') {
        const length = helper(matrix, 0, 0, cache);
        maxLength = Math.max(length, maxLength);
      }
    }
  }
  return maxLength;
}

function helper(
  matrix: string[][],
  row: number,
  col: number,
  cache: number[][]
) {
  if (row >= matrix.length || col >= matrix[0].length) {
    return 0;
  }

  if (cache[row][col] === -1) {
    const down = helper(matrix, row + 1, col, cache);
    const right = helper(matrix, row, col + 1, cache);
    const diag = helper(matrix, row + 1, col + 1, cache);

    if (matrix[row][col] === '1') {
      cache[row][col] = 1 + Math.min(down, right, diag);
    }
  }
  return cache[row][col];
}

console.log(
  maximalSquare([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ])
);
