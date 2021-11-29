// 剑指offer2 027


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function(head) {
    let stack = []
    while(head){
        stack.push(head.val)
        head = head.next
    }
    for(let i =0;i < stack.length;i++){
        if(stack[i] != stack[stack.length-1-i]){
            return false
        }
    }
    return true
};