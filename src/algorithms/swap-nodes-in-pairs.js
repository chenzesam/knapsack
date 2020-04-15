import { LinkedNode } from '../data-structures/linked-list/linked-list'

function swapNodesInPairs (head) {
  let parent = new LinkedNode(null)
  parent.next = head
  let prev = parent
  while (prev.next && prev.next.next) {
    let first = prev.next
    let second = prev.next.next;
    [prev.next, second.next, first.next] = [second, first, second.next]
    prev = first
  }
  return parent.next
}

export default swapNodesInPairs
