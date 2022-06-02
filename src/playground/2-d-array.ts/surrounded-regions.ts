export function solve(board: string[][]) {
  if (board.length === 0 || board[0].length === 0) {
    return;
  }

  // left and right borders
  for (let i = 0; i < board.length; i++) {
    solveRecursive(board, i, 0);

    solveRecursive(board, i, board[0].length - 1);
  }

  // top and bottom
  for (let j = 0; j < board[0].length; j++) {
    solveRecursive(board, 0, j);
    solveRecursive(board, board.length - 1, j);
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] !== '*') {
        board[row][col] = 'X';
      }
    }
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === '*') {
        board[row][col] = 'O';
      }
    }
  }

  return board;
}

function solveRecursive(board: string[][], row: number, col: number) {
  if (board[row]?.[col] === undefined) {
    return;
  }
  if (board[row][col] === 'X') {
    return;
  }

  if (board[row][col] === '*') {
    return;
  }

  board[row][col] = '*';

  for (let i = 0; i < directions.length; i++) {
    const [diffRow, diffCol] = directions[i];
    const newRow = row + diffRow;
    const newCol = col + diffCol;

    solveRecursive(board, newRow, newCol);
  }
}

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

console.log(
  solve([
    ['X', 'X', 'X', 'O', 'X', 'O'],
    ['O', 'X', 'O', 'X', 'O', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X'],
  ])
);
