/**
 * @description Lazy 类
 * @class Lazy
 * @method add(function(next)): 添加执行函数, 执行函数传入形参 next, 用于控制流程
 * @method start(): 启动
 * @todo 添加测试用例
 */
class Lazy {
  constructor () {
    this._list = []
    this._next = this._next.bind(this)
  }
  _next () {
    const fn = this._list.shift()
    fn && fn()
  }
  start () {
    this._next()
  }
  add (fn) {
    let _fn = () => {
      fn(this._next)
    }
    this._list.push(_fn)
    return this
  }
}

export default Lazy
