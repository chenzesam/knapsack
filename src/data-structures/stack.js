const Stack = (function () {
  // 为了模拟私有变量...
  const itemsMap = new WeakMap()
  class Stack {
    constructor () {
      itemsMap.set(this, [])
    }
    getItems () {
      return itemsMap.get(this)
    }
    push (value) {
      this.getItems().push(value)
    }
    pop () {
      return this.getItems().pop()
    }
    peek () {
      const items = this.getItems()
      return items[items.length - 1]
    }
    isEmpty () {
      return this.getItems().length === 0
    }
    size () {
      return this.getItems().length
    }
  }
  return Stack
})()

export default Stack
