
/**
 * @description 事件模块
 * @class Event
 * @method once(type:string, callback:function): 绑定一个事件, 该事件只触发一次
 * @method on(type:string, callback:function): 绑定一个事件
 * @method emit(type:string, rest:any[]): 触发一个事件, 并传递参数 rest 给函数调用
 * @method remove(type:string, callback:function): 清除某个类型的回调函数
 * @method clear(): 清除所有事件
 */
class Event {
  constructor () {
    this.events = {}
  }

  once (type, callback) {
    if (!this.events[type]) {
      this.events[type] = []
    }
    this.events[type].push({
      callback,
      isOnce: true
    })
  }

  on (type, callback) {
    if (!this.events[type]) {
      this.events[type] = []
    }
    this.events[type].push({
      callback,
      isOnce: false
    })
  }

  emit (type, ...rest) {
    if (this.events[type] === undefined) {
      throw new Error('There is no event of this type!')
    }
    this.events[type].forEach((event, i) => {
      event.callback(...rest)
      if (event.isOnce) {
        this.events[type][i] = null
      }
    })
    this.events[type] = this.events[type].filter(event => {
      return !(event === null)
    })
  }

  remove (type, callback) {
    this.events[type].forEach((event, i) => {
      if (event.callback === callback) {
        this.events[type][i] = null
      }
    })
    this.events[type] = this.events[type].filter(event => {
      return !(event === null)
    })
  }

  clear () {
    this.events = {}
  }
}

export default new Event()
