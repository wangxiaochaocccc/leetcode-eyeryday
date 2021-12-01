// 387
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for(let item of s){
        if(s.indexOf(item) === s.lastIndexOf(item)){
            return s.indexOf(item)
        }
    }
    return -1
};