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
  if (prices.length <= 1) return 0;
  let minPrice = 99999;
  let max = 0;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    if (price < minPrice && i < prices.length - 1) {
      minPrice = price;
      max = price;
    }
    if (price > max) max = price;
    profit = max - minPrice > profit ? max - minPrice : profit;
  }

  return profit;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
