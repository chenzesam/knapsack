class Node {
  constructor (element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
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
      this.tail = node
    }
    this.length++
  }

  insert (position, element) {
    const node = new Node(element)
    let current = this.head
    let prev = null
    if (position > -1 && position <= this.length) {
      if (position === 0) {
        if (!this.head) {
          this.head = node
          this.tail = node
        } else {
          node.next = this.head
          this.head = node
        }
      } else {
        for (let i = 0; i < this.length; i++) {
          prev = current
          current = current.next
        }
        prev.next = node
        node.next = current
      }
      this.length++
      return true
    }
    return false
  }

  removeAt (position) {
    let current = this.head
    let prev = null
    if (position > -1 && position < this.length) {
      if (position === 0) {
        this.head = this.head.next
        if (this.length === 1) {
          this.tail = null
        }
      } else {
        for (let i = 0; i < position; i++) {
          prev = current
          current = current.next
        }
        prev.next = current.next
      }
      this.length--
      return current.element
    }
    return null
  }

  remove (element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  indexOf (element) {
    let current = this.head
    for (let i = 0; i < this.length; i++) {
      if (current.element === element) {
        return i
      }
      current = current.next
    }
    return -1
  }

  isEmpty () {
    return this.length === 0
  }

  size () {
    return this.length
  }

  getHead () {
    return this.head
  }

  toString () {
    let current = this.head
    let result = ''
    while (current) {
      result += current.element + ' '
      current = current.next
    }
    return result
  }

  print () {
    let current = this.head
    while (current) {
      console.log(current.element)
      current = current.next
    }
  }
}

export default LinkedList
