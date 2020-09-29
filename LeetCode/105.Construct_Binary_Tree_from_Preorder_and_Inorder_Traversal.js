/**
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var buildTree = function (preorder, inorder) {
  const n = preorder.length;
  const map = {};

  for (let i = 0; i < n; i++) {
    map[inorder[i]] = i;
  }

  const helper = (preL, preR, InL, InR) => {
    if (preL > preR) return null;

    const preorderRoot = preL;
    const inorderRoot = map[preorder[preorderRoot]];

    const root = new TreeNode(preorder[preorderRoot]);

    const leftSubTreeSize = inorderRoot - InL;

    root.left = helper(preL + 1, preL + leftSubTreeSize, InL, inorderRoot - 1);

    root.right = helper(preL + leftSubTreeSize + 1, preR, inorderRoot + 1, InR);

    return root;
  };

  return helper(0, n - 1, 0, n - 1);
};

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

console.log(buildTree(preorder, inorder));
