class LinkedNode {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.head = null
  }

  append (element) {
    const node = new LinkedNode(element)
    if (!this.head) {
      this.head = node
    } else {
      let cur = this.head
      while (cur.next) {
        cur = cur.next
      }
      cur.next = node
    }
    return this
  }

  print () {
    let cur = this.head
    while (cur) {
      console.log(cur.val)
      cur = cur.next
    }
  }
}

export {
  LinkedNode
}
export default LinkedList
