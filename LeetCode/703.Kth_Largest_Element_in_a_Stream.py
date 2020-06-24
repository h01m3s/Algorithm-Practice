# https://leetcode.com/problems/kth-largest-element-in-a-stream/

from heapq import heapify, heappush, heappop, heapreplace


class KthLargest:
    def __init__(self, k, nums):
        """
        :type k: int
        :type nums: List[int]
        """
        heapify(nums)
        self.heap = nums
        self.k = k

        while len(self.heap) > k:
            heappop(self.heap)

    def add(self, val):
        """
        :type val: int
        :rtype: int
        """
        if len(self.heap) < self.k:
            heappush(self.heap, val)
        elif val > self.heap[0]:
            heapreplace(self.heap, val)
        return self.heap[0]


# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)
