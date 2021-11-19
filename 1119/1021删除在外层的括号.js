/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let stack1 = []
    let stack2 = []
    for(let i of s) {
        if (stack1.length === 0 && i === '(') {
			stack1.push(i);
		} else if (stack1.length && i === '(') {
			stack1.push(i);
			stack2.push(i);
		} else if (stack1.length > 1 && i === ')') {
			stack1.pop();
			stack2.push(i);
		} else if (stack1.length === 1 && i === ')') {
			stack1.pop();
		}
    }
    return stack2.join('')
};