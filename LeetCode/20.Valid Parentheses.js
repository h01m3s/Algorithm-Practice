/**
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */

const isValid = function (s) {
  const pairs = {
    '{': '}',
    '(': ')',
    '[': ']'
  };
  const stack = [];
  for (let char of s) {
    if (stack.length === 0 || char in pairs) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (char !== pairs[top]) return false;
    }
  }

  return stack.length === 0;
};
