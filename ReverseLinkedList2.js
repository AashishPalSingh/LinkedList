/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {

   // First move the current pointer to the node from
        // where we have to reverse the linked list
        let curr = head;
        let prev = null;
        // prev points to the node before mth node
        let i;
        for (i = 1; i < m; i++) {
            prev = curr;
            curr = curr.next;
        }
        // This pointer stores the pointer to the head of
        // the reversed linkedlist
        let rtail = curr;
        // This pointer stores the pointer to the tail of
        // the reversed linkedlist
        let rhead = null;
        // Now reverse the linked list from m to n nodes
        while (i <= n) {
            let next = curr.next;
            curr.next = rhead;
            rhead = curr;
            curr = next;
            i++;
        }
        // if prev is not null it means that some of the
        // nodes exits before m ( or if m!=1)
        if (prev != null)
            prev.next = rhead;
        else
            head = rhead;
        // at this point curr will point to the next of nth
        // node where we will connect the tail of the
        // reversed linked list
        rtail.next = curr;
        return head;
};
var reverseList = function(head,old){
    //console.log("head",head)
    //console.log("old",old)
    if(head==null){

        return old;
    }
    let temp =head.next;
    head.next =old
    return reverseList(temp,head)
}