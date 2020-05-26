/**
 * https://leetcode.com/problems/merge-two-binary-trees/
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const mergeTrees = function (t1, t2) {
  if (!t1) return t2;
  if (!t2) return t1;

  const left = mergeTrees(t1.left, t2.left);
  const right = mergeTrees(t1.right, t2.right);

  return new TreeNode(t1.val + t2.val, left, right);
};
