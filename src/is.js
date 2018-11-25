/**
 * 返回一个函数, 该函数接受一个变量, 判断是否等于 type
 * @param {String} type 要判断的类型, ex. 'Object'
 */
const is = type => target => {
  return Object.prototype.toString.call(target) === `[object ${type}]`
}

// class Is {
//   get Object() {
//     return target => Object.prototype.toString.call(target) === '[object Object]'
//   }
//   get Array() {
//     return target => Object.prototype.toString.call(target) === '[object Array]'
//   }
//   get Number() {
//     return target => Object.prototype.toString.call(target) === '[object Number]'
//   }
//   get Boolean() {
//     return target => Object.prototype.toString.call(target) === '[object Boolean]'
//   }
//   get Function() {
//     return target => Object.prototype.toString.call(target) === '[object Function]'
//   }
//   get Null() {
//     return target => Object.prototype.toString.call(target) === '[object Null]'
//   }
//   get Undefined() {
//     return target => Object.prototype.toString.call(target) === '[object Undefined]'
//   }
//   get Symbol() {
//     return target => Object.prototype.toString.call(target) === '[object Symbol]'
//   }
//   get Set() {
//     return target => Object.prototype.toString.call(target) === '[object Set]'
//   }
//   get Map() {
//     return target => Object.prototype.toString.call(target) === '[object Map]'
//   }
// }

// export default new Is()
export default is
