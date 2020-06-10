/**
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/
 * @param {number[]} A
 * @return {number}
 */

// Binary Search
// const peakIndexInMountainArray = function (A) {
//   let start = 0;
//   let end = A.length - 1;

//   while (start <= end) {
//     const mid = start + Math.floor((end - start) / 2);

//     if (A[mid] > A[mid - 1] && A[mid] > A[mid + 1]) {
//       return mid;
//     } else if (A[mid] > A[mid - 1]) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }

//   return start;
// };

// Loop
const peakIndexInMountainArray = function (A) {
  for (let i = 0; i < A.length; i++) {
    const current = A[i];
    const pre = A[i - 1] || 0;
    const next = A[i + 1] || 0;

    if (current > pre && current > next) return i;
  }

  return -1;
};

const arr = [0, 2, 1, 0];
console.log(peakIndexInMountainArray(arr));
