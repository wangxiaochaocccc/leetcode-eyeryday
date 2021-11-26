// 1047

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = []
    for(let item of s){
        if(item == stack[stack.length-1] && stack != []){
            stack.pop()
        }else {
            stack.push(item)
        }
    }
    return stack.join('')
};