/**
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];

  (function recur(root) {
    if (!root) return;

    if (root.left) {
      recur(root.left);
    }

    result.push(root.val);

    if (root.right) {
      recur(root.right);
    }
  })(root);

  return result;
};
