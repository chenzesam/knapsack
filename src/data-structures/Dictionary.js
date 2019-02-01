class Dictionary {
  constructor () {
    this.items = {}
  }

  has (key) {
    return this.items.hasOwnProperty(key)
  }

  add (key, value) {
    if (!this.has(key)) {
      this.items[key] = value
      return true
    }
    return false
  }

  delete (key) {
    if (this.has(key)) {
      delete this.items[key]
      return true
    }
    return false
  }

  keys () {
    return Object.keys(this.items)
  }

  get (key) {
    return this.has(key) ? this.items[key] : undefined
  }

  getItems () {
    return this.items
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
}

export default Dictionary
