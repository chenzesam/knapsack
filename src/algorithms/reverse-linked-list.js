function reverseLinkedList (head) {
  let prev = null
  let cur = head
  while (cur) {
    [cur.next, prev, cur] = [prev, cur, cur.next]
  }
  return prev
}

export default reverseLinkedList
