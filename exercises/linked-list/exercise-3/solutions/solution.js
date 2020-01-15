function midpoint(list) {
  let fast = list.getFirst();
  let slow = list.getFirst();

  while(fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  } 

  return slow
}