const directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];

const ROTTEN = 2;
const FRESH = 1;
const EMPTY = 0;

function orangesRotting(grid: number[][]): number {
  if (grid.length === 0) {
    return 0;
  }
  const queue = [];
  let freshOranges = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === ROTTEN) {
        queue.push([row, col]);
      }
      if (grid[row][col] === FRESH) {
        freshOranges++;
      }
    }
  }

  let currentQueueSize = queue.length;
  let totalMinutes = 0;

  while (queue.length > 0) {
    if (currentQueueSize === 0) {
      totalMinutes++;
      currentQueueSize = queue.length;
    }

    const currentOrange = queue.shift();
    currentQueueSize--;
    const row = currentOrange[0];
    const col = currentOrange[1];

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
