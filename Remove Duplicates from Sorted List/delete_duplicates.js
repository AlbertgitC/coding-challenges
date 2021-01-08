/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function deleteDuplicates(head) {
    let curVal = head.val;
    let curNote = head;
    let checkedNote = null;
    let newHead = null;
    let duplicated = false;
    while (curNote) {
        if (curVal !== curNote.next.val && !duplicated) {
            if (!newHead) newHead = curNote;
            checkedNote = curNote;
            curVal = curNote.next.val;
            curNote = curNote.next;
        } else if (curVal !== curNote.next.val && duplicated) {
            duplicated = false;
            if (checkedNote) {
                checkedNote.next = curNote.next;
            };
            curVal = curNote.next.val;
            curNote = curNote.next;
        } else {
            duplicated = true;
            curNote = curNote.next;
        };
    };
    return newHead;
};