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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const length = queue.length;
    let count = 0;
    const currentLevelValues = [];

    while (count < length) {
      const currentNode = queue.shift();
      currentLevelValues.push(currentNode.val);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      count++;
    }
    result.push(currentLevelValues);
  }

  return result;
}
