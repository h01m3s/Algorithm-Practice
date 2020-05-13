/**
 * https://leetcode.com/problems/move-zeroes/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const moveZeroes = function (nums) {
  let pos = 0;

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (current !== 0) {
      nums[pos] = current;
      pos++;
    }
  }

  for (let j = pos; j < nums.length; j++) {
    nums[j] = 0;
  }
};

const nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));
