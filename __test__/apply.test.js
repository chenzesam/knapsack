import '../src/utils/apply'

describe('apply.js', () => {
  function test (first, last) {
    return `${this.name} ${first} ${last}`
  }

  const obj = {
    name: 'test'
  }

  it('common', () => {
    expect(test.applyPolyfill(obj, ['first', 'last'])).toBe('test first last')
  })
})
