/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  const operations = {
    '+': (left, right) => {
      stack.push(left + right);
    },
    '-': (left, right) => {
      stack.push(left - right);
    },
    '*': (left, right) => {
      stack.push(left * right);
    },
    '/': (left, right) => {
      stack.push(Math.trunc(left / right));
    }
  };

  for (let t of tokens) {
    if (t in operations) {
      const right = stack.pop();
      const left = stack.pop();
      operations[t](left, right);
    } else {
      stack.push(Number(t));
    }
  }

  return stack[0];
};
