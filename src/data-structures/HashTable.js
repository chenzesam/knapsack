import LinkedList from './LinkedList'

function djb2HasCode (key) {
  let hash = 5381
  for (let i = 0; i < key.length; i++) {
    hash = hash * 33 + key.charCodeAt(i)
  }
  return hash % 1024
}

function loseloseHashCode (key) {
  let hash = 0
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i)
  }
  return hash % 37
}

class ValuePair {
  constructor (key, value) {
    this.key = key
    this.value = value
  }
}

class HashTable {
  constructor () {
    this.table = []
  }

  put (key, value) {
    const position = loseloseHashCode(key)
    if (!this.table[position]) {
      this.table[position] = new LinkedList()
    }
    this.table[position].append(new ValuePair(key, value))
  }

  get (key) {
    const position = loseloseHashCode(key)
    const result = []
    if (this.table[position]) {
      let current = this.table[position].getHead()
      while (current) {
        if (current.element.key === key) {
          result.push(current.element)
        }
        current = current.next
      }
      return result
    }
    return undefined
  }

  remove (key) {
    const position = loseloseHashCode(key)
    let needRemovePair = []
    if (this.table[position]) {
      let current = this.table[position].getHead()
      while (current) {
        if (current.element.key === key) {
          needRemovePair.push(current.element)
        }
        current = current.next
      }
      needRemovePair.forEach(pair => {
        this.table[position].remove(pair)
      })
      if (this.table[position].isEmpty()) {
        this.table[position] = undefined
      }
      return true
    }
    return false
  }
}

export default HashTable
