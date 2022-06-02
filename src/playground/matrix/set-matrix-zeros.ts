export function setZeroes(matrix: number[][]): void {
  const rows = new Set();
  const cols = new Set();

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        rows.add(row);
        cols.add(col);
      }
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (cols.has(col) || rows.has(row)) {
        matrix[row][col] = 0;
      }
    }
  }
}
