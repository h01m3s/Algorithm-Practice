/**
 * https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  const result = [];

  nums.sort((a, b) => a - b);

  // dont have to check last tow nums
  for (let i = 0; i < nums.length - 2; i++) {
    // if nums[i] > 0, no solution
    if (nums[i] > 0) break;

    // resolve duplicate nums[i]
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // loop until last same number
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        // sum < 0
        left++;
      }
    }
  }

  return result;
};
