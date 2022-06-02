export function pacificAtlantic(matrix: number[][]): number[][] {
  const pacific = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));

  const atlantic = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));

  for (let col = 0; col < matrix[0].length; col++) {
    dfs(matrix, 0, col, pacific);
    dfs(matrix, matrix.length - 1, col, atlantic);
  }

  for (let row = 0; row < matrix.length; row++) {
    dfs(matrix, row, 0, pacific);
    dfs(matrix, row, matrix[0].length - 1, atlantic);
  }

  const output = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (atlantic[row][col] === true && pacific[row][col]) {
        output.push([row, col]);
      }
    }
  }

  return output;
}

function dfs(matrix: number[][], row: number, col: number, ocean: boolean[][]) {
  if (ocean[row][col] === true) {
    return;
  }
  const currentHeight = matrix[row][col];
  ocean[row][col] = true;

  for (let i = 0; i < directions.length; i++) {
    const [diffRow, diffCol] = directions[i];
    const newRow = row + diffRow;
    const newCol = col + diffCol;

    if (
      newRow < 0 ||
      newCol < 0 ||
      newRow >= matrix.length ||
      newCol >= matrix[0].length
    ) {
      continue;
    } else {
      const newHeight = matrix[newRow][newCol];
      if (newHeight >= currentHeight) {
        dfs(matrix, newRow, newCol, ocean);
      }
    }
  }
}

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);
