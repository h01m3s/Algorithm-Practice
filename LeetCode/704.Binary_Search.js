/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((end - start) / 2 + start);
    if (target === nums[mid]) return mid;
    if (target < nums[mid]) end = mid - 1;
    if (target > nums[mid]) start = mid + 1;
  }

  return -1;
};
