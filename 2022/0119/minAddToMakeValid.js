// 921

/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let stack = []

    for(let item of s) {
        if(stack.length) {
            if((item === ')' && stack[stack.length-1]==='(')){
                stack.pop()
            }else {
                stack.push(item)
            }
        }else {
            stack.push(item)
        }
    }
    return stack.length
};