export function exist(board: string[][], word: string): boolean {
  const index = 0;
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === word[index]) {
        const exists = existsDFS(board, row, col, word, index);
        if (exists) {
          return true;
        }
      }
    }
  }

  return false;
}

function existsDFS(
  board: string[][],
  row: number,
  col: number,
  word: string,
  index: number
) {
  if (index === word.length - 1 && board[row][col] === word[index]) {
    return true;
  }

  if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
    return false;
  }

  if (board[row][col] !== word[index]) {
    return false;
  }

  board[row][col] = '*';
  for (let i = 0; i < directions.length; i++) {
    const [dRow, dCol] = directions[i];
    const nextRow = row + dRow;
    const nextCol = col + dCol;

    const exists = existsDFS(board, nextRow, nextCol, word, index + 1);
    if (exists) {
      return true;
    }
  }
  board[row][col] = word[index];
  return false;
}

const directions = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
];

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCCED'
  )
);
