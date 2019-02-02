/**
 * @description 通过字符串获取对象值
 * @param {object} obj
 * @param {string} path
 * @returns {any}
 */
function get (obj, path) {
  let reg = /\w+/g
  return path.match(reg).reduce((val, subPath) => val[subPath], obj)
}

export default get
