import Node from '../data-structures/binary-search-tree/node';
import BinarySearchTree from '../data-structures/binary-search-tree';

class MinimalTree extends BinarySearchTree<number> {
  // root: Node<T> | null;

  static constructFromArray(array = []): MinimalTree {
    const newTree = new MinimalTree();

    newTree.root = newTree.constructMinimalTree(array);

    return newTree;
  }

  constructMinimalTree(array: number[], root: Node<number> = this.root) {
    const arrayLength = array.length;
    const half = Math.floor(arrayLength / 2);

    const left = array.slice(0, half);
    const right = array.slice(half + 1, array.length);

    root = new Node<number>(array[half]);
    if (left.length > 0) {
      root.left = this.constructMinimalTree(left, root.left);
    }
    if (right.length > 0) {
      root.right = this.constructMinimalTree(right, root.right);
    }

    return root;
  }
}

export default MinimalTree;
