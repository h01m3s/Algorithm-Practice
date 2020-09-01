/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const n1 = nums1.length;
  const n2 = nums2.length;

  if (n1 > n2) return findMedianSortedArrays(nums2, nums1);

  const k = Math.floor((n1 + n2 + 1) / 2);

  let l = 0;
  let r = n1;

  while (l < r) {
    const m1 = Math.floor(l + (r - l) / 2);
    const m2 = k - m1;
    if (nums1[m1] < nums2[m2 - 1]) {
      l = m1 + 1;
    } else {
      r = m1;
    }
  }

  const m1 = l;
  const m2 = k - l;

  const c1 = Math.max(
    m1 <= 0 ? -Infinity : nums1[m1 - 1],
    m2 <= 0 ? -Infinity : nums2[m2 - 1]
  );

  if ((n1 + n2) % 2 === 1) {
    return c1;
  }

  const c2 = Math.min(
    m1 >= n1 ? Infinity : nums1[m1],
    m2 >= n2 ? Infinity : nums2[m2]
  );

  return (c1 + c2) / 2;
};

const nums1 = [1, 2];
const nums2 = [4];
console.log(findMedianSortedArrays(nums1, nums2));
