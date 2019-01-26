import findLastIndex from '../src/findLastIndex'

describe('findLastIndex.js', () => {
  const foo = [1, 2, 3, 4, 5, 2, 3]
  it('common', () => {
    expect(findLastIndex(foo, (v) => v === 5)).toBe(4)
    expect(findLastIndex(foo, (v) => v === 2)).toBe(5)
  })
})
