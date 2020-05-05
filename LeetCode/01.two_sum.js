/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num in map) {
      return [map[num], i];
    } else {
      map[target - num] = i;
    }
  }

  return [];
};
