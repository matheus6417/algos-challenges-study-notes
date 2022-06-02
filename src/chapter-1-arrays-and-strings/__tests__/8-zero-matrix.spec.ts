import zeroMatrix from '../8-zero-matrix';

describe('Zerp Matrix', () => {
  it('should set rows and columns matrix to zero of any zero value in a matrix', () => {
    expect(zeroMatrix([
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ])).toEqual([
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1]]);
  });
  it('should set rows and columns matrix to zero of any zero value in a matrix', () => {
    expect(zeroMatrix([])).toEqual([]);
  });
});
