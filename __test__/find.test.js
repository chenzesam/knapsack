import find from '../src/utils/find'

describe('find', function () {
  it('find', () => {
    expect(find([1, 2, 3], v => v > 1)).toBe(2)
    expect(find([1, 2, 3], v => v > 3)).toBe(null)
  })
})
