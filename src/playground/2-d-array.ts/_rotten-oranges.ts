const directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];

const ROTTEN = 2;
const FRESH = 1;
const EMPTY = 0;

export function orangesRotting(grid: number[][]): number {
  let totalMinutes = 0;

  let freshOranges = 0;

  const queue = [];

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 2) {
        queue.push([row, col]);
      }
      if (grid[row][col] === 1) {
        freshOranges++;
      }
    }
  }

  while (queue.length > 0) {
    const currentLength = queue.length;
    let count = 0;
    if (freshOranges > 0) {
      totalMinutes++;
    }
    while (count < currentLength) {
      const currentRottenOrange = queue.shift();
      count++;
      const row = currentRottenOrange[0];
      const col = currentRottenOrange[1];

      for (let i = 0; i < directions.length; i++) {
        const currentDir = directions[i];
        const newRow = row + currentDir[0];
        const newCol = col + currentDir[1];

        if (
          newRow < 0 ||
          newCol < 0 ||
          newRow >= grid.length ||
          newCol >= grid[0].length
        ) {
          continue;
        }

        if (grid[newRow][newCol] === FRESH) {
          grid[newRow][newCol] = 2;
          freshOranges--;
          queue.push([newRow, newCol]);
        }
      }
    }
  }
  if (freshOranges > 0) {
    return -1;
  }

  return totalMinutes;
}

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
