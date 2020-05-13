/**
 * https://leetcode.com/problems/pascals-triangle/
 * @param {number} numRows
 * @return {number[][]}
 */

const generate = function (numRows) {
  if (numRows <= 0) return [];
  const result = [];

  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row[j] = result[i - 1][j - 1] + result[i - 1][j];
      }
    }
    result.push(row);
  }

  return result;
};
