import { flatten, recursiveFlatten } from '../src/flatten'

describe('flatten', function () {
  it('flatten', () => {
    var arr = [1, 2, 3, [4, 5, [6, 7]]]
    expect(flatten(arr)).toEqual([1, 2, 3, 4, 5, 6, 7])
  })

  it('recursiveFlatten', () => {
    var arr = [1, 2, 3, [4, 5, [6, 7]]]
    expect(recursiveFlatten(arr)).toEqual([1, 2, 3, 4, 5, 6, 7])
  })
})
