// 剑指offer II 042


var RecentCounter = function() {
    this.quene = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.quene.push(t)
    while(this.quene[0]< t-3000){
        this.quene.shift()
    }
    return this.quene.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */