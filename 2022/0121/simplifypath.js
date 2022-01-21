// 71 简化路径
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let res = []
    path = path.split('/')
    for(let item of path) {
        if(item != '' && item != '.') {
            if(item == '..' ){
                if(res.length>0) res.pop()
            }else {
                res.push(item)
            }
        }
    }
    return '/' + res.join('/')
};