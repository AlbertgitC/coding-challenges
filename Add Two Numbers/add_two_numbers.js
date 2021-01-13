/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function addTwoNumbers(l1, l2) {
    let newList;
    let curNode;
    let node1 = l1;
    let node2 = l2;
    let carry = false;
    while (node1.val !== undefined || node2.val !== undefined || carry) {
        if (newList.val === undefined) {
            let sum = node1.val + node2.val;
            if (sum < 10) {
                newList = new ListNode(sum, new ListNode());
            } else {
                newList = new ListNode(sum % 10, new ListNode());
                carry = true;
            };
            node1 = node1.next;
            node2 = node2.next;
            curNode = newList.next;
        };

        if (node1.val !== undefined && node2.val !== undefined) {
            let sum = node1.val + node2.val;
            if (carry) {
                sum + 1;
                carry = false;
            }
            if (sum < 10) {
                curNode.val = sum;
            } else {
                curNode.val = sum % 10;
                carry = true;
            };
            node1 = node1.next;
            node2 = node2.next;
            curNode.next = new ListNode();
            curNode = curNode.next;
        }
    };
};