// how efficiently can i count number of nodes above last level
// how efficiently can i count number of nodes in the last level

// achieve optimal time better than O(n)
// should be o O(logn)

// top level
// 2^(n-1) - 1

// bottom level max
// 2^h

export class TreeNode {
  val: number;

  left: TreeNode | null;

  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function countNodes(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const height = getTreeHeight(root);

  if (height === 0) {
    return 1;
  }

  const upperCount = Math.pow(2, height) - 1;

  let left = 0;
  let right = upperCount;

  while (left < right) {
    const indexToFind = Math.ceil((left + right) / 2);

    if (nodeExists(indexToFind, height, root)) {
      left = indexToFind;
    } else {
      right = indexToFind - 1;
    }
  }

  const totalCount = upperCount + left + 1;

  return totalCount;
}

function getTreeHeight(root: TreeNode | null) {
  let node = root;
  let height = 0;

  // while (node) {
  //   node = node.left;
  //   height++;
  // }

  while (node.left !== null) {
    node = node.left;
    height++;
  }
  return height;
}

function nodeExists(
  indexToFind: number,
  height: number,
  node: TreeNode | null
): boolean {
  let left = 0;
  let right = Math.pow(2, height) - 1;
  let count = 0;

  while (count < height) {
    const midOfNode = Math.ceil((left + right) / 2);

    if (indexToFind >= midOfNode) {
      node = node.right;
      left = midOfNode;
    } else {
      node = node.left;
      right = midOfNode - 1;
    }
    count++;
  }

  return node !== null;
}
