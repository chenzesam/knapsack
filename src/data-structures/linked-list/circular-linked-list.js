class Node {
  constructor (element) {
    this.element = element
    this.prev = null
    this.next = null
  }
}

class CircularLinkedList {
  constructor () {
    this.length = 0
    this.head = null
    this.tail = null
  }

  append (element) {
    const node = new Node(element)
    if (!this.head) {
      this.head = node
      this.tail = node
      this.head.prev = this.tail
      this.tail.next = this.head
    } else {
      this.tail.next = node
      node.prev = this.tail
      node.next = this.head
      this.head.prev = node
      this.tail = node
    }
  }

  insert (position, element) {
    let current = this.head
    const node = new Node(element)
    if (position > -1 && position <= this.length) {
      if (position === 0) {
        node.next = this.head
        this.head.prev = node
        node.prev = this.tail
        this.head = node
      } else if (position === this.length) {
        this.append(element)
      } else {
        for (let i = 0; i < this.length; i++) {
          current = current.next
        }
        current.prev.next = node
        node.prev = current.prev
        node.next = current
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
          this.head.prev = this.tail
        }
      } else if (position === this.length) {
        current = this.tail
        this.tail.prev.next = this.head
        this.tail = this.tail.prev
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

export default CircularLinkedList
