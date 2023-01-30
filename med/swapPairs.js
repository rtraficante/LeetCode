/* eslint-disable no-unused-vars */
// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head) return null;
  if (!head.next) return head;

  const dummyNode = new ListNode(0, head);
  let current = head;
  let prev = dummyNode;

  while (current && current.next) {
    let nextPair = current.next.next;
    let secondNode = current.next;

    secondNode.next = current;
    current.next = nextPair;
    prev.next = secondNode;

    prev = current;
    current = nextPair;
  }
  return dummyNode.next;
};
