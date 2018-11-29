/**
 * @description 通过字符串获取对象值
 * @param {object} obj
 * @param {string} str
 * @returns {any}
 */
function get (obj, str) {
  let reg = /\w+/g
  str.match(reg).forEach(matchString => {
    obj = obj[matchString]
  })
  return obj
}

export default get
