import difference from '../src/utils/difference'

describe('difference', function () {
  const foo = [1, 2, 0, 4, 4]
  const arr = [2, 3, 1, 9, 4, 7]
  it('common', () => {
    expect(difference(foo, arr)).toEqual([
      3,
      9,
      7
    ])
  })
})
