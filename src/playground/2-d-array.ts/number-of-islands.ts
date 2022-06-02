const directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];

export function numIslands(grid: string[][]): number {
  if (grid.length === 0) {
    return 0;
  }

  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === '1') {
        count++;
        grid[row][col] = '0';
        const queue = [];
        queue.push([row, col]);

        while (queue.length > 0) {
          const [currentRow, currentCol] = queue.shift();

          for (let k = 0; k < directions.length; k++) {
            const currentDir = directions[k];
            const newRow = currentRow + currentDir[0];
            const newCol = currentCol + currentDir[1];

            if (
              newRow < 0 ||
              newCol < 0 ||
              newRow >= grid.length ||
              newCol >= grid[0].length
            ) {
              continue;
            }
            if (grid[newRow][newCol] === '1') {
              queue.push([newRow, newCol]);
              grid[newRow][newCol] = '0';
            }
          }
        }
      }
    }
  }

  return count;
}

console.log(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ])
);
