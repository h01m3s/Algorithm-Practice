# https://leetcode.com/problems/two-sum/description/

class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        if len(nums) <= 1:
            return False
        map = {}
        for index in range(len(nums)):
            if nums[index] in map:
                return [map[nums[index]], index]
            else:
                map[target - nums[index]] = index
