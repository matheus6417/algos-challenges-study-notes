export function islandPerimeter(grid: number[][]): number {
  const visited = new Array(grid.length)
    .fill(0)
    .map(() => new Array(grid[0].length).fill(false));

  const perimeter = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        islandPerimeterRecursive(grid, row, col, visited, perimeter);
        break;
      }
    }
  }

  return perimeter;
}

function islandPerimeterRecursive(
  grid: number[][],
  row: number,
  col: number,
  visited: boolean[][],
  perimeter
) {
  if (visited[row][col] === true) {
    return;
  }

  visited[row][col] = true;

  for (let i = 0; i < directions.length; i++) {
    const currentDir = directions[i];
    const nextRow = row + currentDir[0];
    const nextCol = col + currentDir[1];

    if (
      nextRow < 0 ||
      nextRow >= grid.length ||
      nextCol < 0 ||
      nextCol >= grid[0].length
    ) {
      perimeter++;
      continue;
    }
    if (grid[nextRow][nextCol] === WATER) {
      perimeter++;
    }

    if (grid[nextRow][nextCol] === LAND && !visited[nextRow][nextCol]) {
      islandPerimeterRecursive(grid, nextRow, nextCol, visited, perimeter);
    }
  }
}

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const LAND = 1;
const WATER = 0;

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);
