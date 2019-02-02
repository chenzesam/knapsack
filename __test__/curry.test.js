import { curry, curryWithInfinityParams } from '../src/utils/curry'

describe('curry', () => {
  it('common curry', () => {
    function add (a, b) {
      return a + b
    }
    expect(curry(add)(1)(2)).toBe(3)
  })

  it('curry with infinity params', () => {
    function addWithInfinityParams (...rest) {
      return rest.reduce((a, b) => a + b)
    }

    expect(curryWithInfinityParams(addWithInfinityParams)(1)(2)(3) + 0).toBe(6)
    expect(curryWithInfinityParams(addWithInfinityParams)(1)(2)(3)(4) + 0).toBe(10)
  })
})
