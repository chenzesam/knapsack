import unique from '../src/unique'

describe('unique', () => {
  it('unique', () => {
    expect(unique([1, 2, 3, 3, 4, 1])).not.toBe([1, 2, 3, 4])
    expect(unique([1, 2, 3, 3, 4, 1])).toEqual([1, 2, 3, 4])
  })
})
