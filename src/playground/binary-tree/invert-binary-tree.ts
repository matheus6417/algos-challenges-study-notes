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

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }
  invertTreeRecursive(root);
  return root;
}

function invertTreeRecursive(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return;
  }

  const left = invertTreeRecursive(root.left);
  const right = invertTreeRecursive(root.right);

  root.right = left;
  root.left = right;

  return root;
}
