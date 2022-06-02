export function numRookCaptures(board: string[][]): number {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === 'R') {
        return (
          numRookCapturesRecursive(board, row, col, directions[0]) +
          numRookCapturesRecursive(board, row, col, directions[1]) +
          numRookCapturesRecursive(board, row, col, directions[2]) +
          numRookCapturesRecursive(board, row, col, directions[3])
        );
      }
    }
  }
  return 0;
}

function numRookCapturesRecursive(
  board: string[][],
  row: number,
  col: number,
  direction: number[]
): number {
  if (row < 0 || col < 0 || row >= board.length || col >= board[0].length) {
    return 0;
  }

  if (board[row][col] === 'B') {
    return 0;
  }

  if (board[row][col] === 'p') {
    return 1;
  }

  return numRookCapturesRecursive(
    board,
    row + direction[0],
    col + direction[1],
    direction
  );
}

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

console.log(
  numRookCaptures([
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['.', '.', '.', 'R', '.', '.', '.', 'p'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'p', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
  ])
);
