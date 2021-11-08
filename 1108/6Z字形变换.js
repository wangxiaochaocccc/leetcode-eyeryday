// 6
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // 如果只有一行 直接返回
    if(numRows === 1) return s
    // 声明一个numRows个元素的数组
    let arr = new Array(numRows).fill('')
    //当前行
    let curline = 0
    //向上还是向下
    let downOrUp = true
    //遍历字符串
    for(let i = 0;i < s.length; i+=1) {
        //元素存到对应行位置
        arr[curline] += s[i]

        //当前行数
        if(downOrUp) {
            curline += 1
        }else {
            curline -= 1
        }
        //向上还是向下
        if(curline === 0)  downOrUp = true
        if(curline === numRows-1)  downOrUp = false
    }
    return arr.join('')
};