import any from '../src/utils/any'

describe('any', function () {
  it('common', () => {
    let arr = [1, 2, 3, 4, 5]
    expect(any(arr, v => v > 0)).toBe(true)
    expect(any(arr, v => v > 3)).toBe(true)
    expect(any(arr, v => v > 5)).toBe(false)
    expect(any(arr, v => v < 0)).toBe(false)
  })
})
