// 844 比较含退格的字符串

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    function filterStr(str) {
        let res = []
        for(let item of str) {
            if(item != '#') {
                res.push(item)
            }else {
                res.pop()
            }
        }
        return res.toLocaleString()
    }
    return filterStr(s) === filterStr(t)
};