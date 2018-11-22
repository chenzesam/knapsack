import map from '../src/map'
import filter from '../src/filter'
import { reduce, reduceRight } from '../src/reduce'

describe('Array Method', () => {
  it('map', () => {
    expect(map([1, 2, 3], (v, i) => v * 2)).toEqual([2, 4, 6])
    expect(map([1, 2, 3], (v, i) => v * 2)).toEqual([2, 4, 6])
  })

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

  it('reduce', () => {
    expect(reduce([1, 2, 3], (prev, next) => prev + next)).toBe(6)
    expect(reduce([1, 2, 3], (prev, next) => prev + next, 4)).toBe(10)
  })


  it('reduceRight', () => {
    expect(reduceRight([1, 2, 3], (prev, next) => prev + next)).toBe(6)
    expect(reduceRight([1, 2, 3], (prev, next) => prev + next, 4)).toBe(10)
  })

})