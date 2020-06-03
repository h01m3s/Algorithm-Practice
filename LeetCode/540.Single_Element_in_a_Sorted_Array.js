/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function (nums) {
  let start = 0;
  let end = nums.length;

  while (start < end) {
    const mid = Math.floor((end - start) / 2 + start);
    // const pair = mid % 2 === 0 ? mid + 1 : mid - 1;
    const pair = mid ^ 1;

    if (nums[mid] === nums[pair]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return nums[start];
};
