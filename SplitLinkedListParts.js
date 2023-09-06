/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
   const result = new Array(k);
   let length =0
   let p =head;
   while(p!=null){
       length++;
       p=p.next;
   }
   //console.log("length",length)

    for (let i = 0; i < k; i++) {
        if (!head) {
            result[i] = null;
            continue;
        }

        result[i] = head;

        let sublistLength = Math.ceil(length / (k - i));
        length -= sublistLength;
       // console.log("sublistLength",sublistLength)
       // console.log("length",length)
        for (let j = 1; j < sublistLength; j++) {
            head = head.next;
        }
        //console.log("result",result)
        const tmp = head.next;
        head.next = null;
        head = tmp;
    }

    return result;
};
