/**
 * https://leetcode.com/problems/reverse-string/
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// const reverseString = function (s) {
//   const len = s.length - 1;
//   const mid = Math.ceil(len / 2);
//   for (let i = 0; i < mid; i++) {
//     [s[i], s[len - i]] = [s[len - i], s[i]];
//   }
// };

const reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
};
