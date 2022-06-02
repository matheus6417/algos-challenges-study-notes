import rotateMatrix from '../7-rotate-matrix';

describe('Rotate Matrix', () => {
  it('should properly rotate matrix', () => {
    expect(rotateMatrix([
      [0, 0, 1],
      [1, 0, 0],
      [1, 1, 1],
    ])).toEqual([
      [1, 1, 0],
      [1, 0, 0],
      [1, 0, 1]]);
  });
});
