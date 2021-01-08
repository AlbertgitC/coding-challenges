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
    let curNote = head;
    let checkedNote = null;
    let newHead = null;
    let duplicated = false;
    while (curNote) {
        let nextVal = curNote.next ? curNote.next.val : null;
        if (curNote.val !== nextVal && !duplicated) {
            if (!newHead) newHead = curNote;
            checkedNote = curNote;
            curNote = curNote.next;
        } else if (curNote.val !== nextVal && duplicated) {
            duplicated = false;
            if (checkedNote) {
                checkedNote.next = curNote.next;
            };
            curNote = curNote.next;
        } else {
            duplicated = true;
            curNote = curNote.next;
        };
    };
    return newHead;
};