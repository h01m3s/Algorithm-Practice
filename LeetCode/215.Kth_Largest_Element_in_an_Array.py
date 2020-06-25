# https://leetcode.com/problems/kth-largest-element-in-an-array/

from heapq import heapify, heapreplace


class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        h = nums[:k]
        heapify(h)

        for i in range(k, len(nums)):
            if nums[i] > h[0]:
                heapreplace(h, nums[i])

        return h[-k]
