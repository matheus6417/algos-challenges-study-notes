export function spiralOrder(matrix: number[][]): number[] {
  if (matrix.length === 0) {
    return [];
  }

  const output = [];

  const dir = 0;

  depthFirstSearch(matrix, 0, 0, output, dir);

  return output;
}

function depthFirstSearch(
  matrix: number[][],
  row: number,
  col: number,
  output: number[],
  dir: number
) {
  if (
    row < 0 ||
    col < 0 ||
    row >= matrix.length ||
    col >= matrix[0].length ||
    matrix[row][col] === VISITED
  ) {
    return;
  }

  output.push(matrix[row][col]);
  matrix[row][col] = VISITED;

  let currentDir = directions[dir];

  let newRow = row + currentDir[0];
  let newCol = col + currentDir[1];

  if (
    newRow < 0 ||
    newCol < 0 ||
    newRow >= matrix.length ||
    newCol >= matrix[0].length ||
    matrix[newRow][newCol] === VISITED
  ) {
    if (dir === UP) {
      dir = RIGHT;
    } else {
      dir++;
    }

    currentDir = directions[dir];
    newRow = row + currentDir[0];
    newCol = col + currentDir[1];
  }
  depthFirstSearch(matrix, newRow, newCol, output, dir);
}

const directions = [
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
  [-1, 0], // up
];

const RIGHT = 0;
const DOWN = 1;
const LEFT = 2;
const UP = 3;

const VISITED = 1000;
