/**
 * @description 模仿 Promise.all
 * @param {*} promises
 * @returns promise
 * @todo 添加测试用例
 */
function PromiseAll (promises) {
  return new Promise((resolve, reject) => {
    promises = Array.from(promises)
    // 当传入的 promises 为空数组的话, 则直接同步执行
    if (promises.length === 0) {
      resolve([])
    } else {
      let result = []
      let index = 0
      for (let i = 0; i < promises.length; i++) {
        // 传入的值可能是 Promise 或者普通值
        const promise = promises[i]
        promise.then(data => {
          result[i] = data
          if (++index === promises.length) {
            resolve(result)
          }
        }).catch(err => {
          reject(err)
        })
      }
    }
  })
}

export default PromiseAll
