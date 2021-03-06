import instanceOf from '../src/utils/instanceOf'

describe('instanceof', () => {
  it('instanceof', () => {
    function A () {}
    let a = new A()

    expect(instanceOf(a, A)).toBe(true)
    expect(instanceOf(a, Function)).toBe(false)
  })
})
