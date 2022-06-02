import Node from '../data-structures/binary-search-tree/node';
import MinimalTree from './2-minimal-tree';

const isNumber = (value) => typeof value === 'number';

class BSTWithCheckBalanced extends MinimalTree {
  static constructFromArray(array: number[] = []): BSTWithCheckBalanced {
    const newTree = new BSTWithCheckBalanced();

    newTree.root = newTree.constructMinimalTree(array);

    return newTree;
  }

  checkBST(
    node: Node<number> = this.root,
    min: number = null,
    max: number = null
  ): boolean {
    if (!node) return true;

    if (
      (isNumber(min) && node.value <= min) ||
      (isNumber(max) && node.value > max)
    )
      return false;

    return (
      this.checkBST(node.left, min, node.value) &&
      this.checkBST(node.right, node.value, max)
    );
  }
}

const BST = BSTWithCheckBalanced.constructFromArray([0, 1, 2, 3, 4, 5, 6]);
BST.checkBST();

export default BSTWithCheckBalanced;
