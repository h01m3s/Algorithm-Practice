/**
 * https://leetcode.com/problems/sqrtx/
 * @param {number} x
 * @return {number}
 */

const mySqrt = function (x) {
  if (x <= 0) return 0;

  let left = 0;
  let right = x + 1;

  while (left < right) {
    mid = left + Math.floor((right - left) / 2);
    if (mid * mid > x) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left - 1;
};
