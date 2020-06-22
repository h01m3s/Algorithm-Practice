/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  if (strs.length <= 0) return '';

  strs = strs.sort();

  let result = '';
  let firstStr = strs[0];
  let lastStr = strs[strs.length - 1];

  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] === lastStr[i]) {
      result += firstStr[i];
    } else {
      break;
    }
  }

  return result;
};
