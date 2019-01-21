import all from '../src/all'

describe('all', function () {
  it('common', () => {
    let arr = [1, 2, 3, 4, 5]
    expect(all(arr, v => v > 0)).toBe(true)
    expect(all(arr, v => v > 3)).toBe(false)
  })
})
