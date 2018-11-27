/**
 * @description bind event
 * @param {DOM} dom 绑定事件的 DOM 节点
 * @param {String} selector 子选择器, 代理模式使用
 * @param {String} type 事件类型
 * @param {Func} fn 回调函数, 接受 Event 作为参数
 */
const addEvent = (dom, selector, type, fn) => {
  // 当不是代理模式时
  if (!fn) {
    fn = type
    type = selector
    selector = null
  }

  // 当是代理模式时
  if (selector) {
    dom.addEventListener(type, (e) => {
      let target = e.target
      let childrenNodes = dom.querySelectorAll(selector)
      childrenNodes.forEach(childrenNode => {
        if (childrenNode === target) {
          fn(e)
        }
      })
    })
  } else {
    dom.addEventListener(type, fn)
  }
}

export default addEvent
