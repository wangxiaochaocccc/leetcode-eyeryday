var lengthOfLongestSubstring = function(s) {
  let left = 0; //左指针
  let res=0;
  let map = new Map()
  for (let r=0;r<s.length;r++){
      while(map.has(s[r])&&map.get(s[r])>=left){
          left = map.get(s[r])+1
      }
      map.set(s[r],r)
      res = Math.max(res,r-left+1)
  }
  return res
};