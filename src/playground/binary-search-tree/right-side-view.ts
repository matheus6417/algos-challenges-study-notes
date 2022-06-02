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

function rightSideViewBFS(root: TreeNode | null): number[] {
  const output = [];
  const queue = [root];

  while (queue.length > 0) {
    const length = queue.length;
    let count = 0;

    while (count < length) {
      const currentNode = queue.shift();

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (count === 0) {
        output.push(currentNode.val);
      }
      count++;
    }
  }

  return output;
}

function rightSideViewDFS(root: TreeNode | null): number[] {
  const height = 0;

  const outputArray = [];

  rightSideViewDFSRecursive(root, height, outputArray);

  return outputArray;
}

function rightSideViewDFSRecursive(
  root: TreeNode | null,
  height: number,
  output: number[]
): number[] {
  if (!root) {
    return output;
  }

  if (height > output.length) {
    output.push(root.val);
  }
  if (root.right) {
    rightSideViewDFSRecursive(root.right, height + 1, output);
  }

  if (root.left) {
    rightSideViewDFSRecursive(root.left, height + 1, output);
  }
}
