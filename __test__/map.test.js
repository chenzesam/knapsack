import map from '../src/utils/map'

describe('map', () => {
  it('map', () => {
    expect(map([1, 2, 3], (v, i) => v * 2)).toEqual([2, 4, 6])
    expect(map([1, 2, 3], (v, i) => v * 2)).toEqual([2, 4, 6])
  })
})
