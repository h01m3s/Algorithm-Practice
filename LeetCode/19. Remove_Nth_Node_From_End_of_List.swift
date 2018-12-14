/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.next = nil
 *     }
 * }
 */

 // Time Complexity: O(n)
 // Space Complexity: O(1)
class Solution {
    func removeNthFromEnd(_ head: ListNode?, _ n: Int) -> ListNode? {
        
        var dummy: ListNode? = ListNode(0)
        dummy?.next = head
        
        var first = dummy
        var second = dummy

        for i in 0...n {
            first = first?.next
        }
        
        while first != nil {
            first = first?.next
            second = second?.next
        }
        
        second?.next = second?.next?.next
        
        return dummy?.next
        
    }
}