import { reduce, reduceRight } from '../src/reduce'

describe('reduce', () => {
  it('reduce', () => {
    expect(reduce([1, 2, 3], (prev, next) => prev + next)).toBe(6)
    expect(reduce([1, 2, 3], (prev, next) => prev + next, 4)).toBe(10)
  })

  it('reduceRight', () => {
    expect(reduceRight([1, 2, 3], (prev, next) => prev + next)).toBe(6)
    expect(reduceRight([1, 2, 3], (prev, next) => prev + next, 4)).toBe(10)
  })
})
