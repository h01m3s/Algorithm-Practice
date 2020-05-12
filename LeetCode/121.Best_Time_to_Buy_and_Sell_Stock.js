/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */

// Brute force
// const maxProfit = function (prices) {
//   let max = 0;

//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i; j < prices.length; j++) {
//       const difference = prices[i] - prices[j];
//       if (difference < 0 && Math.abs(difference) > max) {
//         max = Math.abs(difference);
//       }
//     }
//   }

//   return max;
// };

const maxProfit = function (prices) {
  let minPrice = 99999;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > profit) {
      profit = price - minPrice;
    }
  }

  return profit;
};

console.log(maxProfit([]));
