import BSTWithCheckBalanced from '../5-check-bst';
import Node from '../../data-structures/binary-search-tree/node';

describe('Check BST', () => {
  it('returns true if root is null', () => {
    const emptyBST = new BSTWithCheckBalanced();

    expect(emptyBST.checkBST()).toBe(true);
  });
  it('returns true if is a BST', () => {
    const BST = BSTWithCheckBalanced.constructFromArray([0, 1, 2, 3, 4, 5, 6]);
    expect(BST.checkBST()).toBe(true);
  });

  it('returns false if root a BST', () => {
    const tree = BSTWithCheckBalanced.constructFromArray([0, 1, 2, 3, 4, 5, 6]);

    tree.root.right.right = new Node(-10);

    expect(tree.checkBST()).toBe(false);
  });
});
