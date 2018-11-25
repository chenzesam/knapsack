import { curry } from '../src/curry'

describe('curry', () => {
  it('common curry', () => {
    function add (a, b) {
      return a + b
    }

    expect(curry(add)(1)(2)).toBe(3)
  })
})
