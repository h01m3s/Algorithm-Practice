/**
 * https://leetcode.com/problems/trapping-rain-water/
 * @param {number[]} height
 * @return {number}
 */

// Brute Force
// var trap = function (height) {
//   let result = 0;

//   // iterate through height 1 -> height.length - 2
//   for (let i = 1; i < height.length - 1; i++) {
//     const currentHeight = height[i];
//     let maxLeft = (maxRight = currentHeight);

//     // find max height on the left side
//     for (let j = i - 1; j >= 0; j--) {
//       maxLeft = Math.max(maxLeft, height[j]);
//     }
//     // find max height on the right side
//     for (let k = i + 1; k < height.length; k++) {
//       maxRight = Math.max(maxRight, height[k]);
//     }

//     // result += min(maxLeft, maxRight) - currentHeight
//     result += Math.min(maxLeft, maxRight) - currentHeight;
//   }
//   // return result

//   return result;
// };

// Dynamic Programming
var trap = function (height) {
  let result = 0;
  const maxLeft = [height[0]];
  // const maxRight = [height[height.length - 1]];
  const maxRight = new Array(height.length).fill(height[height.length - 1]);

  for (let i = 1; i < height.length; i++) {
    maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
  }

  for (let j = height.length - 2; j >= 0; j--) {
    maxRight[j] = Math.max(maxRight[j + 1], height[j]);
  }

  for (let k = 0; k < height.length; k++) {
    result += Math.min(maxLeft[k], maxRight[k]) - height[k];
  }

  return result;
};
