const instanceOf = (instance, object) => {
  let result = false
  let op = object.prototype
  let ip = instance.__proto__

  while(ip) {
    if (ip === op) {
      result = true
      break
    }
    ip = ip.__proto__
  }
  return result
}

export default instanceOf