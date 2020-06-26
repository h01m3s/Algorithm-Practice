/**
 * https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// const sumRootToLeaf = function (root) {
//   const arr = [];

//   const recur = (root, nums) => {
//     if (!root) return;
//     if (!root.left && !root.right) {
//       arr.push(nums + root.val);
//       return;
//     }

//     recur(root.left, nums + root.val);
//     recur(root.right, nums + root.val);
//   };

//   recur(root, '');

//   return arr.reduce((pre, cur) => {
//     return (pre += parseInt(cur, 2));
//   }, 0);
// };

const sumRootToLeaf = function (root, val = 0) {
  if (!root) return 0;

  val = val * 2 + root.val;

  if (!root.left && !root.right) return val;

  return sumRootToLeaf(root.left, val) + sumRootToLeaf(root.right, val);
};
