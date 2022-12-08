/**
https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/625/
Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 
A valid BST is defined as follows:
The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/

export interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export function isValidBST(root: TreeNode | null): boolean {
  const isValid = (
    node: TreeNode | null,
    min: number,
    max: number
  ): boolean => {
    if (node === null) {
      return true;
    }

    if (node.val <= min || node.val >= max) {
      return false;
    }

    return (
      isValid(node.left, min, node.val) && isValid(node.right, node.val, max)
    );
  };

  return isValid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}
