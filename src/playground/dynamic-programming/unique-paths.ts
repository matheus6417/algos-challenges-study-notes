function uniquePaths(m: number, n: number): number {
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(-1));
  return uniquePathsRecursive(m, n, 1, 1, dp);
}

function uniquePathsRecursive(
  m: number,
  n: number,
  row: number,
  col: number,
  dp
) {
  if (row > m || col > n) {
    return 0;
  }
  if (m === row && n === col) {
    return 1;
  }
  if (dp[row][col] !== -1) {
    return dp[row][col];
  }

  const totalPaths =
    uniquePathsRecursive(m, n, row + 1, col, dp) +
    uniquePathsRecursive(m, n, row, col + 1, dp);

  dp[row][col] = totalPaths;
  return dp[row][col];
}

console.log(uniquePaths(3, 4));
