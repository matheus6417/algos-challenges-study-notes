class TreeNode {
  val: number;

  left: TreeNode | null;

  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function kthSmallest(root: TreeNode | null, k: number): number {
  if (!root) {
    return null;
  }

  const sorted = [];
  const indexToFind = k - 1;

  dfs(root, sorted, indexToFind);

  return sorted[indexToFind];
}

function dfs(root: TreeNode | null, output: number[], targetIndex: number) {
  if (!root) {
    return output;
  }

  if (output.length < targetIndex) {
    dfs(root.left, output, targetIndex);
    output.push(root.val);
    dfs(root.right, output, targetIndex);
  } else {
    return;
  }
}
