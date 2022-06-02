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

export function buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  if (!preorder || !inorder) return null;

  const map = new Map();

  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  return buildTreeHelper(preorder, 0, inorder.length - 1, map);
}

function buildTreeHelper(preorder, startPtr, endPtr, map) {
  if (startPtr > endPtr) return null;

  const value = preorder.shift();
  const index = map.get(value);
  const root = new TreeNode(value);

  root.left = buildTreeHelper(preorder, startPtr, index - 1, map);
  root.right = buildTreeHelper(preorder, index + 1, endPtr, map);

  return root;
}

const tree = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);

console.log(tree);
