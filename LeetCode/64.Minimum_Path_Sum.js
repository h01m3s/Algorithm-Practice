/**
 * @param {number[][]} grid
 * @return {number}
 */

// Traverse
// Time Limit Exceeded
// var minPathSum = function (grid) {
//   let best = Infinity;
//   const row = grid.length - 1;
//   const col = grid[row].length - 1;

//   (function traverse(x, y, sum) {
//     if (x === row && y === col) {
//       best = Math.min(best, sum + grid[x][y]);
//       return;
//     }

//     if (x < row) {
//       traverse(x + 1, y, sum + grid[x][y]);
//     }

//     if (y < col) {
//       traverse(x, y + 1, sum + grid[x][y]);
//     }
//   })(0, 0, 0);

//   return best;
// };

// Divide and Comquer
// Time Limit Exceeded
// var minPathSum = function (grid) {
//   const row = grid.length - 1;
//   const col = grid[row].length - 1;
//   return (function divideConquer(x, y) {
//     if (x === row && y === col) {
//       return grid[x][y];
//     }

//     if (x === row) {
//       return grid[x][y] + divideConquer(x, y + 1);
//     }

//     if (y === col) {
//       return grid[x][y] + divideConquer(x + 1, y);
//     }

//     return (
//       grid[x][y] + Math.min(divideConquer(x + 1, y), divideConquer(x, y + 1))
//     );
//   })(0, 0);
// };

// Dynamic Programming
// Divide and Comquer + Memorization
var minPathSum = function (grid) {
  const row = grid.length - 1;
  const col = grid[row].length - 1;
  const dp = Array(grid.length)
    .fill(null)
    .map(() => []);

  return (function divideConquer(x, y) {
    if (x === row && y === col) {
      return grid[x][y];
    }

    if (dp[x][y]) return dp[x][y];

    if (x === row) {
      // Last row, can only move right
      dp[x][y] = grid[x][y] + divideConquer(x, y + 1);
    } else if (y === col) {
      // Last col, can only move down
      dp[x][y] = grid[x][y] + divideConquer(x + 1, y);
    } else {
      // Can move right or down
      dp[x][y] =
        grid[x][y] + Math.min(divideConquer(x + 1, y), divideConquer(x, y + 1));
    }

    return dp[x][y];
  })(0, 0);
};

// const grid = [
//   [1, 3, 1],
//   [1, 5, 1],
//   [4, 2, 1]
// ];

const grid = [
  [3, 8, 6, 0, 5, 9, 9, 6, 3, 4, 0, 5, 7, 3, 9, 3],
  [0, 9, 2, 5, 5, 4, 9, 1, 4, 6, 9, 5, 6, 7, 3, 2],
  [8, 2, 2, 3, 3, 3, 1, 6, 9, 1, 1, 6, 6, 2, 1, 9],
  [1, 3, 6, 9, 9, 5, 0, 3, 4, 9, 1, 0, 9, 6, 2, 7],
  [8, 6, 2, 2, 1, 3, 0, 0, 7, 2, 7, 5, 4, 8, 4, 8],
  [4, 1, 9, 5, 8, 9, 9, 2, 0, 2, 5, 1, 8, 7, 0, 9],
  [6, 2, 1, 7, 8, 1, 8, 5, 5, 7, 0, 2, 5, 7, 2, 1],
  [8, 1, 7, 6, 2, 8, 1, 2, 2, 6, 4, 0, 5, 4, 1, 3],
  [9, 2, 1, 7, 6, 1, 4, 3, 8, 6, 5, 5, 3, 9, 7, 3],
  [0, 6, 0, 2, 4, 3, 7, 6, 1, 3, 8, 6, 9, 0, 0, 8],
  [4, 3, 7, 2, 4, 3, 6, 4, 0, 3, 9, 5, 3, 6, 9, 3],
  [2, 1, 8, 8, 4, 5, 6, 5, 8, 7, 3, 7, 7, 5, 8, 3],
  [0, 7, 6, 6, 1, 2, 0, 3, 5, 0, 8, 0, 8, 7, 4, 3],
  [0, 4, 3, 4, 9, 0, 1, 9, 7, 7, 8, 6, 4, 6, 9, 5],
  [6, 5, 1, 9, 9, 2, 2, 7, 4, 2, 7, 2, 2, 3, 7, 2],
  [7, 1, 9, 6, 1, 2, 7, 0, 9, 6, 6, 4, 4, 5, 1, 0],
  [3, 4, 9, 2, 8, 3, 1, 2, 6, 9, 7, 0, 2, 4, 2, 0],
  [5, 1, 8, 8, 4, 6, 8, 5, 2, 4, 1, 6, 2, 2, 9, 7]
];

console.log(minPathSum(grid));
