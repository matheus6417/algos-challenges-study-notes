const directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];

export function traversalDFS(matrix: number[][]): number[] {
  const seen: boolean[][] = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));

  const values = [];

  dfs(matrix, 0, 0, seen, values);

  return values;
}

function dfs(
  matrix: number[][],
  row: number,
  col: number,
  seen: boolean[][],
  values: number[]
): void {
  if (
    row < 0 ||
    col < 0 ||
    row >= matrix.length ||
    col >= matrix[0].length ||
    seen[row][col]
  ) {
    return;
  }

  values.push(matrix[row][col]);
  seen[row][col] = true;

  for (let i = 0; i < directions.length; i++) {
    const currentDir = directions[i];
    dfs(matrix, row + currentDir[0], col + currentDir[1], seen, values);
  }
}

console.log(
  traversalDFS([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ])
);
