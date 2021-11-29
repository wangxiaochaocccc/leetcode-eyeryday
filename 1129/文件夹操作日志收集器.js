// 1598
// 这道题错的原因是 res判断应该是<=

/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let res = 0;
    for(let i of logs) {
        if(i == '../') {
            res = res-- <= 0 ? 0 : res--
        }else if (i == './') {
            res = res
        }else {
            res++
        }
    }
    return res
};