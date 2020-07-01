/**
 * https://leetcode.com/problems/letter-case-permutation/
 * @param {string} S
 * @return {string[]}
 */

// var letterCasePermutation = function (S) {
//   const result = [];

//   const recur = (text = '', i = 0) => {
//     if (text.length === S.length) {
//       result.push(text);
//       return;
//     }

//     if (S[i].match(/[a-zA-Z]/i)) {
//       recur(text + S[i].toUpperCase(), i + 1);
//       recur(text + S[i].toLowerCase(), i + 1);
//     } else {
//       recur(text + S[i], i + 1);
//     }
//   };

//   recur();

//   return result;
// };

// iterative
var letterCasePermutation = function (S) {
  let result = [''];

  for (let current of S) {
    if (current.match(/[a-zA-Z]/i)) {
      const arr = [];
      for (let s of result) {
        arr.push(s + current.toUpperCase());
        arr.push(s + current.toLowerCase());
      }
      result = arr;
    } else {
      for (let j = 0; j < result.length; j++) {
        result[j] = result[j] + current;
      }
    }
  }

  return result;
};

console.log(letterCasePermutation('hey'));
