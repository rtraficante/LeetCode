/* eslint-disable no-unused-vars */
// Definition for singly-linked list.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  const dummyNode = new ListNode(0);
  let current = dummyNode;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry > 0) {
    let sum = carry;
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum > 9) {
      sum = sum % 10;
      carry = 1;
    } else {
      carry = 0;
    }

    current.next = new ListNode(sum);
    current = current.next;
  }
  return dummyNode.next;
};
