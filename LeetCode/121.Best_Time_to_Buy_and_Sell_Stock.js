/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */

// Brute force
const maxProfit = function (prices) {
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      const profit = prices[i] - prices[j];
      if (profit < 0 && Math.abs(profit) > max) {
        max = Math.abs(profit);
      }
    }
  }

  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
