import magicIndex, { magicIndexBruteForce } from '../3-magic-index';

describe('magicIndex', () => {
  it('should properly find the magic index', () => {
    const inputArray = [-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13];
    const index = magicIndex(inputArray);
    expect(index).toBe(7);
  });
  it('should properly find the magic index', () => {
    const inputArray = [-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13];
    const index = magicIndexBruteForce(inputArray);
    expect(index).toBe(7);
  });
});
