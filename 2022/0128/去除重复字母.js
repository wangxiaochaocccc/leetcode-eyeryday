/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    // s = s.split('')
    let map = new Map()
    let res = []
    for(let item of s) {
        if(map.has(item)){
            map.set(item,map.get(item) + 1) 
        }else {
            map.set(item,1)
        }
    }

    for(let item of s) {
        map.set(item, map.get(item) - 1)
        if(!res.includes(item)) {
            while(res.length && item < res[res.length - 1] && map.get(res[res.length-1])){
                res.pop()
            }
            res.push(item)
        }
    }
    return res.join('')
};