// heavily influenced by Nick White's explanation at:
// https://www.youtube.com/watch?v=SA867FvqHrM
const rotateMatrix = (matrix: number[][]): number[][] => {
  const n = matrix.length;

  // loops through rows
  for (let i = 0; i < n; i++) {
    // loops through columns
    for (let j = i; j < n; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; i < n / 2; i++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - j - 1];
      matrix[i][n - 1 - j] = temp;
    }
  }

  return matrix;
};

export default rotateMatrix;
