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
// Space Complexity: O(1)
// var longestPalindrome = function (s) {
//   const len = s.length;
//   if (len < 2) return s;

//   let max = 1;
//   let start = 0;

//   for (let i = 0; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (j - i + 1 > max && isSubPalindrome(s, i, j)) {
//         max = j - i + 1;
//         start = i;
//       }
//     }
//   }

//   return s.slice(start, start + max);
// };

// Expand Around Center
// Time Complexity: O(n^2)
// Space Complexity: O(1)
var longestPalindrome = function (s) {
  const len = s.length;
  if (len < 2) return s;

  const extend = (l, r) => {
    while (l >= 0 && r < len && s[l] === s[r]) {
      l--;
      r++;
    }

    if (r - l - 1 > max) {
      start = l + 1;
      max = r - l - 1;
    }
  };

  let max = 1;
  let start = 0;

  for (let i = 0; i < len - 1; i++) {
    extend(i, i);
    extend(i, i + 1);
  }

  return s.slice(start, start + max);
};
