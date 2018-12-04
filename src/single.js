function Instance () {

}

const Single = (function () {
  let instance = null
  return function () {
    if (!instance) {
      instance = new Instance()
    }
    return instance
  }
})()

export default Single
