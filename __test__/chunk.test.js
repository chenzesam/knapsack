import chunk from '../src/utils/chunk'

describe('chunk', function () {
  it('common', () => {
    let arr = [1, 2, 3, 4, 5]
    expect(chunk(arr, 2)).toEqual([[1, 2], [3, 4], [5]])
  })
})
