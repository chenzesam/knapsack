import countBy from '../src/countBy'

describe('countBy.js', () => {
  const arr = [1.1, 2.3, 4.4, 2.2]
  const foo = ['o', 'p', 'q', 'jjx', '109238']
  it('common', () => {
    expect(countBy(arr, Math.floor)).toEqual({
      1: 1,
      2: 2,
      4: 1
    })

    expect(countBy(foo, 'length')).toEqual({
      1: 3,
      3: 1,
      6: 1
    })
  })
})
