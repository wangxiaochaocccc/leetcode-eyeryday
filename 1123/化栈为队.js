/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack1 = []
    this.stack2 = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while(this.stack1.length>1){
        this.stack2.push(this.stack1.pop())
    }
    let res = this.stack1.pop()
    while(this.stack2.length){
        this.stack1.push(this.stack2.pop())
    }
    return res
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    while(this.stack1.length){
        this.stack2.push(this.stack1.pop())
    }
    let res = this.stack2[this.stack2.length-1]
    while(this.stack2.length){
        this.stack1.push(this.stack2.pop())
    }
    return res
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.stack1.length&&!this.stack2.length
};