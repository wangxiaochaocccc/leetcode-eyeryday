//1111  有效的括号嵌套深度

var maxDepthAfterSplit = function(seq) {
    let dep = 0;
    return seq.split("").map((value, index) => {
        if (value === '(') {
            ++dep;
            return dep % 2;
        } else {
            let ans = dep % 2;
            --dep;
            return ans;
        }
    });
    
};