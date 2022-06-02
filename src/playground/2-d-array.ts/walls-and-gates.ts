const INF = 2147483647;

const testMatrix = [
  [INF, -1, 0, 0],
  [INF, INF, INF, 0],
  [INF, -1, INF, -1],
  [0, -1, INF, INF],
];

const WALL = -1;
const GATE = 0;
const EMPTY = 2147483647;

const directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];

export function wallsAndGates(rooms: number[][]): number[][] {
  for (let row = 0; row < rooms.length; row++) {
    for (let col = 0; col < rooms[0].length; col++) {
      if (rooms[row][col] === GATE) {
        dfs(rooms, row, col, 0);
      }
    }
  }

  return rooms;
}

function dfs(rooms: number[][], row: number, col: number, step: number): void {
  if (rooms[row]?.[col] === undefined || step > rooms[row][col]) {
    return;
  }
  rooms[row][col] = step;

  for (let i = 0; i < directions.length; i++) {
    const direction = directions[i];
    const newRow = row + direction[0];
    const newCol = col + direction[1];

    dfs(rooms, newRow, newCol, step + 1);
  }
}

wallsAndGates(testMatrix);

console.log(testMatrix);
