/**
 * https://leetcode.com/problems/letter-case-permutation/
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
  const result = [];

  const recur = (text = '', i = 0) => {
    if (text.length === S.length) {
      result.push(text);
      return;
    }

    if (S[i].match(/[a-z]/i)) {
      recur(text + S[i].toUpperCase(), i + 1);
      recur(text + S[i].toLowerCase(), i + 1);
    } else {
      recur(text + S[i], i + 1);
    }
  };

  recur();

  return result;
};

console.log(letterCasePermutation('hey'));
