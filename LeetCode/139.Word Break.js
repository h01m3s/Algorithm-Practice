/**
 * https://leetcode.com/problems/word-break/
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

const wordBreak = (s, wordDict) => {
  if (!wordDict) return false;

  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[i]) break;
      const subStr = s.substring(i, j);
      if (dp[j] && wordDict.includes(subStr)) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
};
