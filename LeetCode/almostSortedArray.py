# Given an array of n elements, where each element is at most k away from its target position, devise an algorithm that sorts in O(n log k) time.

from heapq import heappop, heappush, heapify


def kSort(arr, k):

    heap = arr[: k + 1]
    heapify(heap)

    current_index = 0

    for index in range(k + 1, len(arr)):
        arr[current_index] = heappop(heap)
        heappush(heap, arr[index])
        current_index += 1

    while heap:
        arr[current_index] = heappop(heap)
        current_index += 1

    print(arr)


arr = [6, 5, 3, 2, 8, 10, 9]
k = 3
kSort(arr, k)
