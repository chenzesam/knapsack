function Parent (name) {
  this.name = name
}

Parent.prototype.say = function () {
  return this.name
}

function Child (name) {
  Parent.call(this, name)
}

Child.prototype = new Parent()

Child.prototype.constructor = Child

export default Child
