class Set {
  constructor () {
    this.items = {}
  }
  add (value) {
    if (!this.has(value)) {
      this.items[value] = value
      return true
    }
    return false
  }
  remove (value) {
    if (this.has(value)) {
      delete this.items[value]
      return true
    }
    return false
  }
  has (value) {
    return this.items.hasOwnProperty(value)
  }
  clear () {
    this.items = {}
  }
  size () {
    return Object.keys(this.items).length
  }
  values () {
    return Object.values(this.items)
  }
  union (otherSet) {
    const unionSet = new Set()
    let values = null

    values = this.values()
    values.forEach(value => {
      unionSet.add(value)
    })

    values = otherSet.values()
    values.forEach(value => {
      unionSet.add(value)
    })
    return unionSet
  }

  intersection (otherSet) {
    const intersectionSet = new Set()
    let values = this.values()
    values.forEach(value => {
      if (otherSet.has(value)) {
        intersectionSet.add(value)
      }
    })
    return intersectionSet
  }

  difference (otherSet) {
    const diffSet = new Set()
    let values = this.values()
    values.forEach(value => {
      if (!otherSet.has(value)) {
        diffSet.add(value)
      }
    })
    return diffSet
  }

  subset (otherSet) {
    let values = this.values()
    if (this.size() > otherSet.size()) {
      return false
    }
    values.forEach(value => {
      if (!otherSet.has(value)) {
        return false
      }
    })
    return true
  }
}

export default Set
