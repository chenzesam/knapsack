import filter from '../src/utils/filter'

describe('filter', () => {
  it('filter', () => {
    expect(
      filter([
        { name: 'sam', age: 20 },
        { name: 'chen', age: 16 },
        { name: 'baba', age: 50 }
      ], v => v.age > 18)
    )
      .toEqual([
        { name: 'sam', age: 20 },
        { name: 'baba', age: 50 }
      ])
  })
})
