// 单调栈
var nextGreaterElement = function(nums1, nums2) {
  let map = new Map() 
  let stack = []
  let res = []
  for(let num of nums2){
      while(stack.length && num > stack[stack.length-1]){
          map.set(stack.pop(),num)
      }
      stack.push(num)
  }
  for(let sta of stack){
      map.set(sta,-1)
  }
  for(let num of nums1){
      res.push(map.get(num))
  }
  return res
};