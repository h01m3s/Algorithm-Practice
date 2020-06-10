/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (numbers[start] + numbers[end] !== target && start < end) {
    if (numbers[start] + numbers[end] > target) {
      end--;
    } else {
      start++;
    }
  }

  return [++start, ++end];
};
