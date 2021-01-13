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
    while (node1 || node2 || carry) {
        if (newList.val === undefined) {
            let sum = node1.val + node2.val;
            if (sum < 10) {
                newList = new ListNode(sum);
            } else {
                newList = new ListNode(sum % 10);
                carry = true;
            };
            node1 = node1.next;
            node2 = node2.next;
            curNode = newList;
        };

        if (node1 && node2) {
            let sum = node1.val + node2.val;
            if (carry) {
                sum + 1;
                carry = false;
            };
            if (sum >= 10) {
                sum = sum % 10;
                carry = true;
            };
            node1 = node1.next;
            node2 = node2.next;
            curNode = addNode(curNode, sum);
        } else if (node1 || node2) {
            let sum;
            if (node1.val !== undefined) {
                sum = node1.val;
            } else {
                sum = node2.val;
            };
            if (carry) {
                sum + 1;
                carry = false;
            };
            node1 = node1 ? node1.next : null;
            node2 = node2 ? node2.next : null;
            curNode = addNode(curNode, sum);
        } else if (carry) {
            curNode = addNode(curNode, 1);
            carry = false;
        };
    };

    return newList;
};

function addNode(node, num) {
    node.next = new ListNode(num, null);
    return node.next;
};