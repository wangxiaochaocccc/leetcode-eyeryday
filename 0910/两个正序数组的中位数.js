var findMedianSortedArrays = function(nums1, nums2) {
  // 两个数组长度
  let l1 = nums1.length;
  let l2 = nums2.length;
  // 总长度
  let len = l1 + l2;
  // 两个指针
  let point1 = 0;
  let point2 = 0;
  // 当前值 和前一个值
  let curVal;
  let prevVal;
  for(let i = 0; i<=Math.floor(len/2);i++){
      prevVal = curVal;
      if(point1 < l1 && (point2 >= l2 || nums1[point1] < nums2[point2])){
          curVal = nums1[point1]
          point1++
      }else {
          curVal = nums2[point2]
          point2++
      }
  }
  return len%2 === 0 ? (curVal + prevVal)/2 : curVal
};