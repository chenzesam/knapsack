function create (obj1, obj2) {
  function Obj () {}
  Obj.prototype = obj1
  return new Obj()
}

export default create
