var addTwoNumbers = function(l1, l2) {
  let carry=0;
  let sum = new ListNode(0)
  let head=sum;
  while(l1||l2||carry){
      let v1= l1 !==null?l1.val:0
      let v2= l2 !==null?l2.val:0
      let r =v1+v2+carry
      carry= r>=10?1:0
      sum.next=new ListNode(r%10)
      sum=sum.next;
      if(l1) l1=l1.next
      if(l2) l2=l2.next

  }
  return head.next
};