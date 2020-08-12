/**
 * https://leetcode.com/problems/decode-string/
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];

  for (const char of s) {
    if (char !== ']') {
      stack.push(char);
      continue;
    }
    let localStr = '';
    let currentStr = stack.pop();

    while (currentStr !== '[') {
      localStr = currentStr + localStr;
      currentStr = stack.pop();
    }

    let repeatTimes = '';
    currentStr = stack.pop();

    while (!isNaN(currentStr)) {
      repeatTimes = currentStr + repeatTimes;
      currentStr = stack.pop();
    }

    stack.push(currentStr);
    stack.push(localStr.repeat(repeatTimes));
  }

  return stack.join('');
};
