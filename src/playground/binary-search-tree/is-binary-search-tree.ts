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

function isValidBST(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  return dfsForValidBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function dfsForValidBST(node: TreeNode | null, min: number, max: number) {
  if (node.val <= min || node.val >= max) {
    return false;
  }

  if (node.left) {
    const isLeftValidBST = dfsForValidBST(node.left, min, node.val);
    if (!isLeftValidBST) {
      return false;
    }
  }

  if (node.right) {
    const isRightValidBST = dfsForValidBST(node.right, node.val, max);
    if (!isRightValidBST) {
      return false;
    }
  }

  return true;
}
