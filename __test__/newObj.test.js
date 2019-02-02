import newObj from '../src/utils/newObj'
import instanceOf from '../src/utils/instanceOf'

describe('newObj.js', () => {
  it('newObj', () => {
    function Obj () {}
    let obj = newObj(Obj)
    expect(instanceOf(obj, Obj)).toBe(true)
  })
})
