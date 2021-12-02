// 剑指offer II 041




/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.que = []
    this.size = size
    this.sum = 0
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.que.push(val)
    this.sum+=val
    if(this.que.length>this.size){
        this.sum-=this.que.shift()
    }
    return this.sum/this.que.length
};  

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */