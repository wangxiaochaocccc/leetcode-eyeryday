
// 1249
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack = []
    let res = s.split('')
    for(let i = 0; i < res.length; i++) {
        if(res[i] === '(') {
            stack.push(i)
        }else if(res[i] === ')') {
            if(stack.length) {
                stack.pop()
            }else {
                res[i] = ''
            }
        }
    }
    for(let i = 0; i < stack.length; i++) {
        res[stack[i]] = ''
    }

    return res.join('')
};