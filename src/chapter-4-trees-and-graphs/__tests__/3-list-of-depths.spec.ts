import listOfDepths from '../3-list-of-depths';

describe('listOfDepths', () => {
  it('should return an array of 3 linked-lists if the tree has 7 elements', () => {
    const array = [0, 1, 2, 3, 4, 5, 6];
    const binaryTree = listOfDepths.constructFromArray(array);
    const list = binaryTree.listOfDepths();
    const listOfArrays = list.map((linkedList) => linkedList.toArray());
    expect(list.length).toBe(3);
    expect(listOfArrays[0]).toMatchObject([3]);
    expect(listOfArrays[1]).toMatchObject([1, 5]);
    expect(listOfArrays[2]).toMatchObject([0, 2, 4, 6]);
  });
  it('should return an array of 4 linked-lists if the tree is not fully balanced', () => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const binaryTree = listOfDepths.constructFromArray(array);
    const list = binaryTree.listOfDepths();
    const listOfArrays = list.map((linkedList) => linkedList.toArray());
    expect(list.length).toBe(4);
    expect(listOfArrays[0]).toMatchObject([6]);
    expect(listOfArrays[1]).toMatchObject([3, 9]);
    expect(listOfArrays[2]).toMatchObject([1, 5, 8, 11]);
    expect(listOfArrays[3]).toMatchObject([0, 2, 4, 7, 10]);
  });
  it('should return an array of 0 linked-lists if no array is provided to constructFrom function', () => {
    const binaryTree = listOfDepths.constructFromArray();
    const list = binaryTree.listOfDepths();
    const listOfArrays = list.map((linkedList) => linkedList.toArray());
    console.log(listOfArrays);
    expect(list.length).toBe(1);
    expect(listOfArrays[0]).toMatchObject([]);
  });
});
