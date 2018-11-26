import newObj from '../src/newObj'
import instanceOf from '../src/instanceOf'

describe('newObj.js', () => {
  it('newObj', () => {
    function Obj () {}
    let obj = newObj(Obj)
    expect(instanceOf(obj, Obj)).toBe(true)
  })
})
