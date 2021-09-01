var isPailindrome = function(head) {
  let a = '', b = '';
  while(head != null) {
    a = a + head.val
    b = head.val + b
    head = head.next
  }
  return a === b
}
isPailindrome([1,2,2,1])
isPailindrome([1,2,2])