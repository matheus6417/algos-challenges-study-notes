import MinimalTree from '../2-minimal-tree';

describe('constructMinimalTree', () => {
  const testCases = [
    [0, 1, 2, 3, 4, 5],
    ['a', 'b', 'c', 'd'],
    [],
    ['abc'],
    ['lewis', 'valteri', 'max', 'daniel', 'esteban', 'charles', 'sebastian'],
  ];

  it('should properly create a minimal tree from an array of numbers', () => {
    const nums = [0, 1, 2, 3, 4, 5];
    const tree = MinimalTree.constructFromArray(nums);

    const backToArray = tree.DFTInOrder();
    expect(nums).toMatchObject(backToArray);
  });

  it('should properly create a minimal tree from an array of strings', () => {
    const strings = ['a', 'b', 'c', 'd'];
    const tree = MinimalTree.constructFromArray(strings);

    const backToArray = tree.DFTInOrder();
    expect(strings).toMatchObject(backToArray);
  });
  it('should properly create a minimal tree from an empty array', () => {
    const empty = [];
    const tree = MinimalTree.constructFromArray(empty);

    const backToArray = tree.DFTInOrder();
    expect(empty).toMatchObject(backToArray);
  });
  it('should properly create a minimal tree from an array of string with length = 1', () => {
    const stringArray = ['abc'];
    const tree = MinimalTree.constructFromArray(stringArray);

    const backToArray = tree.DFTInOrder();
    expect(stringArray).toMatchObject(backToArray);
  });
  it('should properly create a minimal tree from an array of strings', () => {
    const strings = [
      'lewis',
      'valteri',
      'max',
      'daniel',
      'esteban',
      'charles',
      'sebastian',
    ];
    const tree = MinimalTree.constructFromArray(strings);

    const backToArray = tree.DFTInOrder();
    expect(strings).toMatchObject(backToArray);
  });
  it('should properly create a minimal tree if no array is supplied to the function', () => {
    const tree = MinimalTree.constructFromArray();

    const backToArray = tree.DFTInOrder();
    expect([]).toMatchObject(backToArray);
  });
});
