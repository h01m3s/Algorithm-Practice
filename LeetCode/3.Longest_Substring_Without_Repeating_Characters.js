/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */

// Brute force
// Time complexity: O(n^2)
// Space complexity: O(n)
// var lengthOfLongestSubstring = function (s) {
//   let ans = 0;

//   for (let i = 0; i < s.length; i++) {
//     const seen = new Set();
//     let j = i;
//     let currentChar = s[j];

//     while (j < s.length && !seen.has(currentChar)) {
//       seen.add(currentChar);
//       j++;
//       currentChar = s[j];
//     }
//     ans = Math.max(ans, j - i);
//   }

//   return ans;
// };

// Hashtable / Sliding Window
// Time complexity: O(n)
// Space complexity: O(n)
var lengthOfLongestSubstring = function (s) {
  let ans = 0;

  const idx = {};
  let i = 0;
  let j = 0;
  for (; j < s.length; ++j) {
    const currentChar = s[j];
    const start = idx.hasOwnProperty(currentChar) ? idx[currentChar] : -1;
    i = Math.max(i, start + 1);
    ans = Math.max(ans, j - i + 1);
    idx[currentChar] = j;
  }

  return ans;
};

// var lengthOfLongestSubstring = function (s) {
//   let start = 0,
//     end = 0,
//     max = 0;
//   const length = s.length;
//   const set = new Set();

//   while (end < length) {
//     if (!set.has(s[end])) {
//       set.add(s[end]);
//       max = Math.max(max, end - start + 1);
//     } else {
//       while (set.has(s[end])) {
//         set.delete(s[start]);
//         start++;
//       }
//       set.add(s[end]);
//     }
//     end++;
//   }

//   return max;
// };
