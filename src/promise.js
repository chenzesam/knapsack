// 状态
const PENDING = 0
const FULFILLED = 1
const REJECTED = 2

function Promise (fn) {
  // 存储该 promise 状态, 初始为 PENDING
  let state = PENDING

  // FULFILLED 或 REJECTED 带来的值
  let value = null

  // 存储 then 调用的成功或失败回调
  let handlers = []

  // 状态迁移函数 pending => fulfill
  function fulfill (result) {
    state = FULFILLED
    value = result
    handlers.forEach(handle)
    handlers = null
  }

  // 同上 pending => reject
  function reject (error) {
    state = REJECTED
    value = error
    handlers.forEach(handle)
    handlers = null
  }

  // resolve 状态迁移
  function resolve (result) {
    try {
      let then = getThen(result)
      if (then) {
        // 递归 resolve 待解析的 Promise
        doResolve(then.bind(result), resolve, reject)
        return
      }
      fulfill(result)
    } catch (error) {
      reject(error)
    }
  }

  /**
   * 检查一个值是否为 Promise
   * 若为 Promise 则返回该 Promise 的 then 方法
   *
   * @param {Promise|any} value
   * @return {function|null}
   */
  function getThen (value) {
    // let t = typeof value
    // if (value && (t === 'object' || t === 'function')) {
    //   const then = value.then
    //   // 复杂的 thenable 判断
    //   if (typeof then === 'function') {
    //     return then
    //   }
    // }
    if (value instanceof Promise) {
      return value.then
    }
    return null
  }

  /**
   * 传入一个需被 resolve 的函数，该函数可能存在不确定行为
   * 确保 onFulfilled 与 onRejected 只会被调用一次
   * 在此不保证该函数一定会被异步执行
   *
   * @param {Function} fn 不能信任的回调函数
   * @param {Function} onFulfilled
   * @param {Function} onRejected
   */
  function doResolve (fn, onFulfilled, onRejected) {
    let done = false
    try {
      fn(function (value) {
        // if (done) {
        //   return
        // }
        // done = true

        // 执行由 resolve 传入的 resolve 回调
        onFulfilled(value)
      }, function (reason) {
        // if (done) {
        //   return
        // }
        // done = true
        onRejected(reason)
      })
    } catch (error) {
      // if (done) {
      //   return
      // }
      // done = true
      onRejected(error)
    }
  }

  function handle (handler) {
    if (state === PENDING) {
      handlers.push(handler)
    } else {
      if (state === FULFILLED && typeof handler.onFulfilled === 'function') {
        handler.onFulfilled(value)
      }
      if (state === REJECTED && typeof handler.onRejected === 'function') {
        handler.onRejected(value)
      }
    }
  }

  // 纯属用于将 then 置为异步执行
  this.done = function (onFulfilled, onRejected) {
    setTimeout(function () {
      handle({
        onFulfilled,
        onRejected
      })
    }, 0)
  }

  this.then = function (onFulfilled, onRejected) {
    const _this = this
    return new Promise(function (resolve, reject) {
      return _this.done(function (result) {
        if (typeof onFulfilled === 'function') {
          try {
            return resolve(onFulfilled(result))
          } catch (error) {
            return reject(error)
          }
        } else {
          return resolve(resolve)
        }
      }, function (error) {
        if (typeof onRejected === 'function') {
          try {
            return resolve(onRejected(error))
          } catch (error) {
            return reject(error)
          }
        } else {
          return reject(error)
        }
      })
    })
  }

  this.catch = function (onRejected) {
    return this.then(null, onRejected)
  }

  doResolve(fn, resolve, reject)
  // fn(resolve, reject)
}

export default Promise
