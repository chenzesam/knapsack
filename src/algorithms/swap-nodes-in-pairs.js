function swapNodesInPairs (head) {
  if (!head) return null
  let prev = { next: head }

  // 获取当前的第二个节点, 用于返回结果
  let resultHead = prev.next.next
  if (!resultHead) return head

  while (prev.next && prev.next.next) {
    let first = prev.next
    let second = prev.next.next;
    [prev.next, second.next, first.next] = [second, first, second.next]
    prev = first
  }
  return resultHead
}

export default swapNodesInPairs
