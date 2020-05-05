/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  if (nums.length <= 1) return null;

  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!obj.hasOwnProperty(num)) {
      obj[target - num] = i;
    } else {
      return [obj[num], i];
    }
  }

  return null;
};
