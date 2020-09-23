/**
 * https://leetcode.com/problems/longest-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function (nums) {
  const dp = [];

  for (let i = 0; i < nums.length; i++) {
    dp[i] = 1;
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, dp[i]);
  }

  return max;
};

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums));
