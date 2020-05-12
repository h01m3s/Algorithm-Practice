/**
 * https://leetcode.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */

// const climbStairs = function (n) {
//   const memo = {};

//   const recur = (n) => {
//     if (memo[n]) return memo[n];
//     if (n <= 0) return 0;
//     if (n === 1 || n === 2) return n;

//     memo[n] = recur(n - 1) + recur(n - 2);
//     return memo[n];
//   };

//   return recur(n);
// };

const climbStairs = function (n) {
  let a = (b = 1);

  while (n--) a = (b += a) - a;

  return a;
};
