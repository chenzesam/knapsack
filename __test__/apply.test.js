import '../src/apply'

describe('apply.js', () => {
  function test (first, last) {
    return `${this.name} ${first} ${last}`
  }

  const obj = {
    name: 'test'
  }

  it('es3', () => {
    expect(test.applyPolyfillES3(obj, ['first', 'last'])).toBe('test first last')
  })

  it('es6', () => {
    expect(test.applyPolyfillES6(obj, ['first', 'last'])).toBe('test first last')
  })
})
