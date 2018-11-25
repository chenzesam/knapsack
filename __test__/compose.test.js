import { compose, composeReverse } from '../src/compose'

describe('compose', function () {
  it('compose', () => {
    expect(compose([
      a => a + 3,
      a => a + 2,
      a => a + 1
    ])(0)).toBe(6)
  })

  it('composeReverse', () => {
    expect(composeReverse([
      a => a + 3,
      a => a + 2,
      a => a + 1
    ])(0)).toBe(6)
  })
})
