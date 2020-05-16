/**
 * https://leetcode.com/problems/fibonacci-number/
 * @param {number} N
 * @return {number}
 */

const fib = function (N) {
  if (N === 0) return 0;
  let first = 0;
  let second = 1;

  while (--N) {
    first = (second = first + second) - first;
  }

  return second;
};
