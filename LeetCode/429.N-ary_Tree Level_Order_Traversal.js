/**
 * https://leetcode.com/problems/n-ary-tree-level-order-traversal/
 * @param {Node} root
 * @return {number[][]}
 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

const levelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const result = [];

  while (queue.length) {
    let size = queue.length;
    const level = [];
    while (size--) {
      const node = queue.shift();
      if (!node) break;
      level.push(node.val);
      node.children.forEach((child) => {
        queue.push(child);
      });
    }
    result.push(level);
  }

  return result;
};
