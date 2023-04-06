
//  Definition for singly-linked list.
// public class ListNode {
//     int val;
//     ListNode next;
//     ListNode() {}
//     ListNode(int val) { this.val = val; }
//     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
// }

class Solution {
  public ListNode deleteDuplicates(ListNode head) {
      ListNode prev = null;
      ListNode current = head;
      int currentNum = -101;

      while (current != null) {
          if (currentNum != current.val) {
              currentNum = current.val;
              prev = current;
          } else {
              prev.next = current.next;
          }
          current = current.next;
      }
      return head;
  }
}
