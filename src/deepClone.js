import is from './is'

const isObject = is('Object')
const isArray = is('Array')

/**
 * 浅克隆, 只克隆第一层, 会有很多问题, ex. 循环引用 / 引用绑定等
 * @param {any} source 复制源
 */
const shallowClone = (source) => {
  let result = {}

  if (!isObject(source)) {
    return source
  }

  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      result[key] = source[key]
    }
  }
  return result
}

/**
 * 递归版深克隆
 * @param {any} source 复制源
 */
const deepClone = (source) => {
  let result = {}

  if (!isObject(source) && !isArray(source)) return source

  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      const value = source[key]
      if (isObject(value)) {
        result[key] = deepClone(value)
      } else if (isArray(value)) {
        result[key] = []
        value.forEach((v, i) => {
          if (isObject(v)) {
            result[key][i] = deepClone(v)
          } else if (isArray(v)) {
            result[key][i] = deepClone(v)
          } else {
            result[key][i] = v
          }
        })
      } else {
        result[key] = value
      }
    }
  }
}

/**
 * 非递归版深克隆
 * @param {any} 复制源
 */
const advancedDeepClone = (source) => {
  let root = {}

  let stack = [
    {
      parent: root,
      key: undefined,
      data: source
    }
  ]

  while (stack.length !== 0) {
    // 去除栈内最后一个值
    const node = stack.pop()

    const parent = node.parent

    const key = node.key

    const data = node.data

    let res = parent

    if (typeof key !== 'undefined') {
      res = parent[key] = {}
    }

    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        if (typeof data[k] === 'object') {
          stack.push({
            parent: res,
            key: k,
            data: data[k]
          })
        } else {
          res[k] = data[k]
        }
      }
    }
  }
}

export {
  shallowClone,
  deepClone,
  advancedDeepClone
}
