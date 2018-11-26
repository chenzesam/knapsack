import findIndex from '../src/findIndex'

describe('findIndex', () => {
  it('findIndex', () => {
    expect(findIndex([1, 2, 3], v => v > 1)).toBe(1)
    expect(findIndex([1, 2, 3], v => v > 3)).toBe(-1)
  })
})
