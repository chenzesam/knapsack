import includes from '../src/includes'

describe('includes', function () {
  it('includes', () => {
    expect(includes([1, 2, 3], 1)).toBe(true)
    expect(includes([1, 2, 3], 0)).toBe(false)
  })
})
