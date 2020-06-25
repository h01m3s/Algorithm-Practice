# https://leetcode.com/problems/last-stone-weight/

from heapq import heapify, heappush, heappop


class Solution(object):
    def lastStoneWeight(self, stones):
        """
        :type stones: List[int]
        :rtype: int
        """
        h = [-x for x in stones]
        heapify(h)

        while len(h) >= 2:
            heappush(h, heappop(h) - heappop(h))

        return -h[0]

