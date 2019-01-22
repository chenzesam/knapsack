import allEqual from '../src/allEqual'

describe('allEqual', function () {
  it('common', () => {
    let arr = [1, 2, 3, 4, 5]
    let arr2 = [1, 1, 1, 1]
    expect(allEqual(arr)).toBe(false)
    expect(allEqual(arr2)).toBe(true)
  })
})
