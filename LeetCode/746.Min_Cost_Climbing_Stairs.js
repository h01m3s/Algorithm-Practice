/**
 * @param {number[]} cost
 * @return {number}
 */

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
// const minCostClimbingStairs = function (cost) {
//   const dp = new Array(cost.length + 1).fill(0);

//   for (let i = 2; i <= cost.length; i++) {
//     dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
//   }

//   return dp[cost.length];
// };

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
const minCostClimbingStairs = function (cost) {
  let first = (second = 0);

  for (let i = 2; i <= cost.length; i++) {
    dp = Math.min(first + cost[i - 1], second + cost[i - 2]);
    second = first;
    first = dp;
  }

  return first;
};

console.log(minCostClimbingStairs([10, 15, 20]));
