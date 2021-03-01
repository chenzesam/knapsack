function Parent (name) {
  this.name = name
}

Parent.prototype.say = function () {
  return this.name
}

function Child (name) {
  Parent.call(this, name)
}

Child.prototype = Object.create(Parent.prototype)

Child.prototype.constructor = Child

export default Child
