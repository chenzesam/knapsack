function toCamel (str) {
  return str.replace(/(^\w)|_(\w)/g, (m, $1, $2) => $1 ? $1.toUpperCase() : $2.toUpperCase())
}

export default toCamel
