/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function (x) {
//   const k = x < 0 ? -1 : 1;
//   const n = Number(String(Math.abs(x)).split('').reverse().join(''));
//   return n > Math.pow(2, 31) ? 0 : n * k;
// };

var reverse = function (x) {
  let ans = 0;
  while (x !== 0) {
    ans = ans * 10 + (x % 10);
    x = Math.trunc(x / 10);
  }
  return Math.abs(ans) > Math.pow(2, 31) ? 0 : ans;
};
