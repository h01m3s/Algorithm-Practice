/**
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
  const dict = {};
  const res = [];

  for (let num of nums1) {
    dict[num] = num in dict ? ++dict[num] : 1;
  }

  for (let num of nums2) {
    if (num in dict && dict[num] > 0) {
      res.push(num);
      dict[num] = --dict[num];
    }
  }

  return res;
};
