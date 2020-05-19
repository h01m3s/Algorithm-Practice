/**
 * https://leetcode.com/problems/path-sum/
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const hasPathSum = function (root, sum) {
  if (!root) return false;

  if (!root.left && !root.right) return root.val === sum;

  sum -= root.val;
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
};
