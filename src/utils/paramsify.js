/**
 * @description 解析 url 的 query 参数
 * @param {string} url url
 */
function paramsify (url) {
  const params = url.split('?')[1].split('&')
  const result = {}
  params.forEach(param => {
    let [key, val] = param.split('=')

    // 解码
    val = decodeURIComponent(val)
    // 转数字
    val = /^\d+/.test(val) ? parseInt(val) : val

    if (/=/.test(param)) {
      if (result[key]) {
        result[key] = [].concat(result[key], val)
      } else {
        result[key] = val
      }
    } else {
      result[key] = true
    }
  })

  return result
}

export default paramsify
