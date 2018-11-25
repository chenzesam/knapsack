import is from '../src/is'

describe('is.js', () => {
  it('测试 is(\'Object\'', () => {
    expect(is('Object')({ name: 'sam' })).toBe(true)
    expect(is('Object')(null)).not.toBe(true)
  })

  it('测试 is(\'String\')', () => {
    expect(is('String')('hello world!')).toBe(true)
    expect(is('String')(1123)).not.toBe(true)
  })
})
