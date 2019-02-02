import some from '../src/utils/some'

describe('some', () => {
  it('some', () => {
    expect(some([0, 2, 3], (v, i) => v === 0)).toBe(true)
    expect(some([1, 2, 3], (v, i) => v < 0)).toBe(false)
  })
})
