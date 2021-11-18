// 第一种方法
var reversePrint = function(head) {
    let stack = []
    while(head != null){
        stack.push(head.val)
        head = head.next
    }
    return stack.reverse()
};

// 第二种
var reversePrint = function(head) {
    let stack = []
    while(head) {
        stack.unshift(head.val)
        head = head.next
    }
    return stack
};