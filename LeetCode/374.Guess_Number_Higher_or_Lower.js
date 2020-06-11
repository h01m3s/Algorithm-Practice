/**
 * https://leetcode.com/problems/guess-number-higher-or-lower/
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			                 1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function (n) {
  let start = 1;
  let end = n;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    const res = guess(mid);

    if (res === 0) {
      return mid;
    } else if (res === 1) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};
