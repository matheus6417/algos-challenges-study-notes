const zeroMatrix = (matrix: number[][]): number[][] => {
  const numRows = matrix.length;
  if (numRows === 0) {
    return matrix;
  }
  const colRows = matrix[0].length;

  const setRowsAndColumnsToZero = (rowIndex, colIndex) => {
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < colRows; j++) {
        matrix[rowIndex][j] = 0;
        matrix[i][colIndex] = 0;
      }
    }
  };
  const cellsWithZeros = [];
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < colRows; j++) {
      if (matrix[i][j] === 0) {
        cellsWithZeros.push([i, j]);
      }
    }
  }
  for (let index = 0; index < cellsWithZeros.length; index++) {
    const i = cellsWithZeros[index][0];
    const j = cellsWithZeros[index][1];
    setRowsAndColumnsToZero(i, j);
  }

  return matrix;
};

export default zeroMatrix;
