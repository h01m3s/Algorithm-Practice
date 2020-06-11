/**
 * https://leetcode.com/problems/valid-perfect-square/
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function (num) {
  let start = 0;
  let end = num + 1;

  while (start < end) {
    const mid = start + Math.floor((end - start) / 2);

    if (mid * mid > num) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  start--;

  return start * start === num;
};
