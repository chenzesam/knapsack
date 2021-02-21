class Node {
  constructor (element) {
    this.element = element
    this.prev = null
    this.next = null
  }
}

class DoubleLinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  append (element) {
    const node = new Node(element)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.length++
  }

  insert (position, element) {
    const node = new Node(element)
    let current = this.head
    if (position > -1 && position <= this.length) {
      if (position === 0) {
        if (!this.head) {
          this.head = node
          this.tail = node
        } else {
          node.next = current
          current.prev = node
          this.head = node
        }
      } else if (position === this.length) {
        this.append(element)
      } else {
        for (let i = 0; i < this.length; i++) {
          current = current.next
        }
        current.prev.next = node
        node.next = current
        node.prev = current.prev
        current.prev = node
      }
      this.length++
      return true
    }
    return false
  }

  removeAt (position) {
    let current = this.head
    if (position > -1 && position < this.length) {
      if (position === 0) {
        this.head = this.head.next
        if (this.length === 1) {
          this.tail = null
        } else {
          this.head.prev = null
        }
      } else if (position === this.length - 1) {
        current = this.tail
        this.tail = this.tail.prev
        this.tail.next = null
      } else {
        for (let i = 0; i < this.length; i++) {
          current = current.next
        }
        current.prev.next = current.next
        current.next.prev = current.prev
      }
      this.length--
      return current.element
    }
    return null
  }
}

export default DoubleLinkedList
