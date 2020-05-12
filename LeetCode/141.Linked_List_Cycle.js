/**
 * https://leetcode.com/problems/linked-list-cycle/
 * @param {ListNode} head
 * @return {boolean}
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const hasCycle = function (head) {
  if (!head || !head.next) return false;
  let current = head;
  let next = head.next;

  while (current && next) {
    if (current.val === next.val) return true;
    if (!next.next) return false;
    else [current, next] = [current.next, next.next.next];
  }

  return false;
};
