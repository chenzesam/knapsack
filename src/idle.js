class Idle {
  constructor(callback) {
    this._callback = callback
    this._value = null
    this._idleHandle = requestIdleCallback(() => {
      this._value = this._callback()
    })
  }

  getValue() {
    if (this._value === null) {
      cancelIdleCallback(this._idleHandle)
      this._value = this._callback()
    }
    return this._value
  }

  get value() {
    if (this._value === null) {
      cancelIdleCallback(this._idleHandle)
      this._value = this._callback()
    }
    return this._value
  }
}

export default Idle