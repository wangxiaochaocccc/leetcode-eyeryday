// 143



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let stack = []
    let p;
    while(head) {
        p = head.next
        head.next = null
        stack.push(head)
        head = p
    }
    let [l,r] = [0,stack.length-1]
    while(l<r){
        stack[l].next = stack[r]
        if(l+1 !== r) {
            stack[r].next = stack[l+1]
        }
        l++
        r--
    }
    return stack[0]
};