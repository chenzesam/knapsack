import every from '../src/every'

describe('every', function () {
  it('every', () => {
    expect(every([1, 2, 3], (v, i) => v > 0)).toBe(true)
    expect(every([0, 2, 3], (v, i) => v > 0)).toBe(false)
  })
})
