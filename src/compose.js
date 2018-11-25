const compose = (atoms) => {
  return atoms.reduce((prev, next) => (...args) => prev(next(...args)))
}

const composeReverse = (atoms) => {
  return atoms.reduceRight((prev, next) => (...args) => prev(next(...args)))
}

export {
  compose,
  composeReverse
}
