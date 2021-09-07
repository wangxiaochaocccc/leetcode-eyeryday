var calPoints = function(ops) {
  let res = []
  ops.forEach(item => {
      switch (item) {
          case "D" :
              res.push(+res[res.length-1]*2)
              break;
          case "C" :
              res.pop()
              break;
          case "+" :
              res.push(+res[res.length-1] + +res[res.length-2])
              break;
          default :
              res.push(+item)
      }
  })
  return res.reduce((prev,cur) => prev+cur)
};