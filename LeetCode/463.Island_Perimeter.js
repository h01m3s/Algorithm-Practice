/**
 * https://leetcode.com/problems/island-perimeter/
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  // total
  let total = 0;

  const isAdjLand = (x, y) => {
    if (grid[x] && grid[x][y] === 1) {
      return 1;
    }

    return 0;
  };

  // iterate each row
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];

    // iterate each col
    for (let j = 0; j < row.length; j++) {
      let connected = 0;

      // check if current position is land
      if (row[j] === 1) {
        // check up
        connected += isAdjLand(i - 1, j);
        // check down
        connected += isAdjLand(i + 1, j);
        // check left
        connected += isAdjLand(i, j - 1);
        // check right
        connected += isAdjLand(i, j + 1);

        // sum up total += 4 - connected
        total += 4 - connected;
      }
    }
  }

  // return total
  return total;
};
