/**
 * @description compose 函数
 * @param {function:[]} atoms 需要
 * @returns {function}
 */
function compose (atoms) {
  return atoms.reduce((prev, next) => (...args) => prev(next(...args)))
}

function composeReverse (atoms) {
  return atoms.reduceRight((prev, next) => (...args) => prev(next(...args)))
}

export {
  compose,
  composeReverse
}
