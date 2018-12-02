/**
 * @description 继承对象
 * @param {class} Child 子对象
 * @param {class} Parent 父对象
 */
function extend (Child, Parent) {
  Child.prototype = new Parent()
  Child.prototype.constructor = Child
}

export default extend
