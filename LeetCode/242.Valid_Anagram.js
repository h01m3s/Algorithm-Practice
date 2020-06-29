/**
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;

//   return s.split('').sort().join('') === t.split('').sort().join('');
// };

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const dict = {};

  for (const char of s) {
    dict[char] = dict.hasOwnProperty(char) ? dict[char] + 1 : 1;
  }

  for (const char of t) {
    if (!dict.hasOwnProperty(char)) return false;
    dict[char] = dict[char] - 1;
    if (dict[char] < 0) return false;
  }

  return true;
};
