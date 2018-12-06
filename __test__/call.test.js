import '../src/call'

describe('call.js', () => {
  function test (first, last) {
    return `${this.name} ${first} ${last}`
  }

  const obj = {
    name: 'test'
  }

  it('es3', () => {
    expect(test.callPolyfillES3(obj, 'first', 'last')).toBe('test first last')
  })

  it('es6', () => {
    expect(test.callPolyfillES6(obj, 'first', 'last')).toBe('test first last')
  })
})
