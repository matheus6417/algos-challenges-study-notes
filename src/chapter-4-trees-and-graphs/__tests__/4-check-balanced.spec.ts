import BSTWithCheckBalanced from '../4-check-balanced';

describe('Check Balanced', () => {
  it('should return true if the tree is balanced', () => {
    const array = [0, 1, 2, 3, 4, 5, 6];
    const binaryTree = BSTWithCheckBalanced.constructFromArray(array);

    expect(binaryTree.isBalanced()).toBe(true);
  });
  it('should return true on empty tree', () => {
    const binaryTree = BSTWithCheckBalanced.constructFromArray();

    expect(binaryTree.isBalanced()).toBe(true);
  });
  it('should return false if the tree is balanced', () => {
    const array = [0, 1, 2, 3, 4, 5, 6];
    const binaryTree = BSTWithCheckBalanced.constructFromArray(array);

    binaryTree.insert(7);
    binaryTree.insert(8);
    binaryTree.insert(9);
    binaryTree.insert(10);

    expect(binaryTree.isBalanced()).toBe(false);
  });
});

describe('Check Balanced Improved', () => {
  it('should return true if the tree is balanced', () => {
    const array = [0, 1, 2, 3, 4, 5, 6];
    const binaryTree = BSTWithCheckBalanced.constructFromArray(array);

    expect(binaryTree.isBalancedImproved()).toBe(true);
  });
  it('should return true on empty tree', () => {
    const binaryTree = BSTWithCheckBalanced.constructFromArray();

    expect(binaryTree.isBalancedImproved()).toBe(true);
  });
  it('should return false if the tree not balanced', () => {
    const array = [0, 1, 2, 3, 4, 5, 6];
    const binaryTree = BSTWithCheckBalanced.constructFromArray(array);

    binaryTree.insert(7);
    binaryTree.insert(8);
    binaryTree.insert(9);
    binaryTree.insert(10);

    expect(binaryTree.isBalancedImproved()).toBe(false);
  });
  it('should return false if the tree not balanced', () => {
    const array = [0, 1, 2, 3, 4, 5, 6];
    const binaryTree = BSTWithCheckBalanced.constructFromArray(array);

    binaryTree.insert(-1);
    binaryTree.insert(-2);
    binaryTree.insert(-3);
    binaryTree.insert(-4);

    expect(binaryTree.isBalancedImproved()).toBe(false);
  });
});
