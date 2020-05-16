/**
 * https://leetcode.com/problems/symmetric-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @return {boolean}
 */

// Use recursion
// const isSymmetric = function (root) {
//   if (!root) return true;

//   const compare = (left, right) => {
//     if (left === null && right === null) return true;
//     if (left === null || right === null) return false;

//     return (
//       left.val === right.val &&
//       compare(left.left, right.right) &&
//       compare(left.right, right.left)
//     );
//   };

//   return compare(root.left, root.right);
// };

// Iteration
const isSymmetric = function (root) {
  if (!root) return true;

  const queue = [root.left, root.right];

  while (queue.length > 0) {
    const left = queue.shift();
    const right = queue.shift();

    if (left === null && right === null) return true;
    if (left === null || right === null) return false;
    if (left.val !== right.val) return false;

    queue.push(left.left);
    queue.push(right.right);
    queue.push(left.right);
    queue.push(right.left);
  }

  return true;
};
