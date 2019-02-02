import '../src/utils/call'

describe('call.js', () => {
  function test (first, last) {
    return `${this.name} ${first} ${last}`
  }

  const obj = {
    name: 'test'
  }

  it('common', () => {
    expect(test.callPolyfill(obj, 'first', 'last')).toBe('test first last')
  })
})
