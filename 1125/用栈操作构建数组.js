/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let stack =[]
    let stack2 = []
    for(let i = 1; i<= n; i++){
        if(target.includes(i)&&target.length!=stack2.length){
            stack.push('Push')
            stack2.push(i)
        }else if(target.length!=stack2.length){
            stack.push('Push')
            stack2.push(i)
            stack.push('Pop')
            stack2.pop()
        }
    }
    return stack
};