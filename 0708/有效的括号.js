// 20 

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    if(s.length%2 === 1) return false

    for(let i in s){
        const a=s[i]
        if(a==='('||a==='['||a==='{'){
            stack.push(a)
        }else {
            const b = stack[stack.length-1]
            if((a===')'&&b==='(')||(a===']'&&b==='[')||(a==='}'&&b==='{')){
                stack.pop()
            }else {
                return false
            }
        }
    }
    return stack.length === 0 
}