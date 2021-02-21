/* eslint-disable */
Function.prototype.bindPolyfill = function (ctx, ...rest) {

  if (typeof this !== 'function') {
    throw Error('Function.prototype.bind - what is trying to be bound is not callable');
  }

  const _this = this;

  function Obj () {};

  function Bound (...innerRest) {
    // 如果使用了 new (Fn.bind(ctx))() 那么 this 的原型是 Bound, 这时候的上下文应该交回去, 否则使用传入的上下文
    return _this.apply(this instanceof Bound ? this : ctx, [...rest, ...innerRest]);
  }

  // 如果使用 new 构建的话，返回的值需要可以访问到初始函数的原型方法，所以需要绑定原型关系。
  Obj.prototype = this.prototype;
  // 原型链转移, 否则修改 instance 的 prototype 会修改到 this 的 prototype。
  Bound.prototype = new Obj();

  return Bound;
}
