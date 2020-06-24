// Given an array of n elements, where each element is at most k away from its target position, devise an algorithm that sorts in O(n log k) time.

class Heap {
  constructor() {
    this._heap = [];
  }

  _compare(i, j) {
    return this._heap[i] < this._heap[j];
  }

  getRoot() {
    return this._heap[0];
  }

  insert(value) {
    // push value in the end of array
    this._heap.push(value);

    let currentIndex = this._heap.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    // Keep swapping with parent new value with parent if less
    while (currentIndex > 0 && this._compare(currentIndex, parentIndex)) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  removeRoot() {
    // swap root with last element first
    this.swap(0, this._heap.length - 1);

    // pop last element (original root)
    const originalRoot = this._heap.pop();

    // Fix order by moving root with child
    let currentIndex = 0;
    let childIndex = this.getLesserChildIndex(currentIndex);

    while (childIndex && this._compare(childIndex, currentIndex)) {
      this.swap(childIndex, currentIndex);
    }

    return originalRoot;
  }

  getLesserChildIndex(parentIndex) {
    const childIndices = [parentIndex * 2 + 1, parentIndex * 2 + 2];

    if (this._compare(childIndices[0], childIndices[1])) {
      return childIndices[0];
    } else {
      return childIndices[1];
    }
  }

  swap = function (fromIndex, toIndex) {
    [this._heap[fromIndex], this._heap[toIndex]] = [
      this._heap[toIndex],
      this._heap[fromIndex]
    ];
  };
}

const kSort = (arr, k) => {
  const heap = new Heap();
  let currentIndex = 0;

  // Build heap with k + 1 elements
  for (let i = 0; i <= k + 1; i++) {
    heap.insert(arr[i]);
  }

  for (let i = k + 1; i < arr.length; i++) {
    arr[currentIndex] = heap.removeRoot();
    heap.insert(arr[i]);
    currentIndex++;
  }

  let remain = heap.removeRoot();

  while (remain) {
    arr[currentIndex] = remain;
    currentIndex++;
    remain = heap.removeRoot();
  }

  console.log(arr);
};

const arr = [6, 5, 3, 2, 8, 10, 9];
const k = 3;
kSort(arr, k);
