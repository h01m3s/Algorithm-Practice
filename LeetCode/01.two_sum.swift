// https://leetcode.com/problems/two-sum/description/

class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        if (nums.count <= 1) { return [-1] }

        var dict = [Int: Int]()
        for (index, num) in nums.enumerated() {
            if let returnIndex = dict[num] {
                return [returnIndex, index]
            } else {
                dict[target - num] = index
            }
        }
        return [-1]
    }
}
