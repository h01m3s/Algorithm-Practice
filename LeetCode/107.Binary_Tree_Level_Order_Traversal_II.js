/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) return [];

  const queue = [root];
  const result = [];

  while (queue.length) {
    let size = queue.length;
    const localArr = [];
    while (size) {
      const node = queue.shift();
      localArr.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      size--;
    }
    result.unshift(localArr);
  }

  return result;
};
