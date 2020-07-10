/**
 * https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  const result = [];

  nums = nums.sort((a, b) => a - b);

  let previous = undefined;

  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    if (a === previous) {
      continue;
    } else {
      previous = a;
    }
    let left = i + 1;
    let right = nums.length - 1;
    let b = nums[left];
    let c = nums[right];

    while (left < right) {
      const sum = a + b + c;

      if (sum === 0) {
        result.push([a, b, c]);
        left++;
        while (nums[left] === b) {
          left++;
        }
        b = nums[left];
        right--;
        while (nums[right] === c) {
          right--;
        }
        c = nums[right];
      } else if (sum > 0) {
        right--;
        c = nums[right];
      } else {
        left++;
        b = nums[left];
      }
    }
  }

  return result;
};
