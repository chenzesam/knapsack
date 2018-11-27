/**
 * @description 空闲时求值, 必要时立马获取
 * @class Idle
 * @method getValue():any 立马获取空闲求值的值
 * @var value:any 和 getValue 一样, 只是使用了 getter
 */
class Idle {
  constructor (callback) {
    this._callback = callback
    this._value = null
    this._idleHandle = window.requestIdleCallback(() => {
      this._value = this._callback()
    })
  }

  getValue () {
    if (this._value === null) {
      window.cancelIdleCallback(this._idleHandle)
      this._value = this._callback()
    }
    return this._value
  }

  get value () {
    if (this._value === null) {
      window.cancelIdleCallback(this._idleHandle)
      this._value = this._callback()
    }
    return this._value
  }
}

export default Idle
