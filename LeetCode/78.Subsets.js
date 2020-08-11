/**
 * https://leetcode.com/problems/subsets/
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function (nums) {
  let result = [[]];

  for (let i = 0; i < nums.length; i++) {
    result.forEach((num) => {
      result.push(num.concat(nums[i]));
    });
  }

  return result;
};
