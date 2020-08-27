/**
 * @param {string} s
 * @return {string}
 */

// Check if whole string is palindrome
const isPalindrome = (str) => {
  const mid = ~~(str.length / 2);

  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }

  return true;
};

// Check if subStr is palindrome
const isSubPalindrome = (str, l, r) => {
  while (l < r) {
    if (str[l] !== str[r]) return false;
    l++;
    r--;
  }
  return true;
};

// Time Complexity: O(n^3)
// Space Complexity: O(n)
var longestPalindrome = function (s) {
  const len = s.length;
  if (len < 2) return s;

  let max = 1;
  let start = 0;

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (j - i + 1 > max && isSubPalindrome(s, i, j)) {
        max = j - i + 1;
        start = i;
      }
    }
  }

  return s.slice(start, start + max);
};
