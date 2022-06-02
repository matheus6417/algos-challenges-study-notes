export function knightProbability(
  N: number,
  K: number,
  r: number,
  c: number
): number {
  const dp = new Array(K + 1)
    .fill(0)
    .map(() => new Array(N).fill(0).map(() => new Array(N).fill(undefined)));

  const result = knightProbabilityRecursive(N, K, r, c, dp);

  return result;
}

function knightProbabilityRecursive(
  N: number,
  K: number,
  r: number,
  c: number,
  dp: number[][][]
): number {
  if (r < 0 || r >= N || c < 0 || c >= N) {
    return 0;
  }
  if (K === 0) {
    return 1;
  }

  if (dp[K][r][c] !== undefined) {
    return dp[K][r][c];
  }

  let res = 0;

  for (let i = 0; i < directions.length; i++) {
    const dir = directions[i];

    res =
      res +
      knightProbabilityRecursive(N, K - 1, r + dir[0], c + dir[1], dp) / 8;
  }

  dp[K][r][c] = res;

  return dp[K][r][c];
}

const directions = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [2, -1],
  [2, 1],
];
