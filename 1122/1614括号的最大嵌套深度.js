/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let stack = []
    let res = 0
    for(let i of s){
        if(i === '('){
            stack.push(i)
        }else if(i === ')'){
            res = Math.max(res,stack.length)
            stack .pop()
        }
    }
    return res
};