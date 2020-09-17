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
// var minimumTotal = function (triangle) {
//   return (function divideConquer(x, y) {
//     if (x === triangle.length) {
//       return 0;
//     }
//     return (
//       triangle[x][y] +
//       Math.min(divideConquer(x + 1, y), divideConquer(x + 1, y + 1))
//     );
//   })(0, 0);
// };

// Dynamic Programming
// Divide and Comquer + Memorization
// Time Complexity: O:(n^2)
// var minimumTotal = function (triangle) {
//   const dp = Array(triangle.length)
//     .fill(null)
//     .map(() => []);

//   return (function divideConquer(x, y) {
//     if (x === triangle.length) {
//       return 0;
//     }

//     if (dp[x][y]) {
//       return dp[x][y];
//     }

//     dp[x][y] =
//       triangle[x][y] +
//       Math.min(divideConquer(x + 1, y), divideConquer(x + 1, y + 1));

//     return dp[x][y];
//   })(0, 0);
// };

// Dynamic Programming
// Bottom Up
// Time Complexity: O:(n^2)
// var minimumTotal = function (triangle) {
//   const n = triangle.length;
//   const dp = Array(n)
//     .fill(null)
//     .map(() => []);

//   // init dp with values of last row
//   for (let i = 0; i < n; i++) {
//     dp[n - 1][i] = triangle[n - 1][i];
//   }

//   // bottom up
//   for (let i = n - 2; i >= 0; i--) {
//     for (let j = 0; j <= i; j++) {
//       dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
//     }
//   }

//   return dp[0][0];
// };

// Dynamic Programming
// Top Down
// Time Complexity: O:(n^2)
var minimumTotal = function (triangle) {
  const n = triangle.length;
  const dp = Array(n)
    .fill(null)
    .map(() => []);

  dp[0][0] = triangle[0][0];

  // init dp triangle left and right
  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0] + triangle[i][0];
    dp[i][i] = dp[i - 1][i - 1] + triangle[i][i];
  }

  // top down
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < i; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j];
    }
  }

  return Math.min(...dp[n - 1]);
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
