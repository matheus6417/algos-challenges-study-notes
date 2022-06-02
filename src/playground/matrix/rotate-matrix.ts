function rotate(matrix: number[][]): void {
  let left = 0;
  let right = matrix.length - 1;

  while (left < right) {
    for (let i = left; i < right - left; i++) {
      const top = left;
      const bottom = right;

      // save the top left
      const topLeft = matrix[top][left + i];

      // move the bottom left to top left
      matrix[top][left + i] = matrix[bottom - i][left];
      matrix[bottom - i][left] = matrix[bottom][right - i];
      matrix[bottom][right - i] = matrix[top + i][right];
      matrix[top + i][right] = topLeft;
    }
    right -= 1;
    left += 1;
  }

  return;
}
