/**
 * https://leetcode.com/problems/arranging-coins/
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let total = n;
  for (let i = 1; i <= n; i++) {
    total = total - i;
    if (total <= 0) return i - 1;
  }
};
