const Queue = (function () {
  const itemsMap = new WeakMap()
  class Element {
    constructor (value, priority = 999) {
      this.value = value
      this.priority = priority
    }
  }
  class Queue {
    constructor () {
      itemsMap.set(this, [])
    }
    getItems () {
      return itemsMap.get(this)
    }
    enqueue (value, priority) {
      const element = new Element(value, priority)
      const items = this.getItems()
      let added = false
      for (let i = 0; i < items.length; i++) {
        if (element.priority < items[i].priority) {
          items.splice(i, 0, element)
          added = true
          break
        }
      }
      if (!added) {
        items.push(element)
      }
    }
    dequeue () {
      return this.getItems().shift()
    }
    front () {
      return this.getItems()[0]
    }
    isEmpty () {
      return this.getItems().length === 0
    }
    size () {
      return this.getItems().length
    }
  }
  return Queue
})()
export default Queue
