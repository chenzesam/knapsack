/**
 * @description 去掉左右空格
 * @param {string} str
 * @returns {string}
 */
function trim (str) {
  let reg = /(^\s+)|(\s+$)/g
  return str.replace(reg, '')
}

/**
 * @description 去掉左空格
 * @param {string} str
 * @returns {string}
 */
function trimStart (str) {
  let reg = /^\s+/g
  return str.replace(reg, '')
}

/**
 * @description 去掉右空格
 * @param {string} str
 * @returns {string}
 */
function trimEnd (str) {
  let reg = /\s+$/g
  return str.replace(reg, '')
}

export {
  trim,
  trimStart,
  trimEnd
}
