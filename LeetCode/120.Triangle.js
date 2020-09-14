/**
 * https://leetcode.com/problems/triangle/
 * @param {number[][]} triangle
 * @return {number}
 */

// Traverse
// Time Complexity: O:(2^n)
// Time Limit Exceeded
// var minimumTotal = function (triangle) {
//   let best = Infinity;

//   (function traverse(x, y, sum) {
//     if (x === triangle.length) {
//       best = Math.min(best, sum);
//       return;
//     }

//     const currentSum = sum + triangle[x][y];

//     traverse(x + 1, y, currentSum);
//     traverse(x + 1, y + 1, currentSum);
//   })(0, 0, 0);

//   return best;
// };

// Divide and Comquer
// Time Complexity: O:(2^n)
// Time Limit Exceeded
var minimumTotal = function (triangle) {
  return (function divideConquer(x, y) {
    if (x === triangle.length) {
      return 0;
    }
    return (
      triangle[x][y] +
      Math.min(divideConquer(x + 1, y), divideConquer(x + 1, y + 1))
    );
  })(0, 0);
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
