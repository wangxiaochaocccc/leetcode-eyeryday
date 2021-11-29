// 1544

/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let res = []
    for(let item of s) {
        if(res.length && res[res.length-1] != item && res[res.length-1].toLowerCase() ==item.toLowerCase()){
            res.pop()
        }else {
            res.push(item)
        }
    }
    return res.join('')
};